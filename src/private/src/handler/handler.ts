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
    if(event && event.headers && event.headers['Content-Type']) {
      let contentType = event.headers['Content-Type'];
      if(contentType.indexOf('application/json') !== -1) {
        try {
          let body:T = JSON.parse(event.body as any);
          event.body = body;
        } catch(e) {
          callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify('Invalid body')
          })
        }
      }
    }

    return callable(event, context).then(d => {
      if(callback) {
        let contentType = (d.headers ? d.headers['Content-Type']:null) ||'application/json';
        let json = contentType == 'application/json';

        callback(null, {
          ...d,
          body: json ? JSON.stringify(d.body) : d.body,
          statusCode: d.statusCode || 200,
          headers: {
            ...(d.headers||{}),
            "Content-Type": contentType
          }
        });
      }

      return d;
    }).catch(ex => {
      if(callback) {
        callback(null, { statusCode: 500, body: null, });
      }
      throw ex;
    })
  };
}