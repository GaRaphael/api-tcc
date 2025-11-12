import { AddMeetingRepositoryParams, AddMeetingRepositoryResponse, GetAllMeetingRepositoryResponse, GetByIdMeetingRepositoryParams, GetByIdMeetingRepositoryResponse } from '../../../data/domain';
export declare class MeetingRepository {
    add(params: AddMeetingRepositoryParams): Promise<AddMeetingRepositoryResponse>;
    getAll(): Promise<GetAllMeetingRepositoryResponse[]>;
    getId(params: GetByIdMeetingRepositoryParams): Promise<GetByIdMeetingRepositoryResponse>;
}
