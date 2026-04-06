-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "coffee" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "brand" VARCHAR NOT NULL,
    "recommendations" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coffee_flavors_flavor" (
    "coffeeId" INTEGER NOT NULL,
    "flavorId" INTEGER NOT NULL,

    CONSTRAINT "PK_64cde86968c8b440e3c63626e80" PRIMARY KEY ("coffeeId","flavorId")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "payload" JSON NOT NULL,

    CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavor" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,

    CONSTRAINT "PK_934fe79b3d8131395c29a040ee5" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IDX_25642975c6f620d570c635f418" ON "coffee_flavors_flavor"("flavorId");

-- CreateIndex
CREATE INDEX "IDX_9cb98a3799afc95cf71fdb1c4f" ON "coffee_flavors_flavor"("coffeeId");

-- CreateIndex
CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event"("name");

-- AddForeignKey
ALTER TABLE "coffee_flavors_flavor" ADD CONSTRAINT "FK_25642975c6f620d570c635f418d" FOREIGN KEY ("flavorId") REFERENCES "flavor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "coffee_flavors_flavor" ADD CONSTRAINT "FK_9cb98a3799afc95cf71fdb1c4f9" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

