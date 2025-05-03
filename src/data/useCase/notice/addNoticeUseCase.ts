import { AddNoticeUseCaseParams, AddNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';


export class AddNoticeUseCase {

  constructor(
    private noticeRepository: NoticeRepository
  ) { }

  async perform(params: AddNoticeUseCaseParams): Promise<AddNoticeUseCaseResponse> {

    try {

      const response = await this.noticeRepository.add({ ...params })

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Notice' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
