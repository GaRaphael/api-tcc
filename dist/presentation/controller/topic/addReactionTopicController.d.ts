import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddReactionTopicUseCase } from '../../../data/useCase/topic/addReactionTopicUseCase';
export declare class AddReactionTopicController implements Controller {
    private addReactionTopicUseCase;
    constructor(addReactionTopicUseCase: AddReactionTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
