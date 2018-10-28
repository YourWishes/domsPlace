CREATE TABLE IF NOT EXISTS "Teams" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "name" varchar(32) NOT NULL UNIQUE,
  "motto" text NULL,
  "image" text NULL,
  "registered" TIMESTAMP NOT NULL
);
