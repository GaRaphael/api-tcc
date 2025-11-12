import { Request } from 'express';
import { ResetPasswordUseCase } from '../../../data/useCase/user';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class ResetPasswordController implements Controller {
    private resetPasswordUseCase;
    constructor(resetPasswordUseCase: ResetPasswordUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
