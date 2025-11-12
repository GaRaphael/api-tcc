import { Request } from 'express';
import { AddMeetingUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class AddMeetingController implements Controller {
    private addMeetingUseCase;
    constructor(addMeetingUseCase: AddMeetingUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
