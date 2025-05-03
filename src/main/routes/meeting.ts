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

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { MeetingRepository } from '../../infra/db';

const router = Router();

const makeAddMeetingController = (): Controller => {

    const meetingRepository = new MeetingRepository();

    const addMeetingUseCase = new AddMeetingUseCase(meetingRepository);
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
    .post('/meeting', adaptRoute(makeAddMeetingController()))
    .get('/meeting/all', adaptRoute(makeGetAllMeetingController()))
    .get('/meeting/:id', adaptRoute(makeGetByIdMeetingController()))


export default router;
