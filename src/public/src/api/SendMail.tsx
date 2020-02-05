export const sendMail = (name:string, email:string, message:string) => {
  return fetch('https://api.domsplace.com/v1/mail/send', {
    method: 'POST',
    body: JSON.stringify({
      name, email, message
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }).then(d => d.json());
}