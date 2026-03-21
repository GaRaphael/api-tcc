import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { DeactivateTopicUseCase } from '../../../data/useCase/topic/deactivateTopicUseCase';
export declare class DeactivateTopicController implements Controller {
    private deactivateTopicUseCase;
    constructor(deactivateTopicUseCase: DeactivateTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
