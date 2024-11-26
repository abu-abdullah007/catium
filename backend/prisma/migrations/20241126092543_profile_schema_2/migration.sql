/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Profile_profileId_key` ON `Profile`(`profileId`);
