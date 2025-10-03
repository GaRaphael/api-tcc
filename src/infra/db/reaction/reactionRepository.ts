import { PrismaHelper } from '../helpers';
import { AddReactionRepositoryParams, AddReactionRepositoryResponse, GetAllReactionRepositoryResponse } from '../../../data/domain/reaction';

const { prisma } = PrismaHelper;
export class ReactionRepository {

    public async add(params: AddReactionRepositoryParams): Promise<AddReactionRepositoryResponse> {
        const {
            notice_id,
            type,
            user_id
        } = params;
        const { reaction: reactionModel } = prisma;

        const verifyExisting = await reactionModel.findFirst({
            where: {
                AND: [
                    {
                        notice_id: notice_id
                    },
                    {
                        user_id: user_id
                    },
                    {
                        active: true
                    }
                ]
            }
        });

        if (type === 'clear') {

            if (!verifyExisting) {
                throw new Error('Reaction not found');
            }

            const remove_reaction = await reactionModel.update({
                where: {
                    id: verifyExisting.id
                },
                data: {
                    active: false,
                    updated_at: new Date()
                }
            });

            return remove_reaction;
        }

        if (verifyExisting) {
            const update_reaction = await reactionModel.update({
                where: {
                    id: verifyExisting.id
                },
                data: {
                    type,
                    updated_at: new Date()
                }
            });

            return update_reaction;

        } else {

            const response = await reactionModel.create({
                data: {
                    notice_id,
                    type,
                    user_id,
                    active: true
                },
            });

            return response;
        }
    }

    public async getAll(params: { notice_id: number }): Promise<GetAllReactionRepositoryResponse> {
        const { reaction: reactionModel } = prisma;

        const response = await reactionModel.findMany({
            where: {
                active: true,
                notice_id: params.notice_id
            },
            select: {
                id: true,
                notice_id: true,
                type: true,
                user: {
                    select: {
                        name: true,
                    }
                },
                active: true,
                created_at: true,
                updated_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return {
            totalLikes: response.filter(r => r.type === 'like').length,
            totalDislikes: response.filter(r => r.type === 'dislike').length,
            data: response.map(item => ({
                id: item.id,
                notice_id: item.notice_id,
                user: item.user.name,
                type: item.type,
                active: item.active,
                created_at: item.created_at,
                updated_at: item.updated_at
            }))
        }
    }

}