import { Request } from "express";
import { StatusCodes } from "http-status-codes";
import { Controller, HttpResponse } from "../protocols/controller.protocols";
import { AuthUseCase } from "../../../data/useCase";

export class AuthController implements Controller {
  constructor(private authUseCase: AuthUseCase) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { email, password } = request.body

      const response = await this.authUseCase.perform({
        email,
        password
      });

      return { statusCode: StatusCodes.OK, body: response };
    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }
}

export default AuthController;
