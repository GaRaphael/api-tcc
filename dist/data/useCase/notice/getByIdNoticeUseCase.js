"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdNoticeUseCase = void 0;
class GetByIdNoticeUseCase {
    noticeRepository;
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    async perform(params) {
        try {
            const response = await this.noticeRepository.getById({ id: params.id });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in get Notice' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetByIdNoticeUseCase = GetByIdNoticeUseCase;
//# sourceMappingURL=getByIdNoticeUseCase.js.map