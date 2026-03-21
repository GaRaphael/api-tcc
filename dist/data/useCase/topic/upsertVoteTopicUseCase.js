"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVoteTopicUseCase = void 0;
class UpsertVoteTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform(params) {
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
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.UpsertVoteTopicUseCase = UpsertVoteTopicUseCase;
//# sourceMappingURL=upsertVoteTopicUseCase.js.map