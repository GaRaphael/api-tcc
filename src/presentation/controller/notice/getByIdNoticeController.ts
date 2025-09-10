import { StatusCodes } from 'http-status-codes';
import { GetByIdNoticeUseCase } from '../../../data/useCase/notice/getByIdNoticeUseCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';

export class GetByIdNoticeController implements Controller {
    constructor(private getByIdNoticeUseCase: GetByIdNoticeUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const response = await this.getByIdNoticeUseCase.perform({
                id: Number(request.params.id)
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
