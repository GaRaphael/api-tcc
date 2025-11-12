import { PrismaClient } from '@prisma/client';
declare const prisma: PrismaClient<{
    log: {
        level: "query";
        emit: "event";
    }[];
}, "query", false, import("@prisma/client/runtime").DefaultArgs>;
export default prisma;
export declare const PrismaHelper: {
    prisma: PrismaClient<{
        log: {
            level: "query";
            emit: "event";
        }[];
    }, "query", false, import("@prisma/client/runtime").DefaultArgs>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
};
