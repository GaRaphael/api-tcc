import { AddNoticeUseCaseParams, AddNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';
import { CloudClient } from '../../../data/domain/cloudClient';
import { randomUUID } from 'crypto';

export class AddNoticeUseCase {

  constructor(
    private noticeRepository: NoticeRepository,
    private readonly cloudClient: CloudClient
  ) { }

  async perform(params: AddNoticeUseCaseParams): Promise<AddNoticeUseCaseResponse> {

    try {

      const bucket = process.env.AWS_BUCKET!;
      const file = params.image as any

      if (!file || !file.buffer || !file.mimetype) {
        return { error: 'Arquivo de imagem inválido.' };
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

      const response = await this.noticeRepository.add({ ...params, image: up_picture.url });

      if (response) {
        return { data: response };
      }

      return { error: 'Error in add Notice' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}