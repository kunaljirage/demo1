import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = (props) => {

  const [user, setUser] = useState();
  useEffect(()=>{

  const userData = sessionStorage.getItem("user")
  if(userData)
  {
 const data =JSON.parse(userData)
  setUser(data);
  }
},[])



  const { children } = props;
  const contextValue = {
    user: user,
    setUser: setUser,

  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
export default UserContext;
