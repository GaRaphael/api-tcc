import { GetAllMeetingUseCaseResponse } from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';
export declare class GetAllMeetingUseCase {
    private meetingRepository;
    constructor(meetingRepository: MeetingRepository);
    perform(): Promise<GetAllMeetingUseCaseResponse>;
}
