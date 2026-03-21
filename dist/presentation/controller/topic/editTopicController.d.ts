import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { EditTopicUseCase } from '../../../data/useCase/topic/editTopicUseCase';
export declare class EditTopicController implements Controller {
    private editTopicUseCase;
    constructor(editTopicUseCase: EditTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
