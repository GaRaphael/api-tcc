"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaHelper = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: [{ level: 'query', emit: 'event' }]
});
exports.default = prisma;
exports.PrismaHelper = {
    prisma,
    async connect() {
        await this.prisma.$connect();
    },
    async disconnect() {
        await this.prisma.$disconnect();
    }
};
//# sourceMappingURL=prismaHelper.js.map