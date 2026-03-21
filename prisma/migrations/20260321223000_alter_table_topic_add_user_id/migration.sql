-- AlterTable
ALTER TABLE "topic"
ADD COLUMN "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "topic"
ADD CONSTRAINT "topic_user_id_fkey"
FOREIGN KEY ("user_id") REFERENCES "user"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
