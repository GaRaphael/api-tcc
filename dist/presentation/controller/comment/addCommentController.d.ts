import { Request } from 'express';
import { AddCommentUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class AddCommentController implements Controller {
    private addCommentUseCase;
    constructor(addCommentUseCase: AddCommentUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
