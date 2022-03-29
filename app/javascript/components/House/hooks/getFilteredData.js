import { useState } from "react";

const getFilteredData =()=>{
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const filterHouseData =(filter)=>{
  //console.log(filter)
      setLoading(true);
      fetch(`/api/v1/house/index`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json'
        },
        body: JSON.stringify(filter)
      })
        .then(response => response.json())
        .then(data =>{
        setLoading(false)
        setFilteredData(data)})
       }

    return [filteredData,loading,filterHouseData];

}
export default getFilteredData;