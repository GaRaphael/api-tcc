import { GetByIdNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';


export class GetByIdNoticeUseCase {

    constructor(
        private noticeRepository: NoticeRepository
    ) { }

    async perform(params: { id: number }): Promise<GetByIdNoticeUseCaseResponse> {

        try {

            const response = await this.noticeRepository.getById({ id: params.id })

            if (response) {
                return { data: response }
            }

            return { error: 'Error in get Notice' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
