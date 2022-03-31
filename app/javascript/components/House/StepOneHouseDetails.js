import React from 'react'

 const StepOneHouseDetails =(props)=> {

   const {data,handleChange,handleSelect,handleClickNext}=props
  const { owner_name, owner_contact_number, rental_price, city, bhk_type, furnishing_type, property_type} = data;
  return (
    <>
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
            <div >
              <h4>House Details</h4>
              <input
                className="form-control mb-3 mt-3"
                placeholder="Owner Name"
                type="text"
                name="owner_name"
                value={owner_name || ''}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="Owner Contact Number"
                type="tel"
                name="owner_contact_number"
                value={owner_contact_number || ''}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="City"
                type="text"
                name="city"
                value={city || ''}
                onChange={(e) => handleChange(e)}
              />

              <input
                className="form-control mb-3"
                placeholder="Rental  Price Per Month"
                type="text"
                name="rental_price"
                value={rental_price || ''}
                onChange={(e) => handleChange(e)}
              />

              <div className="d-flex justify-content-between">
              <div style={{width:"48%"}} >
              <label className="form-check-label p-2" htmlFor="bhk_type">
                 BHK Type
              </label>
                 <select className="form-select mb-3" value={bhk_type || ''} aria-label="bhk_type" id="bhk_type" onChange={ (e) => handleSelect(e)} >
                  <option  value="1 RK">1 RK</option>
                  <option  value="1 BHK">1 BHK</option>
                  <option  value="2 BHK">2 BHK</option>
                  <option  value="3 BHK">3 BHK</option>
                  <option  value="3+ BHK">3+ BHK</option>
                </select>

                  </div>
                <div style={{width:"48%"}}>

                <label className="form-check-label p-2" htmlFor="furnishing_type">
                Furnishing
              </label>
                 <select className="form-select mb-3" value={furnishing_type || ''} aria-label="furnishing_type" id="furnishing_type" onChange={ (e) => handleSelect(e)} >
                 <option  value="Fully Furnished">Fully Furnished</option>
                  <option  value="Semi Furnished">Semi Furnished</option>
                  <option  value="Unfurnished">Unfurnished</option>
                </select>
              </div>
              </div>
              <div>
              <label className="form-check-label p-2" htmlFor="property_type">
              Property Type
              </label>
                 <select className="form-select mb-3" value={property_type || ''} aria-label="property_type" id="property_type" onChange={ (e) => handleSelect(e)} >
                  <option  value="Apartment">Apartment</option>
                  <option  value="Independent House">Independent House</option>
                  <option  value="Independent Floor">Independent Floor</option>
                  <option  value="Duplex">Duplex</option>
                  <option  value="Penthouse">Penthouse</option>
                </select>

                  </div>

              <div className="d-flex  justify-content-center">
                <button className="w-100 btn  btn-primary" onClick={()=>handleClickNext()}>
                  Next
                </button>
              </div>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default StepOneHouseDetails;