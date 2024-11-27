-- AlterTable
ALTER TABLE `Posts` ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `tag` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `education` VARCHAR(191) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `work` VARCHAR(191) NULL;