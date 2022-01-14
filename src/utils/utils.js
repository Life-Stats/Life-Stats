// const backendURL = 'http://localhost:7890/';
// import { fetch } from 'node-fetch';

export async function getSignUpUser(signUpInfo) {
  const authURL = 'http://localhost:7890/api/v1/auth/signup';
  const response = await fetch(authURL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpInfo), // Do we need to stringify?
  });
  const signUpData = await response.json();
 // When User signs up it requires a password
 // while sign in requires just an email and will send a magic link for auth 
 // need to refactor front end and back end for magic link email confirmation
 // access token is in the url and needs to be stored in cookie or local storage

  console.log('signUpData!/.....', signUpData);
  return signUpData;
}

export async function getSignInUser(signInInfo) {
  console.log('signInInfo', signInInfo);
  const authURL = 'http://localhost:7890/api/v1/auth/login';
  const response = await fetch(authURL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInInfo), // Do we need to stringify?
  });
  console.log('res', response);
  const signInData = await response.json();


  console.log('signInData!/.....', signInData);
  return signInData;
}

// export async function getAUser() {
//   const authURL = 'http://localhost:7890/api/v1/auth/main';
//   const response = await fetch(authURL, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // Do we need to stringify?
//   });
//   const userData = await response.json();
//   // localStorage.setItem('TOKEN', JSON.stringify(data.token));
//   console.log('user Data! .....', userData);

//   return userData;
// }
