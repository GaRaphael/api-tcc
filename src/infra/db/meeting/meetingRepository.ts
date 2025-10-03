import { PrismaHelper } from '../helpers';
import {
    AddMeetingRepositoryParams,
    AddMeetingRepositoryResponse,
    GetAllMeetingRepositoryResponse,
    GetByIdMeetingRepositoryParams,
    GetByIdMeetingRepositoryResponse
} from '../../../data/domain';


const { prisma } = PrismaHelper;

export class MeetingRepository {

    public async add(params: AddMeetingRepositoryParams): Promise<AddMeetingRepositoryResponse> {
        const {
            date,
            description,
            subject,
            title,
            location,
            image
        } = params;

        const { meeting: meetingModel } = prisma;

        const response = await meetingModel.create({
            data: {
                date: new Date(date),
                description: description,
                subject: subject,
                title: title,
                image,
                location,
                active: true
            },
        });

        return response;
    }

    public async getAll(): Promise<GetAllMeetingRepositoryResponse[]> {
        const { meeting: meetingModel } = prisma;

        const response = await meetingModel.findMany({
            where: {
                active: true
            },
            select: {
                id: true,
                title: true,
                description: true,
                subject: true,
                date: true,
                image: true || null,
                location: true || null,
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

    public async getId(params: GetByIdMeetingRepositoryParams): Promise<GetByIdMeetingRepositoryResponse> {
        const { meeting: meetingModel } = prisma;

        const response = await meetingModel.findFirst({
            where: {
                id: params.id
            },
            select: {
                id: true,
                title: true,
                description: true,
                subject: true,
                date: true,
                image: true || null,
                location: true || null,
                active: true,
                created_at: true,
                updated_at: true
            }
        });

        if (!response) {
            throw new Error('Meeting not found');
        }

        return response;
    }
}