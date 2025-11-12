"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdMeetingUseCase = void 0;
class GetByIdMeetingUseCase {
    meetingRepository;
    constructor(meetingRepository) {
        this.meetingRepository = meetingRepository;
    }
    async perform(params) {
        try {
            const response = await this.meetingRepository.getId({ ...params });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in Find By Id Meeting' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetByIdMeetingUseCase = GetByIdMeetingUseCase;
//# sourceMappingURL=findByIdMeetingUseCase.js.map