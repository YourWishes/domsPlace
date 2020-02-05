import { sendMail } from './../send';

describe('sendMail', () => {
  it('should require a body', async () => {
    await expect(sendMail({ body: null })).resolves.toHaveProperty('statusCode', 400);
  });

})