import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetAllCommentUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class GetAllCommentController implements Controller {
    constructor(private GetAllCommentUseCase: GetAllCommentUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const response = await this.GetAllCommentUseCase.perform({ meeting_id: Number(request.params.meeting_id) });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
