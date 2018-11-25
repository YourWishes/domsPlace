INSERT INTO "BlogArticles" (
  "handle", "title", "image", "shortDescription", "description", "date"
) VALUES (
  ${handle}, ${title}, ${image}, ${shortDescription}, ${description}, ${date}
) RETURNING *;
