const { client } = require('./client');

export function getUser() {
 return client.auth.user();
}  

export function getSession() {
  const session = client.auth.session();
  return session;
};

 export async function signInUser() {
   // Why disable this rule instead of just not destructuring the `session` key?
  
  const { user, error } = await client.auth.signIn({ 
    provider: 'google'
  }
  );
  if (error) throw error;
  return user;
};

export async function signInUserGitHub() {

  
  const { user, error } = await client.auth.signIn({ 
    provider: 'github'
  },
  );
  if (error) throw error;
  return user;
};

export async function signOutUser() {
  return client.auth.signOut();
}

