SELECT * FROM "Seasons"
WHERE
  "startDate" <= ${date} AND
  "endDate" >= ${date}
LIMIT 1;
