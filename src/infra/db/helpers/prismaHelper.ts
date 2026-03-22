import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({
  adapter,
  log: [{ level: 'query', emit: 'event' }]
});

export default prisma;

export const PrismaHelper = {
  prisma,
  async connect(): Promise<void> {
    await this.prisma.$connect();
  },
  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
};