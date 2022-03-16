import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./hooks/userContext";

const RentalPropertyDetails = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    owner_name: "",
    owner_contact_number: "",
    rental_type: "",
    price: "",
    city: "",
    image:""
  });
  const { user } = useUserContext();
  const { owner_name, owner_contact_number, price, city } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const fileSelectedHandler = (e) => {
     const file=e.target.files[0]
     console.log(file)
    setData({...data,image:file})
  };


const handleSubmit = async (event) => {
  const  formData = new FormData();
    event.preventDefault();
   for (const key in data) {
      formData.append(`${key}`, `${data[key]}`);
    }



 const response = await fetch(`/api/v1/property/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
       "Content-Type": "multipart/form-data",
      },
      body:formData,
    });

    response.json().then((data) => {
      console.log(data);
      // setData({
      //   owner_name: "",
      //   owner_contact_number: "",
      //   rental_type: "",
      //   price: "",
      //   city: "",
      // });
    });
  };

  return (
    <>
      <main className="container mt-4">
        <div className="d-flex  justify-content-end">
          <button
            className="btn  btn-primary"
            onClick={() => {
              navigate("/user_rental_property_list");
            }}
          >
            See Your Ads List
          </button>
        </div>
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
            <form onSubmit={(event) => handleSubmit(event)} encType="multipart/form-data">
              <h4>Property Details</h4>
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
                name="file"
              />
              <div className="d-flex  justify-content-center">
                <button className="w-100 btn  btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RentalPropertyDetails;