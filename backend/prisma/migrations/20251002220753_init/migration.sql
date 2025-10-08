/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `Payslip` DROP FOREIGN KEY `Payslip_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `WorkSchedule` DROP FOREIGN KEY `WorkSchedule_employeeId_fkey`;

-- DropIndex
DROP INDEX `Payment_employeeId_fkey` ON `Payment`;

-- DropIndex
DROP INDEX `WorkSchedule_employeeId_fkey` ON `WorkSchedule`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `active` BOOLEAN NULL DEFAULT true,
    ADD COLUMN `bankDetails` VARCHAR(191) NULL,
    ADD COLUMN `contractType` ENUM('DAILY', 'HOURLY', 'FIXED', 'FEE') NULL,
    ADD COLUMN `hireDate` DATETIME(3) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `position` VARCHAR(191) NULL,
    ADD COLUMN `salaryOrRate` DECIMAL(14, 2) NULL;

-- DropTable
DROP TABLE `Employee`;

-- AddForeignKey
ALTER TABLE `Payslip` ADD CONSTRAINT `Payslip_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
