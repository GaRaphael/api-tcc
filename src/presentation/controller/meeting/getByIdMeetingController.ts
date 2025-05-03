import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetByIdMeetingUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class GetByIdMeetingController implements Controller {
    constructor(private GetByIdMeetingUseCase: GetByIdMeetingUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const id = request.params.id;

            const response = await this.GetByIdMeetingUseCase.perform({ id: Number(id) });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
