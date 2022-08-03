/*
  Warnings:

  - Added the required column `userId` to the `Flux` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Inbox` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Okr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flux" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inbox" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Okr" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "okrId" TEXT,
ADD COLUMN     "packageId" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TodoSize";

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_okrId_fkey" FOREIGN KEY ("okrId") REFERENCES "Okr"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE SET NULL ON UPDATE CASCADE;
