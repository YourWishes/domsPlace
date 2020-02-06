import { withHandler, APICallable, DEFAULT_HEADERS } from './../handler';

describe('withHandler', () => {
  it('should wrap an async function into a serverless callbackable function', () => {
    let callbackable = jest.fn(async () => ({ body: 'Hello World', statusCode: 200 }));
    let x = withHandler(callbackable);
    expect(typeof x).toBe('function');
  });

  it('should call the promise and pass the result to the callback', async () => {
    let callbackable = async () => ({ body: 'Hello World', statusCode: 200 });
    let x = withHandler(callbackable);
    let fn = jest.fn();

    x({} as any, null, fn);

    await new Promise(resolve => setImmediate(resolve));

    expect(fn).toHaveBeenCalled();
  });

  it('should set the content type', async () => {
    let x = withHandler(async () => ({ body: 'Hello World', statusCode: 200 }));
    let fn = jest.fn();

    x({} as any, null, fn);

    await new Promise(resolve => setImmediate(resolve));

    expect(fn).toHaveBeenCalledWith(null, { body: '"Hello World"', statusCode: 200,
      headers: DEFAULT_HEADERS
    });
  });

  it('should return the invoked functions returned promise', async () => {
    let x = withHandler(async () => ({ body: 'Hello World', statusCode: 200 }));
    let fn = jest.fn();
    let prom = x({} as any, null, fn);

    let result = await prom;
    expect(result).toStrictEqual({ body: 'Hello World', statusCode: 200 });
  })
})