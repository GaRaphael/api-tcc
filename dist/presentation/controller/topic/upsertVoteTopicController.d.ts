import { Request } from 'express';
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { UpsertVoteTopicUseCase } from '../../../data/useCase/topic/upsertVoteTopicUseCase';
export declare class UpsertVoteTopicController implements Controller {
    private upsertVoteTopicUseCase;
    constructor(upsertVoteTopicUseCase: UpsertVoteTopicUseCase);
    handle(request: Request): Promise<HttpResponse>;
}
