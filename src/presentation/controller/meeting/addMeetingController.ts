import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddMeetingUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddMeetingUseCaseParams } from '../../../data/domain';


export class AddMeetingController implements Controller {
    constructor(private addMeetingUseCase: AddMeetingUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const body = request.body as AddMeetingUseCaseParams;

            const response = await this.addMeetingUseCase.perform({ ...body });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
