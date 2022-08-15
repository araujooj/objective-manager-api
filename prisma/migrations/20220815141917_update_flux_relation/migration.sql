/*
  Warnings:

  - You are about to drop the column `focusType` on the `Package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "focusType",
ADD COLUMN     "fluxId" TEXT;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_fluxId_fkey" FOREIGN KEY ("fluxId") REFERENCES "Flux"("id") ON DELETE SET NULL ON UPDATE CASCADE;
