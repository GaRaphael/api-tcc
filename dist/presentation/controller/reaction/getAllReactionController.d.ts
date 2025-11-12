import { GetAllReactionUseCase } from '../../../data/useCase/reaction/getAllReactionUseCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';
export declare class GetAllReactionController implements Controller {
    private GetAllReactionUseCase;
    constructor(GetAllReactionUseCase: GetAllReactionUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
