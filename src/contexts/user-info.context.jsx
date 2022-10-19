import { createContext, useState, useEffect } from 'react';

export const UserInfoContext = createContext({
    //??
});

export const UserInfoProvider = ({ children }) => {
    const[userInfo, setUserInfo] = useState(null);
};