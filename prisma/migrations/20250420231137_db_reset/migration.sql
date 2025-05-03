/*
  Warnings:

  - You are about to drop the column `login` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `accessories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `data_dash` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `suits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_has_suits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `women_suit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_has_suits" DROP CONSTRAINT "user_has_suits_suits_id_fkey";

-- DropForeignKey
ALTER TABLE "user_has_suits" DROP CONSTRAINT "user_has_suits_user_id_fkey";

-- DropIndex
DROP INDEX "user_email_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "login";

-- DropTable
DROP TABLE "accessories";

-- DropTable
DROP TABLE "data_dash";

-- DropTable
DROP TABLE "pants";

-- DropTable
DROP TABLE "sales";

-- DropTable
DROP TABLE "suits";

-- DropTable
DROP TABLE "user_has_suits";

-- DropTable
DROP TABLE "women_suit";
