-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Student');

-- CreateEnum
CREATE TYPE "CountryName" AS ENUM ('KENYA', 'TANZANIA', 'UGANDA', 'RWANDA', 'SOUTHAFRICA', 'BURUDI');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "tertiaryColor" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "email" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Edit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" "CountryName" NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colours" (
    "id" SERIAL NOT NULL,
    "hexcode" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "countryid" INTEGER NOT NULL,

    CONSTRAINT "Colours_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Colours" ADD CONSTRAINT "Colours_countryid_fkey" FOREIGN KEY ("countryid") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
