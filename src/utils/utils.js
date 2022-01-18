// const backendURL = 'http://localhost:7890/';
<<<<<<< HEAD
import fetch from 'node-fetch';

export async function getFake(date) {
  const authURL = 'http://localhost:7890/api/v1/auth/practice';
  const response = await fetch(authURL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(date),
  });
  console.log('res', response);
  // localStorage.setItem('TOKEN', JSON.stringify(data.token));

  return response.json();
}
=======
// import fetch from 'node-fetch';
>>>>>>> 5312bf7602020908fe1d73a524fb27eacde610a2

// export async function getSignUpUser(signUpInfo) {
//   const authURL = 'http://localhost:7890/api/v1/auth/signup';
//   const response = await fetch(authURL, {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(signUpInfo), // Do we need to stringify?
//   });
//   const signUpData = await response.json();
//   // localStorage.setItem('TOKEN', JSON.stringify(data.token));

//   console.log('signUpData!/.....', signUpData);
//   return signUpData;
// }

// export async function getSignInUser() {
//   const authURL = 'http://localhost:7890/api/v1/auth/login';
//   const response = await fetch(authURL, {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log('res', response);
//   // localStorage.setItem('TOKEN', JSON.stringify(data.token));

//   return response;
// }

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
