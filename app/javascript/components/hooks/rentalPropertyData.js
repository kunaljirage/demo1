import { useEffect, useState } from "react";

const rentalPropertyData = () =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fetch('/api/v1/property/', {
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

    }, [])

  return [data,loading];
  }
export default rentalPropertyData;

