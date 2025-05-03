import { StatusCodes } from 'http-status-codes';
import { GetAllMeetingUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class GetAllMeetingController implements Controller {
    constructor(private GetAllMeetingUseCase: GetAllMeetingUseCase) { }

    public async handle(): Promise<HttpResponse> {

        try {

            const response = await this.GetAllMeetingUseCase.perform();

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
