import { Request } from 'express';
import { GetAllCommentUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class GetAllCommentController implements Controller {
    private GetAllCommentUseCase;
    constructor(GetAllCommentUseCase: GetAllCommentUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
