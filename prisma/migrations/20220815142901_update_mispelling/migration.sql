/*
  Warnings:

  - The `title` column on the `Flow` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "FlowTitles" AS ENUM ('CLIMBING_THE_MOUNTAIN', 'SLOW_BURN', 'EAT_THAT_FROG');

-- AlterTable
ALTER TABLE "Flow" DROP COLUMN "title",
ADD COLUMN     "title" "FlowTitles" NOT NULL DEFAULT 'EAT_THAT_FROG';

-- DropEnum
DROP TYPE "FluxTitles";
