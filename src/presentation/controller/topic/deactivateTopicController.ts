import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { DeactivateTopicUseCase } from '../../../data/useCase/topic/deactivateTopicUseCase';

export class DeactivateTopicController implements Controller {
    constructor(private deactivateTopicUseCase: DeactivateTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const id = Number(request.params.id);
            const userId = Number(request.body.user_id);

            if (!id) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'Topic id is required' };
            }

            if (!userId) {
                return { statusCode: StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }

            const response = await this.deactivateTopicUseCase.perform({
                id,
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
