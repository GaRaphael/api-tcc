import { GetByIdMeetingUseCaseParams, GetByIdMeetingUseCaseResponse} from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';

export class GetByIdMeetingUseCase {

  constructor(
    private meetingRepository: MeetingRepository
  ) { }

  async perform(params: GetByIdMeetingUseCaseParams): Promise<GetByIdMeetingUseCaseResponse> {

    try {

      const response = await this.meetingRepository.getId({ ...params })

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Find By Id Meeting' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
