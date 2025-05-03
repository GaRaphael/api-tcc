import { Router } from 'express';
import {
    AddNoticeController,
    GetAllNoticeController
} from '../../presentation/controller';
import {
    AddNoticeUseCase,
    GetAllNoticeUseCase
} from '../../data/useCase';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { NoticeRepository } from '../../infra/db';

const router = Router();

const makeAddNoticeController = (): Controller => {

    const noticeRepository = new NoticeRepository();

    const addNoticeUseCase = new AddNoticeUseCase(noticeRepository);
    const addNoticeController = new AddNoticeController(addNoticeUseCase);

    return addNoticeController;
};

const makeGetAllNoticesController = (): Controller => {
    const noticeRepository = new NoticeRepository();

    const getAllNoticesUseCase = new GetAllNoticeUseCase(noticeRepository);
    const getAllNoticesController = new GetAllNoticeController(getAllNoticesUseCase);

    return getAllNoticesController;
}


router
    .post('/notice', adaptRoute(makeAddNoticeController()))
    .get('/notices', adaptRoute(makeGetAllNoticesController()))


export default router;
