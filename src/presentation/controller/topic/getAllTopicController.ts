import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { GetAllTopicUseCase } from '../../../data/useCase/topic/getAllTopicUseCase';

export class GetAllTopicController implements Controller {
    constructor(private getAllTopicUseCase: GetAllTopicUseCase) { }

    public async handle(_: Request): Promise<HttpResponse> {
        try {
            const response = await this.getAllTopicUseCase.perform();

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };
        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
