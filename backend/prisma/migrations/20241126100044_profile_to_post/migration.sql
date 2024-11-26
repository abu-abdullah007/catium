-- DropForeignKey
ALTER TABLE `Posts` DROP FOREIGN KEY `Posts_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
