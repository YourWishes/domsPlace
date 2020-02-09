export const APIRequest = (url:string, body?:object) => {
  return fetch(`https://api.domsplace.com/v1/${url}`, {
    method: body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : null,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(e => e.json());
}