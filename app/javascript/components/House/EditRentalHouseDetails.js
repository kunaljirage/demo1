import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import getHouse from "./hooks/getHouse";
import StepOneHouseDetails from "./StepOneHouseDetails";
import StepTwoHouseDetails from "./StepTwoHouseDetails";

const EditRentalHouseDetails = () => {
  const navigate = useNavigate();
  //const location = useLocation();
  const params=useParams();
  //if(location.state!==null){
   const file = useRef();
   const [step, setStep] = useState(true)
   const [houseData,loading] = getHouse(params.id)
   const [data, setData] = useState({
    owner_name: "",
    owner_contact_number: "",
    city: "",
    rental_price: "",
    property_type: "",
    bhk_type: "",
    furnishing_type: "",
    build_up_area: "",
    carpet_area: "",
    available_from: "",
    security: "",
    floor_number: "",
    parking: "",
    bathrooms: "",
    age_of_property: "",
    main_entrance_facing: "",
    image:"",
    full_address:""
  });
//console.log(houseData)
useEffect(() => {
setData({
  ...houseData
 })
}, [houseData])

const handleSelect = (e) => {
  // console.log(e.target.value, e.target.id);
   setData({ ...data, [e.target.id]: e.target.value });
 };
 const handleClickNext = () => {setStep(false)};
  const handleClickBack = () => {setStep(true)};


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const fileSelectedHandler = (e) => {
    // const file=e.target.files[0]
    // const formData = new FormData();
    // formData.append('image', file)
  };

  const handleSubmit = async () => {
   // event.preventDefault();
    let token= document.cookie;
    token=token.split("=");
    if(token[1]){
    const response = await fetch(`/api/v1/properties/${params.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization':token[1]
      },
      body: JSON.stringify({ property: { ...data } }),
    });

    response.json().then((data) => {
     if(data.message=="successful")
     {
      setData({});
      navigate("/properties")
    }
    });
  }

  };
  return(
loading ?
 <div>Loading...</div>:
<>
  {step==true&& houseData?<StepOneHouseDetails
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

export default EditRentalHouseDetails;
