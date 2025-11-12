import { GetAllNoticeUseCase } from '../../../data/useCase';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
export declare class GetAllNoticeController implements Controller {
    private GetAllNoticeUseCase;
    constructor(GetAllNoticeUseCase: GetAllNoticeUseCase);
    handle(): Promise<HttpResponse>;
}
