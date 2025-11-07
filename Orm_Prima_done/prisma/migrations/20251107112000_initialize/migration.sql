-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "usernmae" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_usernmae_key" ON "User"("usernmae");
