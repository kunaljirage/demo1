import React, { useEffect, useState } from 'react'

 const getHouse = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
useEffect(() => {
  let token= document.cookie;
  token=token.split("=");
  if(id){
    setLoading(true);
    fetch(`/api/v1/house/show/${id}`, {
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

}, [])


  return [data,loading];
}

export default getHouse