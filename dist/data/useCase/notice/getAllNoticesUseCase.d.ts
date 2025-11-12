import { GetAllNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';
export declare class GetAllNoticeUseCase {
    private noticeRepository;
    constructor(noticeRepository: NoticeRepository);
    perform(): Promise<GetAllNoticeUseCaseResponse>;
}
