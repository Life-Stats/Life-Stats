import { createContext, useContext, useMemo, useState } from 'react';
// import { getUser } from '../services/users'; // originally from front end call
// call here to back to grab services 'user data'
// import { getAUser } from '../utils/utils';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(
    user ? { id: user.id, email: user.email } : {}
  )

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { UserContext, UserProvider, useUser };
