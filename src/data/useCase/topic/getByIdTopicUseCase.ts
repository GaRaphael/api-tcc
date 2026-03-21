import { GetByIdTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class GetByIdTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: { id: number }): Promise<GetByIdTopicUseCaseResponse> {
        try {
            const response = await this.topicRepository.getDetailsById(params.id);

            if (response) {
                return { data: response };
            }

            return { error: 'Topic not found' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
