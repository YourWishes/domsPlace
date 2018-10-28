CREATE TABLE IF NOT EXISTS "TeamUsersSeasons" (
  "teamId" BIGSERIAL NOT NULL,
  "userId" BIGSERIAL NOT NULL,
  "seasonId" BIGSERIAL NOT NULL,
  "registered" TIMESTAMP NOT NULL,
  PRIMARY KEY("teamId", "userId", "seasonId")
);
