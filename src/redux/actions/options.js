const Authorization = process.env.REACT_APP_GITHUB_AUTHORIZATION_CODE;
console.log(Authorization);

export const options = {
   headers: {
      'User-Agent': 'request',
      Authorization: `token ${Authorization}`,
   },
};
