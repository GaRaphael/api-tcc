import { StatusCodes } from 'http-status-codes';
import { GetAllReactionUseCase } from '../../../data/useCase/reaction/getAllReactionUseCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';

export class GetAllReactionController implements Controller {

    constructor(private GetAllReactionUseCase: GetAllReactionUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const response = await this.GetAllReactionUseCase.perform({
                notice_id: Number(request.params.notice_id)
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
