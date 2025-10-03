import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddCommentUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddCommentUseCaseParams } from '../../../data/domain';


export class AddCommentController implements Controller {
    constructor(private addCommentUseCase: AddCommentUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {
            const response = await this.addCommentUseCase.perform({
                description: request.body.description,
                user_id: Number(request.body.user_id),
                meeting_id: Number(request.body.meeting_id)
            });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
