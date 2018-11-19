INSERT INTO "BlogArticles" (
  "handle", "image", "shortDescription", "description", "date"
) VALUES (
  ${handle}, ${image}, ${shortDescription}, ${description}, ${date}
) RETURNING *;
