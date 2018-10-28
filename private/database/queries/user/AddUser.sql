INSERT INTO "Users" (
  "discordId",
  "steamId",
  "email"
) VALUES (
  ${discordId},
  ${steamId},
  ${email}
) RETURNING *;
