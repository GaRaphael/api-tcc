import { GetByIdNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';
export declare class GetByIdNoticeUseCase {
    private noticeRepository;
    constructor(noticeRepository: NoticeRepository);
    perform(params: {
        id: number;
    }): Promise<GetByIdNoticeUseCaseResponse>;
}
