import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <MainContext.Provider value={{ name, setName }}>
      {children}
    </MainContext.Provider>
  );
};

const useMain = () => {
  const context = useContext(MainContext);

  if (context === undefined) {
    throw new Error('useMain must be used within a MainContext Provider');
  }
  return context;
};

export { MainProvider, useMain };