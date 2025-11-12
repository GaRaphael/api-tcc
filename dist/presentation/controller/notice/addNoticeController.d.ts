import { Request } from 'express';
import { AddNoticeUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class AddNoticeController implements Controller {
    private addNoticeUseCase;
    constructor(addNoticeUseCase: AddNoticeUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
