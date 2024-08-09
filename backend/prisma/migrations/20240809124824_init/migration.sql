/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MembershipActivities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MembershipActivities" DROP CONSTRAINT "_MembershipActivities_A_fkey";

-- DropForeignKey
ALTER TABLE "_MembershipActivities" DROP CONSTRAINT "_MembershipActivities_B_fkey";

-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "_MembershipActivities";
