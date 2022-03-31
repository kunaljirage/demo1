import { useState } from "react";
import axios from "axios";
const getFilteredData =()=>{
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const filterHouseData =async(filter)=>{
     setLoading(true);
     const res= await axios.get('/api/v1/properties', { params: filter })
        if(res.data)
         {
        setLoading(false)
        setFilteredData(res.data)
         }
      }
    return [filteredData,loading,filterHouseData];
}
export default getFilteredData;