import { useState } from "react";

const userPropertyData = user =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 const getUserPropertyData = () => {
    if(user){
      setLoading(true);
      fetch(`/api/v1/property/${user.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json'
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

