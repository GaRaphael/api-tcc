import { StatusCodes } from 'http-status-codes';
import { GetAllNoticeUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class GetAllNoticeController implements Controller {
    constructor(private GetAllNoticeUseCase: GetAllNoticeUseCase) { }

    public async handle(): Promise<HttpResponse> {

        try {

            const response = await this.GetAllNoticeUseCase.perform();

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
