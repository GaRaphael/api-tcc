import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddCommentTopicUseCase } from '../../../data/useCase/topic/addCommentTopicUseCase';

export class AddCommentTopicController implements Controller {
    constructor(private addCommentTopicUseCase: AddCommentTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const topicId = Number(request.body.topic_id);
            const description = request.body.description;
            const userId = Number(request.body.user_id);

            if (!topicId || !description) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'topic_id and description are required' };
            }

            if (!userId) {
                return { statusCode: StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }

            const response = await this.addCommentTopicUseCase.perform({
                topic_id: topicId,
                description,
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
