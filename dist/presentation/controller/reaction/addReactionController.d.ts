import { AddReactionUseCase } from '../../../data/useCase/reaction/addReactionUseCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { Request } from 'express';
export declare class AddReactionController implements Controller {
    private addReactionUseCase;
    constructor(addReactionUseCase: AddReactionUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
