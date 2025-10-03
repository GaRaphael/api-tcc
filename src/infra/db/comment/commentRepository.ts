import { PrismaHelper } from '../helpers';
import {
    AddCommentRepositoryParams,
    GetAllCommentRepositoryParams,
    GetAllCommentRepositoryResponse,
} from '../../../data/domain';


const { prisma } = PrismaHelper;

export class CommentRepository {

    public async add(params: AddCommentRepositoryParams): Promise<any> {
        const {
            description,
            user_id,
            meeting_id
        } = params;
        console.log('params repository', params)
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

    public async getAll(params: GetAllCommentRepositoryParams): Promise<GetAllCommentRepositoryResponse[]> {
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

    // public async getId(params: GetByIdMeetingRepositoryParams): Promise<GetByIdMeetingRepositoryResponse> {
    //     const { meeting: meetingModel } = prisma;

    //     const response = await meetingModel.findFirst({
    //         where: {
    //             id: params.id
    //         },
    //         select: {
    //             id: true,
    //             title: true,
    //             description: true,
    //             subject: true,
    //             date: true,
    //             active: true,
    //             created_at: true,
    //             updated_at: true
    //         }
    //     });

    //     if (!response) {
    //         throw new Error('Meeting not found');
    //     }

    //     return response;
    // }
}