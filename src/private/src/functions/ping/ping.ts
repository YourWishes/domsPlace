import { withHandler } from "../../handler/handler";

export const ping = withHandler(async () => {
  return { statusCode: 200, body: 'Thank funk!' };
});