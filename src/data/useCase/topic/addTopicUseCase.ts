import { AddTopicUseCaseParams, AddTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class AddTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: AddTopicUseCaseParams): Promise<AddTopicUseCaseResponse> {
        try {
            const response = await this.topicRepository.add({ ...params });

            if (response) {
                return { data: response };
            }

            return { error: 'Error in add Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
