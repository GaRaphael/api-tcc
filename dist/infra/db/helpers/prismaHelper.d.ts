import { PrismaClient } from '@prisma/client';
declare const prisma: PrismaClient<{
    log: {
        level: "query";
        emit: "event";
    }[];
}, "query", import("@prisma/client/runtime/client").DefaultArgs>;
export default prisma;
export declare const PrismaHelper: {
    prisma: PrismaClient<{
        log: {
            level: "query";
            emit: "event";
        }[];
    }, "query", import("@prisma/client/runtime/client").DefaultArgs>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
};
