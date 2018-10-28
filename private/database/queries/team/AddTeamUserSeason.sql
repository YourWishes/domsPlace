INSERT INTO "TeamUsersSeasons" (
  "teamId", "userId", "seasonId", "registered"
) VALUES (
  ${teamId}, ${userId}, ${seasonId}, ${registered}
) RETURNING *;
