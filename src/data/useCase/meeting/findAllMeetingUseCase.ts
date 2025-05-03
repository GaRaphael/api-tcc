import { GetAllMeetingUseCaseResponse } from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';

export class GetAllMeetingUseCase {

    constructor(
        private meetingRepository: MeetingRepository
    ) { }

    async perform(): Promise<GetAllMeetingUseCaseResponse> {

        try {

            const response = await this.meetingRepository.getAll()

            if (response) {
                return { data: response }
            }

            return { error: 'Error in Get All Meeting' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
