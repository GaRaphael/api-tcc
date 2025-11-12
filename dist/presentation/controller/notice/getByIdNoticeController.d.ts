import { GetByIdNoticeUseCase } from '../../../data/useCase/notice/getByIdNoticeUseCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';
export declare class GetByIdNoticeController implements Controller {
    private getByIdNoticeUseCase;
    constructor(getByIdNoticeUseCase: GetByIdNoticeUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
