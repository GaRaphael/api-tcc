import { Router } from 'express';
import {
    AddMeetingController,
    GetAllMeetingController,
    GetByIdMeetingController
} from '../../presentation/controller/meeting';

import {
    AddMeetingUseCase,
    GetAllMeetingUseCase,
    GetByIdMeetingUseCase
} from '../../data/useCase/meeting';
import { uploadSingle } from './../config/upload'
import { AwsCloudClient } from '../../infra/cloud/awsCloudClient';
import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { MeetingRepository } from '../../infra/db';

const router = Router();

const makeAddMeetingController = (): Controller => {

    const meetingRepository = new MeetingRepository();
    const cloudClient = new AwsCloudClient();

    const addMeetingUseCase = new AddMeetingUseCase(meetingRepository, cloudClient);
    const addMeetingController = new AddMeetingController(addMeetingUseCase);

    return addMeetingController;
};


const makeGetAllMeetingController = (): Controller => {

    const meetingRepository = new MeetingRepository();

    const getAllMeetingUseCase = new GetAllMeetingUseCase(meetingRepository);
    const getAllMeetingController = new GetAllMeetingController(getAllMeetingUseCase);

    return getAllMeetingController;
};

const makeGetByIdMeetingController = (): Controller => {

    const meetingRepository = new MeetingRepository();

    const getByIdMeetingUseCase = new GetByIdMeetingUseCase(meetingRepository);
    const getByIdMeetingController = new GetByIdMeetingController(getByIdMeetingUseCase);

    return getByIdMeetingController;
};




router
    .post('/meeting', uploadSingle, adaptRoute(makeAddMeetingController()))
    .get('/meetings', adaptRoute(makeGetAllMeetingController()))
    .get('/meeting/:id', adaptRoute(makeGetByIdMeetingController()))


export default router;
