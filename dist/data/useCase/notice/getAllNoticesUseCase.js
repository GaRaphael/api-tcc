"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllNoticeUseCase = void 0;
class GetAllNoticeUseCase {
    noticeRepository;
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    async perform() {
        try {
            const response = await this.noticeRepository.getAll();
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add Notice' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetAllNoticeUseCase = GetAllNoticeUseCase;
//# sourceMappingURL=getAllNoticesUseCase.js.map