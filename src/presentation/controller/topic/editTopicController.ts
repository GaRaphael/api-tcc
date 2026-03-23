import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { EditTopicUseCase } from '../../../data/useCase/topic/editTopicUseCase';

export class EditTopicController implements Controller {
    constructor(private editTopicUseCase: EditTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const id = Number(request.params.id);
            const title = request.body.title;
            const description = request.body.description;
            const userId = Number(request.body.user_id);

            if (!id) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'Topic id is required' };
            }

            if (!title && !description) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'title or description is required' };
            }

            if (!userId) {
                return { statusCode: StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }

            const response = await this.editTopicUseCase.perform({
                id,
                title,
                description,
                user_id: userId
            });

            if (response.error) {
                const statusCode = response.error === 'User is not the owner of this topic'
                    ? StatusCodes.FORBIDDEN
                    : StatusCodes.BAD_REQUEST;

                return { statusCode, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };
        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
