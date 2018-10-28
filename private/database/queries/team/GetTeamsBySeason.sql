SELECT
  "Teams".*
FROM
  "Teams"
INNER JOIN
  "TeamUsersSeasons" ON "TeamUsersSeasons"."teamId" = "Teams"."id"
WHERE
  "TeamUsersSeasons"."seasonId" = ${seasonId}
GROUP BY
  "Teams"."id"
;
