/*
  Warnings:

  - You are about to drop the column `password` on the `UserData` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_UserData" ("company", "country", "email", "id", "name", "role") SELECT "company", "country", "email", "id", "name", "role" FROM "UserData";
DROP TABLE "UserData";
ALTER TABLE "new_UserData" RENAME TO "UserData";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
