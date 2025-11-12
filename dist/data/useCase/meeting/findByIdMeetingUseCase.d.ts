import { GetByIdMeetingUseCaseParams, GetByIdMeetingUseCaseResponse } from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';
export declare class GetByIdMeetingUseCase {
    private meetingRepository;
    constructor(meetingRepository: MeetingRepository);
    perform(params: GetByIdMeetingUseCaseParams): Promise<GetByIdMeetingUseCaseResponse>;
}
