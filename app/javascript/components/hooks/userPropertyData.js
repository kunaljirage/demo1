import { useState } from "react";

const userPropertyData = user =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 const getUserPropertyData = () => {
  let token= document.cookie;
  token=token.split("=");
    if(token[1]){
      setLoading(true);
      fetch(`/api/v1/user/property/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json',
          'Authorization':token[1]
        },
      })
        .then(response => response.json())
        .then(data =>{
        setLoading(false)
        setData(data)})
          }
  }
  return [data,loading,getUserPropertyData];
  }
export default userPropertyData;

