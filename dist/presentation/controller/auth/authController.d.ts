import { Request } from "express";
import { Controller, HttpResponse } from "../protocols/controller.protocols";
import { AuthUseCase } from "../../../data/useCase";
export declare class AuthController implements Controller {
    private authUseCase;
    constructor(authUseCase: AuthUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
export default AuthController;
