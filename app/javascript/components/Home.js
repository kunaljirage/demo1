import React, { useEffect, useState } from "react";
import rentalPropertyData from "./hooks/rentalPropertyData";
import PropertyAdvertisementCard from "./PropertyAdvertisementCard";

const Home = () => {
  const [citiesData,setCitiesData] = useState([])
  const [data] = rentalPropertyData();
  const [city, setCity] = useState("");
useEffect(() => {
  if(data)
  {
  const cities = data.map((property)=>property.city.toLowerCase())
  var uniqueCities = cities.filter((v, i, a) => a.indexOf(v) == i);
  uniqueCities = uniqueCities.sort()
  console.log(data)
  setCitiesData(uniqueCities)
 }
 }, [data])

const handleChange = (e) => {
  setCity(e.target.value);
 };

  return (
    <>
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
                value={city}
                onChange={(e) => handleChange(e)}
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
          <div className="d-flex p-3" style={{ border: "1px solid #ced4da" }}>
            <div className="col-4 form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="full_house"
              />
              <label className="form-check-label" htmlFor="full_house">
                Full house
              </label>
            </div>
            <div className="col-4 form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="pg"
              />
              <label className="form-check-label" htmlFor="pg">
                Pg / Hostel
              </label>
            </div>
            <div className="col-4 form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="flatmates"
              />
              <label className="form-check-label" htmlFor="flatmates">
                Flatmates
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <PropertyAdvertisementCard />
          <PropertyAdvertisementCard />
          <PropertyAdvertisementCard />
          <PropertyAdvertisementCard />
          <PropertyAdvertisementCard />
          <PropertyAdvertisementCard />
        </div>
      </div>
    </>
  );
};

export default Home;
