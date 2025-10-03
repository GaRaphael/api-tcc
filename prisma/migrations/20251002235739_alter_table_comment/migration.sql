/*
  Warnings:

  - You are about to drop the column `meeting_id` on the `comment` table. All the data in the column will be lost.
  - Added the required column `notice_id` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_meeting_id_fkey";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "meeting_id",
ADD COLUMN     "notice_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_notice_id_fkey" FOREIGN KEY ("notice_id") REFERENCES "notice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
