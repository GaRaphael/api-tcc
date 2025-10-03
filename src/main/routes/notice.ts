import { Router } from 'express';
import {
    AddNoticeController,
    GetAllNoticeController
} from '../../presentation/controller';
import {
    AddNoticeUseCase,
    GetAllNoticeUseCase
} from '../../data/useCase';
import { uploadSingle } from './../config/upload'
import { GetByIdNoticeController } from '../../presentation/controller/notice/getByIdNoticeController';
import { GetByIdNoticeUseCase } from '../../data/useCase/notice/getByIdNoticeUseCase';
import uploadConfig from '../config/upload';
import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { NoticeRepository } from '../../infra/db';
import { AwsCloudClient } from '../../infra/cloud/awsCloudClient';

const router = Router()


const makeAddNoticeController = (): Controller => {
    const noticeRepository = new NoticeRepository();
    const cloudClient = new AwsCloudClient();

    const addNoticeUseCase = new AddNoticeUseCase(noticeRepository, cloudClient);
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
    .post('/notice', uploadSingle, adaptRoute(makeAddNoticeController()))
    .get('/notices', adaptRoute(makeGetAllNoticesController()))
    .get('/notices/:id', adaptRoute(makeGetByIdNoticeController()));


export default router;
