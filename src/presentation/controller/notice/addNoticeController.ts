import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddNoticeUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddNoticeUseCaseParams } from '../../../data/domain';


export class AddNoticeController implements Controller {
    constructor(private addNoticeUseCase: AddNoticeUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const body = request.body as AddNoticeUseCaseParams;

            const response = await this.addNoticeUseCase.perform({ ...body });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
