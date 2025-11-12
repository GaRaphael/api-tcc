import { AddNoticeRepositoryParams, AddNoticeRepositoryResponse, GetByIdNoticeRepositoryResponse } from '../../../data/domain';
export declare class NoticeRepository {
    add(params: AddNoticeRepositoryParams): Promise<AddNoticeRepositoryResponse>;
    getAll(): Promise<AddNoticeRepositoryResponse[]>;
    getById(params: {
        id: number;
    }): Promise<GetByIdNoticeRepositoryResponse | null>;
}
