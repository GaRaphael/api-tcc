import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddUserUseCase } from '../../../data/useCase/user/addUserUseCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddUserUseCaseParams } from '../../../data/domain';


export class AddUserController implements Controller {
  constructor(private addUserUseCase: AddUserUseCase) { }

  public async handle(request: Request): Promise<HttpResponse> {

    try {

      const body = request.body as AddUserUseCaseParams;

      const response = await this.addUserUseCase.perform({
        email: request.body.email,
        name: request.body.name,
        password: request.body.password,
        confirm_password: request.body.password
      });

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response.data };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }

}
