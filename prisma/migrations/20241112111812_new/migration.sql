/*
  Warnings:

  - You are about to drop the column `bio` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `contactId` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `patients` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the `Availability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Award` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Award" DROP CONSTRAINT "Award_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_contactId_fkey";

-- DropIndex
DROP INDEX "Doctor_contactId_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "bio",
DROP COLUMN "contactId",
DROP COLUMN "education",
DROP COLUMN "experience",
DROP COLUMN "image",
DROP COLUMN "location",
DROP COLUMN "patients";

-- DropTable
DROP TABLE "Availability";

-- DropTable
DROP TABLE "Award";

-- DropTable
DROP TABLE "Contact";
