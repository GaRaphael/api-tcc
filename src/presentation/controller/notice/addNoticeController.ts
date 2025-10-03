import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddNoticeUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export class AddNoticeController implements Controller {
    constructor(private addNoticeUseCase: AddNoticeUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {
        try {
            const { title, description, image } = request.body;
            console.log("Request body:", { 
                title,
                description,
                hasImage: !!image,
                imageInfo: image ? {
                    name: image.originalname,
                    type: image.mimetype,
                    size: image.size,
                    bufferLength: image.buffer?.length
                } : null
            });

            let processedImage: any = null;

            if (image && image.buffer) {
                const buffer = Buffer.from(image.buffer);

                processedImage = {
                    buffer: buffer,
                    originalname: image.originalname,
                    mimetype: image.mimetype,
                    size: image.size
                };

                console.log("Imagem processada:", {
                    filename: processedImage.originalname,
                    size: processedImage.size,
                    mimetype: processedImage.mimetype,
                    bufferSize: processedImage.buffer.length
                });
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