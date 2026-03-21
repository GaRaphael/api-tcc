import { UpsertVoteTopicUseCaseParams, UpsertVoteTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class UpsertVoteTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: UpsertVoteTopicUseCaseParams): Promise<UpsertVoteTopicUseCaseResponse> {
        try {
            const topic = await this.topicRepository.getById(params.topic_id);

            if (!topic || !topic.active) {
                return { error: 'Topic not found' };
            }

            const response = await this.topicRepository.upsertVote({ ...params });

            if (response) {
                return { data: response };
            }

            return { error: 'Error in upsert vote Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
