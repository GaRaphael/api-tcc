"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllReactionUseCase = void 0;
class GetAllReactionUseCase {
    ReactionRepository;
    constructor(ReactionRepository) {
        this.ReactionRepository = ReactionRepository;
    }
    async perform(params) {
        try {
            const response = await this.ReactionRepository.getAll({ notice_id: params.notice_id });
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
exports.GetAllReactionUseCase = GetAllReactionUseCase;
//# sourceMappingURL=getAllReactionUseCase.js.map