"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMeetingUseCase = void 0;
class GetAllMeetingUseCase {
    meetingRepository;
    constructor(meetingRepository) {
        this.meetingRepository = meetingRepository;
    }
    async perform() {
        try {
            const response = await this.meetingRepository.getAll();
            if (response) {
                return { data: response };
            }
            return { error: 'Error in Get All Meeting' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetAllMeetingUseCase = GetAllMeetingUseCase;
//# sourceMappingURL=findAllMeetingUseCase.js.map