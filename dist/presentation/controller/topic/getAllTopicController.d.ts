import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { GetAllTopicUseCase } from '../../../data/useCase/topic/getAllTopicUseCase';
export declare class GetAllTopicController implements Controller {
    private getAllTopicUseCase;
    constructor(getAllTopicUseCase: GetAllTopicUseCase);
    handle(_: Request): Promise<HttpResponse>;
}
