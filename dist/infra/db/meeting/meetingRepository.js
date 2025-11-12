"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRepository = void 0;
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class MeetingRepository {
    async add(params) {
        const { date, description, subject, title, location, image } = params;
        const { meeting: meetingModel } = prisma;
        const response = await meetingModel.create({
            data: {
                date: new Date(date),
                description: description,
                subject: subject,
                title: title,
                image,
                location,
                active: true
            },
        });
        return response;
    }
    async getAll() {
        const { meeting: meetingModel } = prisma;
        const response = await meetingModel.findMany({
            where: {
                active: true
            },
            select: {
                id: true,
                title: true,
                description: true,
                subject: true,
                date: true,
                image: true || null,
                location: true || null,
                active: true,
                created_at: true,
                updated_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return response;
    }
    async getId(params) {
        const { meeting: meetingModel } = prisma;
        const response = await meetingModel.findFirst({
            where: {
                id: params.id
            },
            select: {
                id: true,
                title: true,
                description: true,
                subject: true,
                date: true,
                image: true || null,
                location: true || null,
                active: true,
                created_at: true,
                updated_at: true
            }
        });
        if (!response) {
            throw new Error('Meeting not found');
        }
        return response;
    }
}
exports.MeetingRepository = MeetingRepository;
//# sourceMappingURL=meetingRepository.js.map