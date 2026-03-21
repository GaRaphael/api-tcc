import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddTopicUseCase } from '../../../data/useCase/topic/addTopicUseCase';

export class AddTopicController implements Controller {
    constructor(private addTopicUseCase: AddTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const title = request.body.title;
            const description = request.body.description;
            const userId = Number(request.user?.user?.id || request.user?.id);

            if (!title || !description) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'title and description are required' };
            }

            if (!userId) {
                return { statusCode: StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }

            const response = await this.addTopicUseCase.perform({
                title,
                description,
                user_id: userId
            });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.CREATED, body: response.data };
        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
