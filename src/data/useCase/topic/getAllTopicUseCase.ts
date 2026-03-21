import { GetAllTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class GetAllTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(): Promise<GetAllTopicUseCaseResponse> {
        try {
            const response = await this.topicRepository.getAllActive();

            if (response) {
                return { data: response };
            }

            return { error: 'Error in get all Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
