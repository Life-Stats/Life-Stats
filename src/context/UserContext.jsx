import { createContext, useContext, useMemo, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  // using the lazy initializer method would be good here
  const [user, setUser] = useState(() => {
    return currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  }
);

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

// Dont need to export the context since we use it in the useUser() hook
export { UserProvider, useUser };