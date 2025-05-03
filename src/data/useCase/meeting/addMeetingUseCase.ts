import { AddMeetingUseCaseParams, AddMeetingUseCaseResponse} from '../../domain/meeting';
import { MeetingRepository } from '../../../infra/db';

export class AddMeetingUseCase {

  constructor(
    private meetingRepository: MeetingRepository
  ) { }

  async perform(params: AddMeetingUseCaseParams): Promise<AddMeetingUseCaseResponse> {

    try {

      const response = await this.meetingRepository.add({ ...params })

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Meeting' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
