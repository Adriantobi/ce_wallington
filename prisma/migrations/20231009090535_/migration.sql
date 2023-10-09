-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "header1" VARCHAR(255) NOT NULL,
    "paragraph1" TEXT NOT NULL,
    "header2" VARCHAR(255) NOT NULL,
    "paragraph2" TEXT NOT NULL,
    "categoryName" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "button1title" TEXT NOT NULL,
    "button1link" TEXT NOT NULL,
    "button2title" TEXT NOT NULL,
    "button2link" TEXT NOT NULL,
    "link1title" TEXT NOT NULL,
    "link1link" TEXT NOT NULL,
    "link2title" TEXT NOT NULL,
    "link2link" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE SET NULL ON UPDATE CASCADE;
