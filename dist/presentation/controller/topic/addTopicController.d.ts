import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddTopicUseCase } from '../../../data/useCase/topic/addTopicUseCase';
export declare class AddTopicController implements Controller {
    private addTopicUseCase;
    constructor(addTopicUseCase: AddTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
