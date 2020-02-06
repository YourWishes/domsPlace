import { ping } from './../ping';

describe('ping', () => {
  it('shold return a hello world and a 200 code', async () => {
    await expect(ping()).resolves.toHaveProperty('body', 'Thank funk!');
    await expect(ping()).resolves.toHaveProperty('statusCode', 200);
  })
})