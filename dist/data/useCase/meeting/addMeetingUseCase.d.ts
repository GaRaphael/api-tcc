import { AddMeetingUseCaseParams, AddMeetingUseCaseResponse } from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';
import { CloudClient } from '../../../data/domain/cloudClient';
export declare class AddMeetingUseCase {
    private meetingRepository;
    private readonly cloudClient;
    constructor(meetingRepository: MeetingRepository, cloudClient: CloudClient);
    perform(params: AddMeetingUseCaseParams): Promise<AddMeetingUseCaseResponse>;
}
