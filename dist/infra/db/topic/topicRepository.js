"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicRepository = void 0;
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class TopicRepository {
    async add(params) {
        const { topic: topicModel } = prisma;
        return topicModel.create({
            data: {
                title: params.title,
                description: params.description,
                user_id: params.user_id,
                active: true
            }
        });
    }
    async getById(id) {
        const { topic: topicModel } = prisma;
        return topicModel.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                user_id: true,
                active: true
            }
        });
    }
    async edit(params) {
        const { topic: topicModel } = prisma;
        return topicModel.update({
            where: {
                id: params.id
            },
            data: {
                title: params.title,
                description: params.description,
                updated_at: new Date()
            }
        });
    }
    async deactivate(id) {
        const { topic: topicModel } = prisma;
        return topicModel.update({
            where: {
                id
            },
            data: {
                active: false,
                updated_at: new Date()
            },
            select: {
                id: true,
                active: true,
                updated_at: true
            }
        });
    }
    async addReaction(params) {
        const { reaction_topic: reactionTopicModel } = prisma;
        const verifyExisting = await reactionTopicModel.findFirst({
            where: {
                AND: [
                    {
                        topic_id: params.topic_id
                    },
                    {
                        user_id: params.user_id
                    },
                    {
                        active: true
                    }
                ]
            }
        });
        if (params.type === 'clear') {
            if (!verifyExisting) {
                throw new Error('Reaction not found');
            }
            return reactionTopicModel.update({
                where: {
                    id: verifyExisting.id
                },
                data: {
                    active: false,
                    updated_at: new Date()
                }
            });
        }
        if (verifyExisting) {
            return reactionTopicModel.update({
                where: {
                    id: verifyExisting.id
                },
                data: {
                    type: params.type,
                    updated_at: new Date()
                }
            });
        }
        return reactionTopicModel.create({
            data: {
                topic_id: params.topic_id,
                user_id: params.user_id,
                type: params.type,
                active: true
            }
        });
    }
    async addComment(params) {
        const { comment_topic: commentTopicModel } = prisma;
        return commentTopicModel.create({
            data: {
                topic_id: params.topic_id,
                user_id: params.user_id,
                description: params.description,
                active: true
            }
        });
    }
    async upsertVote(params) {
        const { vote_topic: voteTopicModel } = prisma;
        const existing = await voteTopicModel.findFirst({
            where: {
                AND: [
                    {
                        topic_id: params.topic_id
                    },
                    {
                        user_id: params.user_id
                    }
                ]
            }
        });
        if (existing) {
            return voteTopicModel.update({
                where: {
                    id: existing.id
                },
                data: {
                    type: params.type,
                    active: true,
                    updated_at: new Date()
                }
            });
        }
        return voteTopicModel.create({
            data: {
                topic_id: params.topic_id,
                user_id: params.user_id,
                type: params.type,
                active: true
            }
        });
    }
    async getAllActive() {
        const { topic: topicModel } = prisma;
        const response = await topicModel.findMany({
            where: {
                active: true
            },
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
                votes: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                commentTopics: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                reactionTopics: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return response.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            user_id: item.user_id,
            created_by: item.user?.name || '',
            active: item.active,
            created_at: item.created_at,
            updated_at: item.updated_at,
            votes: {
                totalLikes: item.votes.filter(vote => vote.type === 'like').length,
                totalDislikes: item.votes.filter(vote => vote.type === 'dislike').length,
                data: item.votes.map(vote => ({
                    id: vote.id,
                    user_id: vote.user_id,
                    user_name: vote.user?.name || '',
                    type: vote.type,
                    active: vote.active,
                    created_at: vote.created_at,
                    updated_at: vote.updated_at
                }))
            },
            comments: {
                total: item.commentTopics.length,
                data: item.commentTopics.map(comment => ({
                    id: comment.id,
                    user_id: comment.user_id,
                    user_name: comment.user?.name || '',
                    description: comment.description,
                    active: comment.active,
                    created_at: comment.created_at,
                    updated_at: comment.updated_at
                }))
            },
            reactions: {
                totalLikes: item.reactionTopics.filter(reaction => reaction.type === 'like').length,
                totalDislikes: item.reactionTopics.filter(reaction => reaction.type === 'dislike').length,
                data: item.reactionTopics.map(reaction => ({
                    id: reaction.id,
                    user_id: reaction.user_id,
                    user_name: reaction.user?.name || '',
                    type: reaction.type,
                    active: reaction.active,
                    created_at: reaction.created_at,
                    updated_at: reaction.updated_at
                }))
            }
        }));
    }
    async getDetailsById(id) {
        const { topic: topicModel } = prisma;
        const item = await topicModel.findFirst({
            where: {
                id,
                active: true
            },
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
                votes: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                commentTopics: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                reactionTopics: {
                    where: {
                        active: true
                    },
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                }
            }
        });
        if (!item) {
            return null;
        }
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            user_id: item.user_id,
            created_by: item.user?.name || '',
            active: item.active,
            created_at: item.created_at,
            updated_at: item.updated_at,
            votes: {
                totalLikes: item.votes.filter(vote => vote.type === 'like').length,
                totalDislikes: item.votes.filter(vote => vote.type === 'dislike').length,
                data: item.votes.map(vote => ({
                    id: vote.id,
                    user_id: vote.user_id,
                    user_name: vote.user?.name || '',
                    type: vote.type,
                    active: vote.active,
                    created_at: vote.created_at,
                    updated_at: vote.updated_at
                }))
            },
            comments: {
                total: item.commentTopics.length,
                data: item.commentTopics.map(comment => ({
                    id: comment.id,
                    user_id: comment.user_id,
                    user_name: comment.user?.name || '',
                    description: comment.description,
                    active: comment.active,
                    created_at: comment.created_at,
                    updated_at: comment.updated_at
                }))
            },
            reactions: {
                totalLikes: item.reactionTopics.filter(reaction => reaction.type === 'like').length,
                totalDislikes: item.reactionTopics.filter(reaction => reaction.type === 'dislike').length,
                data: item.reactionTopics.map(reaction => ({
                    id: reaction.id,
                    user_id: reaction.user_id,
                    user_name: reaction.user?.name || '',
                    type: reaction.type,
                    active: reaction.active,
                    created_at: reaction.created_at,
                    updated_at: reaction.updated_at
                }))
            }
        };
    }
}
exports.TopicRepository = TopicRepository;
//# sourceMappingURL=topicRepository.js.map