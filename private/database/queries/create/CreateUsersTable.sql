CREATE TABLE IF NOT EXISTS "Users" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "discordId" text NULL UNIQUE,
  "steamId" text NULL UNIQUE,
  "email" text NULL UNIQUE
);
