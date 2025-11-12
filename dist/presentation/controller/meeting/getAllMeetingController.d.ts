import { GetAllMeetingUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class GetAllMeetingController implements Controller {
    private GetAllMeetingUseCase;
    constructor(GetAllMeetingUseCase: GetAllMeetingUseCase);
    handle(): Promise<HttpResponse>;
}
