import { Request } from 'express';
import { AddUserUseCase } from '../../../data/useCase/user/addUserUseCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class AddUserController implements Controller {
    private addUserUseCase;
    constructor(addUserUseCase: AddUserUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
