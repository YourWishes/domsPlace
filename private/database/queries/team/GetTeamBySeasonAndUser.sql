SELECT
  *
FROM
  "Teams"
INNER JOIN
  "TeamUsersSeasons" ON "TeamUsersSeasons"."teamId" = "Teams"."id"
WHERE
  "TeamUsersSeasons"."userId" = ${userId} AND
  "TeamUsersSeasons"."seasonId" = ${seasonId}
LIMIT 1;
