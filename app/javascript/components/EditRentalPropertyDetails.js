import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getProperty from "./hooks/getProperty";
import { useUserContext } from "./hooks/userContext";

const EditRentalPropertyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if(location.state.property.id){
//console.log(location.state.property.id)
  const [propertyData,loading] = getProperty(location.state.property.id)
  const [data, setData] = useState({
    owner_name: "",
    owner_contact_number: "",
    rental_type: "",
    price: "",
    city: "",
  });
//console.log(propertyData,loading)
useEffect(() => {

setData({
  owner_name:propertyData.owner_name ,
  owner_contact_number: propertyData.owner_contact_number,
  rental_type: propertyData.rental_type,
  price: propertyData.price,
  city: propertyData.city,
})
}, [propertyData])



  const { owner_name, owner_contact_number, price, city } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const fileSelectedHandler = (e) => {
    // const file=e.target.files[0]
    // const formData = new FormData();
    // formData.append('image', file)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/v1/property/edit/${location.state.property.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ property: { ...data } }),
    });

    response.json().then((data) => {
     if(data.message=="successful")
     {
      setData({
        owner_name: "",
        owner_contact_number: "",
        rental_type: "",
        price: "",
        city: "",
      });
      navigate("/user_rental_property_list")
    }
    });

  };

  return (
    <>
      <main className="container mt-4">
        <div
          className="row  w-100 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="col-12 col-md-5 col-xxl-5"
            style={{
              padding: "30px",
              border: "1px solid #ededed ",
              boxShadow: "5px 10px #ededed",
            }}
          >
            <form onSubmit={(event) => handleSubmit(event)}>
              <h4>Edit Property Details</h4>
              <input
                className="form-control mb-3 mt-3"
                placeholder="Owner Name"
                type="text"
                name="owner_name"
                value={owner_name}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="Owner Contact Number"
                type="tel"
                name="owner_contact_number"
                value={owner_contact_number}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="City"
                type="text"
                name="city"
                value={city}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="Rental Price Per Month"
                type="text"
                name="price"
                value={price}
                onChange={(e) => handleChange(e)}
              />
              <div
                className="row p-3 mb-3"
                style={{ border: "1px solid #ced4da" }}
              >
                <label className="form-check-label">Rental Type</label>
                <div className="col-md-4 col-xxl-4 col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rental_type"
                    value="full house"
                    id="full house"
                    onChange={(e) => handleChange(e)}
                    checked={data.rental_type=== "full house"?true:false }
                  />
                  <label className="form-check-label" htmlFor="full house">
                    Full house
                  </label>
                </div>
                <div className=" col-md-4 col-xxl-4  col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rental_type"
                    value="pg/hostel"
                    id="pg/hostel"
                    onChange={(e) => handleChange(e)}
                    checked={data.rental_type=== "pg/hostel"?true:false }
                  />
                  <label className="form-check-label" htmlFor="pg/hostel">
                    Pg / Hostel
                  </label>
                </div>
                <div className=" col-md-4 col-xxl-4  col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rental_type"
                    value="flatmates"
                    id="flatmate"
                    onChange={(e) => handleChange(e)}
                    checked={data.rental_type=== "flatmates"?true:false }
                  />
                  <label className="form-check-label" htmlFor="flatmate">
                    Flatmates
                  </label>
                </div>
              </div>
              <input
                className="form-control mb-3"
                placeholder="Rental property image"
                type="file"
                onChange={(e) => fileSelectedHandler(e)}
              />
              <div className="d-flex  ">
                <button className="w-50 btn  btn-primary me-2" type="submit">
                  Submit
                </button>
                <button className="w-50 btn  btn-primary" onClick={()=>{navigate("/user_rental_property_list")}} >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
          }else{
            navigate("user_rental_property_list")
          }
};

export default EditRentalPropertyDetails;
