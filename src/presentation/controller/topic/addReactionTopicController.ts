import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddReactionTopicUseCase } from '../../../data/useCase/topic/addReactionTopicUseCase';

export class AddReactionTopicController implements Controller {
    constructor(private addReactionTopicUseCase: AddReactionTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const topicId = Number(request.body.topic_id);
            const type = request.body.type;
            const userId = Number(request.user?.user?.id || request.user?.id);

            if (!topicId || !type) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'topic_id and type are required' };
            }

            if (!userId) {
                return { statusCode: StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }

            const response = await this.addReactionTopicUseCase.perform({
                topic_id: topicId,
                type,
                user_id: userId
            });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };
        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
