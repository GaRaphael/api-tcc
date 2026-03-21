import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { GetByIdTopicUseCase } from '../../../data/useCase/topic/getByIdTopicUseCase';

export class GetByIdTopicController implements Controller {
    constructor(private getByIdTopicUseCase: GetByIdTopicUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const id = Number(request.params.id);

            if (!id) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: 'Topic id is required' };
            }

            const response = await this.getByIdTopicUseCase.perform({ id });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };
        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
