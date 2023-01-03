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
    
    fetch(
      'http://34.168.174.35/services/hmscontact/api/contacts',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY3MDk1MTA0MH0.ImTx-u_sLEonLeMa3KslAPw5KaaJHepOHF7e7Yt1wmmDJsZ5yeTyAYH7vVbZbTo13zIdRaJkWrvKfAbA1KXLSA'
        }
      }
    ).then(response => {
      console.log(response);
    });

  }, [currentUser])




  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};