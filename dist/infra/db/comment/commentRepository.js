"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class CommentRepository {
    async add(params) {
        const { description, user_id, meeting_id } = params;
        console.log('params repository', params);
        const { comment: commentModel } = prisma;
        const response = await commentModel.create({
            data: {
                description: description,
                user_id: user_id,
                notice_id: meeting_id,
            },
        });
        return response;
    }
    async getAll(params) {
        const { comment: commentModel } = prisma;
        const response = await commentModel.findMany({
            where: {
                AND: [
                    {
                        notice_id: params.meeting_id
                    },
                    {
                        active: true
                    }
                ]
            },
            select: {
                id: true,
                description: true,
                active: true,
                user: {
                    select: {
                        name: true,
                    }
                },
                created_at: true,
                updated_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return response.map(item => ({
            id: item.id,
            description: item.description,
            name: item.user.name,
            active: item.active,
            created_at: item.created_at,
            updated_at: item.updated_at,
        }));
    }
}
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=commentRepository.js.map