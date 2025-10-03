/*
  Warnings:

  - You are about to drop the column `comment_id` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `reaction_id` on the `meeting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "meeting" DROP COLUMN "comment_id",
DROP COLUMN "reaction_id";
