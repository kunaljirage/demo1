import React from 'react'

 const StepTwoHouseDetails = (props) =>{
  const {data,fileSelectedHandler,handleChange,handleSelect,handleClickBack,handleSubmit,file}=props
 const{build_up_area,carpet_area,available_from,security,floor_number,parking,
 bathrooms,
 age_of_property,
 main_entrance_facing,
 image,
 full_address
}=data

  return (
          <main className="container mt-4 " style={{ height: "100vh" }}>
             <div
          className="row  w-100 d-flex justify-content-center align-items-center">
            <div
            className="col-12 col-md-5 col-xxl-5"
            style={{
              padding: "30px",
              border: "1px solid #ededed ",
              boxShadow: "5px 10px #ededed",
            }}
          >
          <h4>House Details</h4>
          <input
                className="form-control mb-3 mt-3"
                placeholder="Full address"
                type="text"
                name="full_address"
                value={full_address}
                onChange={(e) => handleChange(e)}
              />
          <div className='d-flex justify-content-between'>

            <input
                className="form-control mb-3"
                placeholder="Build up area"
                type="text"
                name="build_up_area"
                value={build_up_area}
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />


              <input
                className="form-control mb-3"
                placeholder="Carpet area"
                type="text"
                name="carpet_area"
                value={carpet_area}
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />

          </div>
          <div className='d-flex justify-content-between'>
          <input
                className="form-control mb-3"
                placeholder="Security"
                type="text"
                name="security"
                value={security}
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />
               <input
                className="form-control mb-3"
                placeholder="Floor number"
                type="text"
                name="floor_number"
                value={floor_number}
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />
            </div>
            <div className='d-flex justify-content-between'>
              <div  style={{width:"49%"}}>
              <input
                className="form-control mb-3"
                placeholder="Available from"
                type="text"
                name="available_from"
                value={available_from }
                onChange={(e) => handleChange(e)}
              />
              </div>

             <div className='d-flex'  style={{width:"49%"}}>
              <label  className='p-2' htmlFor="bathrooms">
              Bathrooms
              </label>
                 <select className="form-select mb-3 " value={bathrooms} aria-label="bathrooms" id="bathrooms"onChange={ (e) => handleSelect(e)} >
                <option  value="One">1</option>
                <option  value="Two">2</option>
                <option  value="Three">3</option>
                <option  value="More than three">3+</option>
                </select>
              </div>
              </div>
              <div className='d-flex justify-content-between'>
              <input
                className="form-control mb-3"
                placeholder="Age of property"
                type="text"
                name="age_of_property"
                value={age_of_property}
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />
              <input
                className="form-control mb-3"
                placeholder="Main entrance facing"
                type="text"
                name="main_entrance_facing"
                value={main_entrance_facing }
                onChange={(e) => handleChange(e)}
                style={{width:"49%"}}
              />
                </div>


                <input
                className="form-control mb-3"
                placeholder="Parking"
                type="text"
                name="parking"
                value={parking}
                onChange={(e) => handleChange(e)}
              />
            <input
                className="form-control mb-3"
                placeholder="Rental property image"
                type="file"
                onChange={(e) => fileSelectedHandler(e)}
                name="file"
                ref={file}
              />
              <div className="d-flex justify-content-between">
               <button className="btn btn-primary" onClick={()=>handleClickBack()} style={{width:"49%"}}>
                  Back
                </button>
                <button className="btn btn-primary" onClick={()=>handleSubmit()} style={{width:"49%"}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          </main>
  )
}

export default StepTwoHouseDetails;