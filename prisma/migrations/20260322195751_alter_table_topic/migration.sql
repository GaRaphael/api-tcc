/*
  Warnings:

  - Made the column `user_id` on table `topic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "topic" ALTER COLUMN "user_id" SET NOT NULL;
