import React, { useEffect, useState } from 'react'

 const getProperty = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
useEffect(() => {
  if(id){
    setLoading(true);
    fetch(`/api/v1/property/show/${id}`, {
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

}, [])


  return [data,loading];
}

export default getProperty