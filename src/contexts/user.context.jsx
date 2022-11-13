import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  {/*  */}
  const [currentUser, setCurrentUser] = useState(null); // USER STATE
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);// LOG
    });

    return unsubscribe;
  }, []);

  const nav = useNavigate();

  {/* LOG OUT LOGIC */}
  useEffect(() => {
    if(currentUser === null) {
      console.log("LOGGED OUT");
      nav("/");
    } else {
      nav("/");
    }
  }, [currentUser])




  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};