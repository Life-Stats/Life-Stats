const backendURL = 'http://localhost:7890/';
// import { fetch } from 'node-fetch';

export async function getSignUpUser(signUnInfo) {

    const authURL = '/auth/v1/signup'; 
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUnInfo), // Do we need to stringify?
    });
    const signUpData = await response.json();
    // localStorage.setItem('TOKEN', JSON.stringify(data.token));
    return signUpData;
}

export async function getAUser() {

    const authURL = '/auth/v1/signup'; 
    const response = await fetch(authURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
         // Do we need to stringify?
    });
    const userData = await response.json();
    // localStorage.setItem('TOKEN', JSON.stringify(data.token));
    return userData;
}
