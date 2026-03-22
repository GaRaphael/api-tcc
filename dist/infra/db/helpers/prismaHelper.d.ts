import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: {
        level: "query";
        emit: "event";
    }[];
}, "query", import("@prisma/client/runtime/client").DefaultArgs>;
export default prisma;
export declare const PrismaHelper: {
    prisma: PrismaClient<{
        adapter: PrismaPg;
        log: {
            level: "query";
            emit: "event";
        }[];
    }, "query", import("@prisma/client/runtime/client").DefaultArgs>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
};
