import { ping } from './../ping';

describe('ping', () => {
  it('shold return a hello world and a 200 code', async () => {
    await expect(ping()).resolves.toStrictEqual({ statusCode: 200, body: 'Thank funk!' });
  })
})