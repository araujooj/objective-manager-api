/*
  Warnings:

  - You are about to drop the column `fluxId` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the `Flux` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Package" DROP CONSTRAINT "Package_fluxId_fkey";

-- AlterTable
ALTER TABLE "Package" DROP COLUMN "fluxId",
ADD COLUMN     "flowId" TEXT;

-- DropTable
DROP TABLE "Flux";

-- CreateTable
CREATE TABLE "Flow" (
    "id" TEXT NOT NULL,
    "title" "FluxTitles" NOT NULL DEFAULT 'EAT_THAT_FROG',
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flow_userId_key" ON "Flow"("userId");

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
