import React, { useEffect, useState } from "react";
import getFilteredData from "./House/hooks/getFilteredData";
import HouseAdvertisementCard from "./House/HouseAdvertisementCard";
import SeeMore from "./House/SeeMore";

const Home = () => {
  const [seeMoreToggle,setSeeMoreToggle] = useState(false)
  const [citiesData,setCitiesData] = useState([])
  const [seeMoreData,setSeeMoreData] = useState({})
  const [houseData, setHouseData] =useState([])
  const [filter,setFilter]=useState({})
  const [flag,setFlag]=useState(true)
  const  [filteredData,loading,filterHouseData]=getFilteredData();

  useEffect(() => {
if(flag)
{
     if(filteredData.length>0)
  {

  const cities = filteredData.map((house)=>house.city.toLowerCase())
  let uniqueCities = cities.filter((v, i, a) => a.indexOf(v) == i);
  uniqueCities = uniqueCities.sort()
  setCitiesData(uniqueCities)
  setFlag(false)
 }
  filterHouseData(filter);
}
  setHouseData(filteredData)
 }, [filteredData])

  const handleSelect =(e)=>{
    if(e.target.value !== "")
   {
    setFilter({...filter,[e.target.name]:e.target.value})
    filterHouseData({...filter,[e.target.name]:e.target.value});
  }
  else{

    const key=e.target.name;
    delete filter[key];
    console.log(filter)
    filterHouseData(filter);
  }
  }



  return (
    <>
    <div className="container-fluid select_box_background">
    <div className="d-flex">
<div>
<select className="select_box" name='bhk_type' onChange={ (e) => handleSelect(e)} >
<option  value=""> BHK Type</option>
<option  value="1 RK">1 RK</option>
<option  value="1 BHK">1 BHK</option>
<option  value="2 BHK">2 BHK</option>
<option  value="3 BHK">3 BHK</option>
<option  value="3+ BHK">3+ BHK</option>
</select>
</div>
<div>
  <select className="select_box" name="user_type" onChange={ (e) => handleSelect(e)} >
<option value="" > Listed By</option>
<option  value="Agent">Agent</option>
<option  value="Owner">Owner</option>
</select>
</div>
<div>
<select className="select_box" name="furnishing_type" onChange={ (e) => handleSelect(e)} >
<option value=""> Furnishing</option>
<option  value="Fully Furnished">Fully Furnished</option>
<option  value="Semi Furnished">Semi Furnished</option>
<option  value="Unfurnished">Unfurnished</option>
</select>
</div>
<div>
<select className="select_box" name="property_type"  onChange={ (e) => handleSelect(e)} >
<option value="" > Property Type</option>
<option  value="Apartment">Apartment</option>
<option  value="Independent House">Independent House</option>
<option  value="Independent Floor">Independent Floor</option>
<option  value="Duplex">Duplex</option>
<option  value="Penthouse">Penthouse</option>
</select>

</div>


</div>

     </div>
      <div className="container">
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: "240px", marginLeft: "20%", marginRight: "20%" }}
        >
          <div className="d-flex g-0">
            <div className="col-3 ">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm "
                style={{ padding: "7.5px 12px", borderRadius: "0" }}
                name="city"
                onChange={ (e) => handleSelect(e)}
              >
                <option value="">Select city</option>
                {citiesData
                  ? citiesData.map((city,i) => {
                      return (
                        <option key={i+1} value={city}>
                          {city}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <div className="col-9">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search localities / landmarks"
                  aria-label="Search"
                  style={{ borderRadius: "0" }}
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  style={{ borderRadius: "0" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>

        </div>
        <div className="row justify-content-center mb-4">
          {houseData.length>0 ? houseData.map((house)=><HouseAdvertisementCard key={house.id} house={house} setSeeMoreData={setSeeMoreData} setSeeMoreToggle={setSeeMoreToggle} />)
          : <div>Found no projects or properties matching your search criteria </div>

          }
         {
          seeMoreToggle&&<SeeMore data={seeMoreData} setSeeMoreToggle={setSeeMoreToggle}/>
         }
        </div>
      </div>
    </>
  );
};

export default Home;
