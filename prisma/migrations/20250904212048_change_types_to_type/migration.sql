/*
  Warnings:

  - You are about to drop the column `description` on the `kos` table. All the data in the column will be lost.
  - Added the required column `type` to the `Kos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kos` DROP COLUMN `description`,
    ADD COLUMN `type` ENUM('campur', 'putra', 'putri') NOT NULL;
