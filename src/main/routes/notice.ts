import { Router } from 'express';
import {
    AddNoticeController,
    GetAllNoticeController
} from '../../presentation/controller';
import {
    AddNoticeUseCase,
    GetAllNoticeUseCase
} from '../../data/useCase';

import { GetByIdNoticeController } from '../../presentation/controller/notice/getByIdNoticeController';
import { GetByIdNoticeUseCase } from '../../data/useCase/notice/getByIdNoticeUseCase';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { NoticeRepository } from '../../infra/db';

const router = Router();

const upload = multer(uploadConfig);


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


const makeGetByIdNoticeController = (): Controller => {
    const noticeRepository = new NoticeRepository();

    const getByIdNoticeUseCase = new GetByIdNoticeUseCase(noticeRepository);
    const getByIdNoticeController = new GetByIdNoticeController(getByIdNoticeUseCase);

    return getByIdNoticeController;
};



router
    .post('/notice', upload.single('image'), adaptRoute(makeAddNoticeController()))
    .get('/notices', adaptRoute(makeGetAllNoticesController()))
    .get('/notices/:id', adaptRoute(makeGetByIdNoticeController()));


export default router;
