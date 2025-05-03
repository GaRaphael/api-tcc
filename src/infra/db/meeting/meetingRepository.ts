import { PrismaHelper } from '../helpers';
import {
    AddMeetingRepositoryParams,
    AddMeetingRepositoryResponse
} from '../../../data/domain';


const { prisma } = PrismaHelper;

export class MeetingRepository {

    public async add(params: AddMeetingRepositoryParams): Promise<AddMeetingRepositoryResponse> {
        const {
            date,
            description,
            subject,
            title
        } = params;

        const { meeting: meetingModel } = prisma;

        const response = await meetingModel.create({
            data: {
                date: new Date(date),
                description: description,
                subject: subject,
                title: title
            },
        });

        return response;
    }

    // public async getAll(): Promise<AddNoticeRepositoryResponse[]> {
    //     const { notice: noticeModel } = prisma;

    //     const response = await noticeModel.findMany({
    //         where: {
    //             active: true
    //         },
    //         select: {
    //             id: true,
    //             title: true,
    //             description: true,
    //             image: true || null,
    //             active: true,
    //             created_at: true,
    //             updated_at: true
    //         },
    //         orderBy: {
    //             created_at: 'desc'
    //         }
    //     });

    //     return response;
    // }

    // public async getId(): Promise<AddNoticeRepositoryResponse[]> {
    //     const { notice: noticeModel } = prisma;

    //     const response = await noticeModel.findMany({
    //         where: {
    //             active: true
    //         },
    //         select: {
    //             id: true,
    //             title: true,
    //             description: true,
    //             image: true || null,
    //             active: true,
    //             created_at: true,
    //             updated_at: true
    //         },
    //         orderBy: {
    //             created_at: 'desc'
    //         }
    //     });

    //     return response;
    // }

    
    // public async update(): Promise<AddNoticeRepositoryResponse[]> {
    //     const { notice: noticeModel } = prisma;

    //     const response = await noticeModel.findMany({
    //         where: {
    //             active: true
    //         },
    //         select: {
    //             id: true,
    //             title: true,
    //             description: true,
    //             image: true || null,
    //             active: true,
    //             created_at: true,
    //             updated_at: true
    //         },
    //         orderBy: {
    //             created_at: 'desc'
    //         }
    //     });

    //     return response;
    // }
}