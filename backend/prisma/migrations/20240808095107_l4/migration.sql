/*
  Warnings:

  - You are about to drop the `Gym` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trainer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Gym" DROP CONSTRAINT "Gym_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_gymId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_trainerId_fkey";

-- DropForeignKey
ALTER TABLE "Trainer" DROP CONSTRAINT "Trainer_ownerId_fkey";

-- DropTable
DROP TABLE "Gym";

-- DropTable
DROP TABLE "Trainer";
