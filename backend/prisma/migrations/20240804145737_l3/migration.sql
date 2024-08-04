/*
  Warnings:

  - The primary key for the `Gym` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `pic` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `ytLink` on the `Gym` table. All the data in the column will be lost.
  - The primary key for the `Trainer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `pic` on the `Trainer` table. All the data in the column will be lost.
  - You are about to drop the column `ytLink` on the `Trainer` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pic` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_gymId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_trainerId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_userId_fkey";

-- AlterTable
ALTER TABLE "Gym" DROP CONSTRAINT "Gym_pkey",
DROP COLUMN "description",
DROP COLUMN "phone",
DROP COLUMN "pic",
DROP COLUMN "ytLink",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "ownerId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Gym_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Gym_id_seq";

-- AlterTable
ALTER TABLE "Membership" ALTER COLUMN "gymId" SET DATA TYPE TEXT,
ALTER COLUMN "trainerId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Trainer" DROP CONSTRAINT "Trainer_pkey",
DROP COLUMN "description",
DROP COLUMN "phone",
DROP COLUMN "pic",
DROP COLUMN "ytLink",
ADD COLUMN     "ownerId" TEXT,
ADD COLUMN     "specialty" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Trainer_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "pic",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "ytLink" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gym" ADD CONSTRAINT "Gym_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trainer" ADD CONSTRAINT "Trainer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
