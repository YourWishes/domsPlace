CREATE TABLE IF NOT EXISTS "BlogArticles" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "handle" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "shortDescription" TEXT NULL,
  "description" TEXT NOT NULL,
  "date" TIMESTAMP NOT NULL
);
