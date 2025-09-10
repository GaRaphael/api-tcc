import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddNoticeUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddNoticeUseCaseParams } from '../../../data/domain';

export class AddNoticeController implements Controller {
    constructor(private addNoticeUseCase: AddNoticeUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const { title, description } = request.body;
            const image = request.file ? request.file.filename : null;

            const response = await this.addNoticeUseCase.perform({ title, description, image });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.CREATED, body: response.data };

        } catch (error) {
            console.error("Erro no controller ao adicionar notícia:", error);
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: { message: 'Erro interno do servidor' } };
        }
    }
}
