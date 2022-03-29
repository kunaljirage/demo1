import React, { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext({});

export const UserProvider = (props) => {
const [user, setUser] = useState()

useEffect(() => {
  let token= document.cookie;
  token=token.split("=");
  if(token[1]){
     fetch(`/api/v1/user/show`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json',
          'Authorization':token[1]
        },
      })
        .then(response => response.json())
        .then(data =>{
          if(data.message === 'successful')
          {
            setUser(data.user)
          }
          else{
            alert('please login first')
          }

           })

          }



}, [])

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
