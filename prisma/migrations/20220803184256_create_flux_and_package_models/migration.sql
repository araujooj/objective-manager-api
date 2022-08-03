/*
  Warnings:

  - You are about to drop the column `end_date` on the `Okr` table. All the data in the column will be lost.
  - You are about to drop the column `necessary_hours` on the `Okr` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Okr` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `necessary_hours` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Okr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `necessaryHours` to the `Okr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `necessaryHours` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TodoSize" AS ENUM ('BIG', 'MEDIUM', 'SMALL');

-- CreateEnum
CREATE TYPE "FluxTitles" AS ENUM ('CLIMBING_THE_MOUNTAIN', 'SLOW_BURN', 'EAT_THAT_FROG');

-- CreateEnum
CREATE TYPE "PackageFocusType" AS ENUM ('LIGHT', 'MEDIUM', 'HEAVY');

-- AlterTable
ALTER TABLE "Okr" DROP COLUMN "end_date",
DROP COLUMN "necessary_hours",
DROP COLUMN "start_date",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "necessaryHours" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "due_date",
DROP COLUMN "necessary_hours",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "necessaryHours" DECIMAL(9,2) NOT NULL;

-- CreateTable
CREATE TABLE "Package" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "focusType" "PackageFocusType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flux" (
    "id" TEXT NOT NULL,
    "title" "FluxTitles" NOT NULL DEFAULT 'EAT_THAT_FROG',
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flux_pkey" PRIMARY KEY ("id")
);
