"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRepository = void 0;
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class NoticeRepository {
    async add(params) {
        const { title, description, image } = params;
        const { notice: noticeModel } = prisma;
        const response = await noticeModel.create({
            data: {
                title,
                description,
                image: image || null,
                active: true
            },
        });
        return response;
    }
    async getAll() {
        const { notice: noticeModel } = prisma;
        const response = await noticeModel.findMany({
            where: {
                active: true
            },
            select: {
                id: true,
                title: true,
                description: true,
                image: true || null,
                active: true,
                created_at: true,
                updated_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return response;
    }
    async getById(params) {
        const { notice: noticeModel } = prisma;
        const response = await noticeModel.findFirst({
            where: {
                AND: [
                    {
                        id: params.id
                    },
                    {
                        active: true
                    }
                ]
            },
            select: {
                id: true,
                title: true,
                description: true,
                image: true || null,
                active: true,
                created_at: true,
                updated_at: true
            }
        });
        return {
            title: response?.title || '',
            description: response?.description || '',
            created_at: response?.created_at || new Date(),
            dislikes: 0,
            likes: 0,
            id: response?.id.toString() || '',
            photos: response?.image || ''
        };
    }
}
exports.NoticeRepository = NoticeRepository;
//# sourceMappingURL=noticeRepository.js.map