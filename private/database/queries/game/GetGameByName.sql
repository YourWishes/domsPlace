SELECT * FROM "Games" WHERE LOWER("name") = LOWER(${name}) LIMIT 1;
