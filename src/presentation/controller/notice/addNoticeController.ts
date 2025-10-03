import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddNoticeUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export class AddNoticeController implements Controller {
    constructor(private addNoticeUseCase: AddNoticeUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const { title, description, image } = request.body;

            let processedImage: any = null;

            if (image && image.base64) {
                const buffer = Buffer.from(image.base64, 'base64');

                processedImage = {
                    buffer: buffer,
                    originalname: image.originalname,
                    mimetype: image.mimetype,
                    size: buffer.length
                };
            }

            const response = await this.addNoticeUseCase.perform({
                title,
                description,
                image: processedImage
            });

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