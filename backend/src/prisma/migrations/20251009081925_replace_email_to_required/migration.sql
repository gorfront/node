/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Idea` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Idea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Idea" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "email";

-- CreateIndex
CREATE UNIQUE INDEX "Idea_email_key" ON "public"."Idea"("email");
