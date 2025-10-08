-- AlterTable
ALTER TABLE `Attendance` ADD COLUMN `validatedAt` DATETIME(3) NULL,
    ADD COLUMN `validatedBy` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `canValidateFully` BOOLEAN NOT NULL DEFAULT false;
