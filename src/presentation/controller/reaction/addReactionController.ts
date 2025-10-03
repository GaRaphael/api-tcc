import { StatusCodes } from 'http-status-codes';
import { AddReactionUseCase } from '../../../data/useCase/reaction/addReactionUseCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';

export class AddReactionController implements Controller {

    constructor(private addReactionUseCase: AddReactionUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const response = await this.addReactionUseCase.perform({
                notice_id: Number(request.body.notice_id),
                type: request.body.type,
                user_id: Number(request.body.user_id)
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