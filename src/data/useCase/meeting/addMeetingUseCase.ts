import { AddMeetingUseCaseParams, AddMeetingUseCaseResponse } from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';
import { randomUUID } from 'crypto';
import { CloudClient } from '../../../data/domain/cloudClient';
export class AddMeetingUseCase {

  constructor(
    private meetingRepository: MeetingRepository,
    private readonly cloudClient: CloudClient
  ) { }

  async perform(params: AddMeetingUseCaseParams): Promise<AddMeetingUseCaseResponse> {

    try {

      console.log('Params received in AddMeetingUseCase:', params);
      const bucket = process.env.AWS_BUCKET!;
      const file = params.image as any;

      if (!file || !file.buffer) {
        return { error: 'Imagem não enviada ou inválida.' };
      }

      const fileBase64 = file.buffer.toString('base64');
      const filecontentType =
        file.mimetype.split('/')[1] === 'pdf'
          ? 'application/pdf'
          : file.mimetype.split('/')[1];
      const filename = `image/${randomUUID()}.${file.mimetype.split('/')[1]}`;

      const paramsUpload = {
        file: fileBase64,
        destination: `${bucket}`,
        filename,
        contentType: filecontentType
      };

      const up_picture = await this.cloudClient.uploadFile(paramsUpload);

      const response = await this.meetingRepository.add({ ...params, image: up_picture.url });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Meeting' };

    } catch (error) {
      console.error('Error in AddMeetingUseCase:', error);
      return { error: `${error}` };
    }
  }
}