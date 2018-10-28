INSERT INTO "Teams" (
  "name", "motto", "image", "registered"
) VALUES (
  ${name}, ${motto}, ${image}, ${registered}
) RETURNING *;
