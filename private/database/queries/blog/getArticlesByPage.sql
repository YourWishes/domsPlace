SELECT
  *
FROM
  "BlogArticles"
ORDER BY
  "date" DESC
LIMIT
  ${count}
OFFSET
  ${offset}
;
