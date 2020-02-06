export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

export type APIResponse = {
  statusCode?:number;
  body:any;
  headers?:{
    [key:string]:string,
    "Content-Type"?:string
  };
}

export type APICallable<T=any> = (event:APIEvent<T>, context:any) => Promise<APIResponse>;

export type APIMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'TRACE'|'OPTIONS'|'CONNECT';

export interface APIEvent<T=any> {
  body:T;
  headers?:{[key:string]:string};
  httpMethod?:APIMethod;
  isOffline?:boolean;
  multiValueHeaders?:{[key:string]:string};
  multiValueQueryStringParameters?:{[key:string]:string};
  path?:string;
  pathParameters?:never;
  queryStringParameters?:{[key:string]:string};
  requestContext?:{[key:string]:string};
  resource?:string;
  stageVariables?:any;
}

export const withHandler = <T=any>(callable:APICallable<T>) => {
  return (event?:APIEvent<T>, context?, callback?) => {
    try {
      if(!event) throw new Error();
      if(event.body) event.body = JSON.parse(event.body as any) as T;
    } catch(e) {
      console.error(e);
      callback(null, {
        statusCode: 400, headers: DEFAULT_HEADERS,
        body: JSON.stringify('Invalid body')
      });
    }

    return callable(event, context).then(d => {
      if(!callback) return d;
      let contentType = (d.headers?d.headers['Content-Type']:null) ||'application/json';
      let json = contentType.includes('application/json');

      callback(null, {
        ...d,
        body: json ? JSON.stringify(d.body) : d.body,
        statusCode: d.statusCode || 200,
        headers: {
          ...DEFAULT_HEADERS,
          ...(d.headers||{})
        }
      });

      return d;
    }).catch(ex => {
      if(callback) {
        callback(null, { statusCode: 500, body: null, headers: DEFAULT_HEADERS });
      }
      throw ex;
    })
  };
}