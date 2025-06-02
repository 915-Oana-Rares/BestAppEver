-- CreateTable
CREATE TABLE "Comic" (
    "name" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "writer" TEXT NOT NULL,

    CONSTRAINT "Comic_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuspiciousUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SuspiciousUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOperation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comicName" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserComic" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comicName" TEXT NOT NULL,

    CONSTRAINT "UserComic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comic_publisher_idx" ON "Comic"("publisher");

-- CreateIndex
CREATE INDEX "Comic_writer_idx" ON "Comic"("writer");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SuspiciousUser_userId_key" ON "SuspiciousUser"("userId");

-- CreateIndex
CREATE INDEX "UserOperation_userId_idx" ON "UserOperation"("userId");

-- CreateIndex
CREATE INDEX "UserOperation_comicName_idx" ON "UserOperation"("comicName");

-- CreateIndex
CREATE INDEX "UserComic_userId_idx" ON "UserComic"("userId");

-- CreateIndex
CREATE INDEX "UserComic_comicName_idx" ON "UserComic"("comicName");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuspiciousUser" ADD CONSTRAINT "SuspiciousUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOperation" ADD CONSTRAINT "UserOperation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOperation" ADD CONSTRAINT "UserOperation_comicName_fkey" FOREIGN KEY ("comicName") REFERENCES "Comic"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserComic" ADD CONSTRAINT "UserComic_comicName_fkey" FOREIGN KEY ("comicName") REFERENCES "Comic"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserComic" ADD CONSTRAINT "UserComic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
