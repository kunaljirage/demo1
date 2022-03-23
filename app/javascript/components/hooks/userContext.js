import React, { createContext, useContext, useState } from "react";


const UserContext = createContext({});

export const UserProvider = (props) => {
const [user, setUser] = useState()

const { children } = props;
  const contextValue = {
    user: user,
    setUser:setUser
 };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
export default UserContext;
