import { GetAllNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';


export class GetAllNoticeUseCase {

  constructor(
    private noticeRepository: NoticeRepository
  ) { }

  async perform(): Promise<GetAllNoticeUseCaseResponse> {

    try {

      const response = await this.noticeRepository.getAll()

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Notice' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
