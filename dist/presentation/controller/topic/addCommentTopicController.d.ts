import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddCommentTopicUseCase } from '../../../data/useCase/topic/addCommentTopicUseCase';
export declare class AddCommentTopicController implements Controller {
    private addCommentTopicUseCase;
    constructor(addCommentTopicUseCase: AddCommentTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
