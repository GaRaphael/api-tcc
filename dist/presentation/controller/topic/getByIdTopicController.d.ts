import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { GetByIdTopicUseCase } from '../../../data/useCase/topic/getByIdTopicUseCase';
export declare class GetByIdTopicController implements Controller {
    private getByIdTopicUseCase;
    constructor(getByIdTopicUseCase: GetByIdTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
