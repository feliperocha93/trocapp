/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "glued_ids" INTEGER,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "repeated_ids" INTEGER,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Glued" (
    "id" SERIAL NOT NULL,
    "special" TEXT[],
    "coca_cola" TEXT[],
    "qatar" TEXT[],
    "ecuador" TEXT[],
    "senegal" TEXT[],
    "netherlands" TEXT[],
    "england" TEXT[],
    "iran" TEXT[],
    "usa" TEXT[],
    "wales" TEXT[],
    "argentina" TEXT[],
    "arabia" TEXT[],
    "mexico" TEXT[],
    "poland" TEXT[],
    "france" TEXT[],
    "australia" TEXT[],
    "denmark" TEXT[],
    "tunisia" TEXT[],
    "spain" TEXT[],
    "costa_rica" TEXT[],
    "german" TEXT[],
    "japan" TEXT[],
    "belgium" TEXT[],
    "canada" TEXT[],
    "morocco" TEXT[],
    "croatia" TEXT[],
    "brazil" TEXT[],
    "serbia" TEXT[],
    "switzerland" TEXT[],
    "cameroon" TEXT[],
    "portugal" TEXT[],
    "ghana" TEXT[],
    "uruaguay" TEXT[],
    "korea" TEXT[],

    CONSTRAINT "Glued_pkey" PRIMARY KEY ("id")
);
