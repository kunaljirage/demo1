import React, { useRef, useState } from "react";
import StepOneHouseDetails from "./StepOneHouseDetails";
import StepTwoHouseDetails from "./StepTwoHouseDetails";
const RentalHouseDetails = () => {
  const [step, setStep] = useState(true)
  const file = useRef();
  const [data, setData] = useState({
    owner_name: "",
    owner_contact_number: "",
    city: "",
    rental_price: "",
    property_type: "Apartment",
    bhk_type: "1 RK",
    furnishing_type: "Fully Furnished",
    build_up_area: "",
    carpet_area: "",
    available_from: "",
    security: "",
    floor_number: "",
    parking: "",
    bathrooms: "1",
    age_of_property: "",
    main_entrance_facing: "",
    image:"",
    full_address:""
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });
  };

  const handleSubmit = async () => {
    console.log(data)
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    let token = document.cookie;
    token = token.split("=");

    if (token[1]) {
      const response = await fetch(`/api/v1/house/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: token[1],
        },
        body: formData,
      });

      response.json().then((data) => {
        if (data.message) {
          alert(data.message);
          setData({
            owner_name: "",
            owner_contact_number: "",
            city: "",
            rental_price: "",
            property_type: "Apartment",
            bhk_type: "1 RK",
            furnishing_type: "Fully Furnished",
            build_up_area: "",
            carpet_area: "",
            available_from: "",
            security: "",
            floor_number: "",
            parking: "",
            bathrooms: "1",
            age_of_property: "",
            main_entrance_facing: "",
            full_address:""
          });
          file.current.value = "";
        }
     });
   }
  };
  const handleSelect = (e) => {
   // console.log(e.target.value, e.target.id);
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleClickNext = () => {setStep(false)};
  const handleClickBack = () => {setStep(true)};
  return (
    <>
    {step==true?<StepOneHouseDetails
        data={data}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleClickNext={handleClickNext}
      />:
      <StepTwoHouseDetails
        data={data}
        handleChange={handleChange}
        fileSelectedHandler={fileSelectedHandler}
        handleSelect={handleSelect}
        file={file}
        handleClickBack={handleClickBack}
        handleSubmit={handleSubmit}
      />}
    </>
  );
};

export default RentalHouseDetails;
