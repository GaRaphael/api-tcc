"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meeting_1 = require("../../presentation/controller/meeting");
const meeting_2 = require("../../data/useCase/meeting");
const upload_1 = require("./../config/upload");
const awsCloudClient_1 = require("../../infra/cloud/awsCloudClient");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const db_1 = require("../../infra/db");
const router = (0, express_1.Router)();
const makeAddMeetingController = () => {
    const meetingRepository = new db_1.MeetingRepository();
    const cloudClient = new awsCloudClient_1.AwsCloudClient();
    const addMeetingUseCase = new meeting_2.AddMeetingUseCase(meetingRepository, cloudClient);
    const addMeetingController = new meeting_1.AddMeetingController(addMeetingUseCase);
    return addMeetingController;
};
const makeGetAllMeetingController = () => {
    const meetingRepository = new db_1.MeetingRepository();
    const getAllMeetingUseCase = new meeting_2.GetAllMeetingUseCase(meetingRepository);
    const getAllMeetingController = new meeting_1.GetAllMeetingController(getAllMeetingUseCase);
    return getAllMeetingController;
};
const makeGetByIdMeetingController = () => {
    const meetingRepository = new db_1.MeetingRepository();
    const getByIdMeetingUseCase = new meeting_2.GetByIdMeetingUseCase(meetingRepository);
    const getByIdMeetingController = new meeting_1.GetByIdMeetingController(getByIdMeetingUseCase);
    return getByIdMeetingController;
};
router
    .post('/meeting', upload_1.uploadSingle, (0, expressRouteAdapter_1.adaptRoute)(makeAddMeetingController()))
    .get('/meetings', (0, expressRouteAdapter_1.adaptRoute)(makeGetAllMeetingController()))
    .get('/meeting/:id', (0, expressRouteAdapter_1.adaptRoute)(makeGetByIdMeetingController()));
exports.default = router;
//# sourceMappingURL=meeting.js.map