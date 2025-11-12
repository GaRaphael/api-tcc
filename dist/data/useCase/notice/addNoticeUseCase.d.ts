import { AddNoticeUseCaseParams, AddNoticeUseCaseResponse } from '../../domain';
import { NoticeRepository } from '../../../infra/db';
import { CloudClient } from '../../../data/domain/cloudClient';
export declare class AddNoticeUseCase {
    private noticeRepository;
    private readonly cloudClient;
    constructor(noticeRepository: NoticeRepository, cloudClient: CloudClient);
    perform(params: AddNoticeUseCaseParams): Promise<AddNoticeUseCaseResponse>;
}
