import { useState } from "react";
import { useUserContext } from "../../User/hooks/userContext";

const userHouseData = () =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user} = useUserContext()
 const getUserHouseData = () => {
  let token= document.cookie;
  token=token.split("=");
    if(token[1]){
      setLoading(true);
      fetch(`/api/v1/properties/${user.id}`, {
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
  return [data,loading,getUserHouseData];
  }
export default userHouseData;

