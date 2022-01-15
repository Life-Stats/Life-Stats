const { client } = require('./client');

// BE services

export function getUser() {
 return client.auth.user();
}  

export function getSession() {
  const session = client.auth.session();
  return session;
};

 export async function signInUser() {
  // eslint-disable-next-line no-unused-vars
  const href = window.location.href.split("#")[0]
  const { user, session, error } = await client.auth.signIn({ 
    provider: 'google'
  },
  {
    redirectTo: href

  }
  );
  if (error) throw error;
  return user;
};

export async function signOutUser() {
  return client.auth.signOut();
}
// return { getUser, getSession, signInUser, signUpUser, signOutUser };
