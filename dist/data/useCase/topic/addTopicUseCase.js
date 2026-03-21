"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTopicUseCase = void 0;
class AddTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform(params) {
        try {
            const response = await this.topicRepository.add({ ...params });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add Topic' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.AddTopicUseCase = AddTopicUseCase;
//# sourceMappingURL=addTopicUseCase.js.map