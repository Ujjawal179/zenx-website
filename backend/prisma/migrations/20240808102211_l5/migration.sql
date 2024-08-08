/*
  Warnings:

  - You are about to drop the column `gymId` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `trainerId` on the `Membership` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "gymId",
DROP COLUMN "trainerId";
