import { PrismaHelper } from '../helpers';
import {
    AddNoticeRepositoryParams,
    AddNoticeRepositoryResponse
} from '../../../data/domain';

const { prisma } = PrismaHelper;
export class NoticeRepository {

    public async add(params: AddNoticeRepositoryParams): Promise<AddNoticeRepositoryResponse> {
        const {
            title,
            description,
            image
        } = params;

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

    public async getAll(): Promise<AddNoticeRepositoryResponse[]> {
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

}