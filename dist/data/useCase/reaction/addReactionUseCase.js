"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReactionUseCase = void 0;
class AddReactionUseCase {
    ReactionRepository;
    constructor(ReactionRepository) {
        this.ReactionRepository = ReactionRepository;
    }
    async perform(params) {
        try {
            const response = await this.ReactionRepository.add({ ...params });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add Reaction' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.AddReactionUseCase = AddReactionUseCase;
//# sourceMappingURL=addReactionUseCase.js.map