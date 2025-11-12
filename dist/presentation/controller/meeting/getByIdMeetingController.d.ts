import { Request } from 'express';
import { GetByIdMeetingUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class GetByIdMeetingController implements Controller {
    private GetByIdMeetingUseCase;
    constructor(GetByIdMeetingUseCase: GetByIdMeetingUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
