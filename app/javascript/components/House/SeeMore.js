import React from 'react'

const  SeeMore =props=> {
  const{data,setSeeMoreToggle}=props
  // console.log(data)
  return (
    <div className='details-modal'>
      <button className='details-modal-cancle' onClick={()=>{setSeeMoreToggle(false)}}>X</button>
      <div className='d-flex justify-content-center'>
      <h1 className='details-modal-h1'>{data.bhk_type} {data.property_type}</h1>
      </div>
   <h2 className='details-modal-h2'>Overview</h2>
       <div className='row mb-2'>
    <div className='col-6 details-modal-col'>
     <div className='mb-2'>
      <div className='details-modal-lable'>Full address</div>
      <span>dfkgknnkk</span>
    </div>
    <div className='mb-2'>
      <div className='details-modal-lable'>Furnishing</div>
      <span>{data.furnishing_type}</span>
    </div>
    <div className='mb-2'>
      <div className='details-modal-lable'>Bathrooms</div>
      <span>{data.bathrooms}</span>
      </div>
      <div className='mb-2'>
      <div className='details-modal-lable'>Build up area</div>
      <span>{data.build_up_area} sq.ft</span>
      </div>
      <div className='mb-2'>
      <div className='details-modal-lable'>Parking</div>
      <span>{data.parking}</span>
      </div>
    </div>
    <div className='col-6 details-modal-col'>
  <div className='mb-2'>
      <div className='details-modal-lable'>Age of property</div>
      <span>{data.age_of_property}</span>
    </div>
    <div className='mb-2'>
      <div className='details-modal-lable'>Available from</div>
      <span> {data.available_from}</span>
    </div>
    <div>
      <div className='details-modal-lable'>Main entrance facing</div>
      <span>{data.main_entrance_facing}</span>
      </div>
      <div className='mb-2'>
      <div className='details-modal-lable'>Carpet area</div>
      <span>{data.carpet_area} sq.ft</span>
      </div>
    </div>
  </div>
  <div>
    <h2 className='details-contact'>Contact</h2>

    </div>
    <div className='mb-2'>
      <div className='details-modal-lable'>Owner Name</div>
      <span>{data.owner_name}</span>
      </div>
      <div className='mb-2'>
      <div className='details-modal-lable'>Owner Contact Number</div>
      <span>{data.owner_contact_number}</span>
      </div>
      </div>
  )
}
export default SeeMore