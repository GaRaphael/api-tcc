import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddMeetingUseCase } from '../../../data/useCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddMeetingUseCaseParams } from '../../../data/domain';


export class AddMeetingController implements Controller {
    constructor(private addMeetingUseCase: AddMeetingUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const body = request.body as AddMeetingUseCaseParams;
            const { image } = request.body;

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

            const response = await this.addMeetingUseCase.perform({
                date: new Date(body.date),
                description: body.description,
                subject: body.subject,
                title: body.title,
                image: processedImage,
                location: body.location
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
