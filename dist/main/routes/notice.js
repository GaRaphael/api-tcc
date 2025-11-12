"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../presentation/controller");
const useCase_1 = require("../../data/useCase");
const upload_1 = require("./../config/upload");
const getByIdNoticeController_1 = require("../../presentation/controller/notice/getByIdNoticeController");
const getByIdNoticeUseCase_1 = require("../../data/useCase/notice/getByIdNoticeUseCase");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const db_1 = require("../../infra/db");
const awsCloudClient_1 = require("../../infra/cloud/awsCloudClient");
const router = (0, express_1.Router)();
const makeAddNoticeController = () => {
    const noticeRepository = new db_1.NoticeRepository();
    const cloudClient = new awsCloudClient_1.AwsCloudClient();
    const addNoticeUseCase = new useCase_1.AddNoticeUseCase(noticeRepository, cloudClient);
    const addNoticeController = new controller_1.AddNoticeController(addNoticeUseCase);
    return addNoticeController;
};
const makeGetAllNoticesController = () => {
    const noticeRepository = new db_1.NoticeRepository();
    const getAllNoticesUseCase = new useCase_1.GetAllNoticeUseCase(noticeRepository);
    const getAllNoticesController = new controller_1.GetAllNoticeController(getAllNoticesUseCase);
    return getAllNoticesController;
};
const makeGetByIdNoticeController = () => {
    const noticeRepository = new db_1.NoticeRepository();
    const getByIdNoticeUseCase = new getByIdNoticeUseCase_1.GetByIdNoticeUseCase(noticeRepository);
    const getByIdNoticeController = new getByIdNoticeController_1.GetByIdNoticeController(getByIdNoticeUseCase);
    return getByIdNoticeController;
};
router
    .post('/notice', upload_1.uploadSingle, (0, expressRouteAdapter_1.adaptRoute)(makeAddNoticeController()))
    .get('/notices', (0, expressRouteAdapter_1.adaptRoute)(makeGetAllNoticesController()))
    .get('/notices/:id', (0, expressRouteAdapter_1.adaptRoute)(makeGetByIdNoticeController()));
exports.default = router;
//# sourceMappingURL=notice.js.map