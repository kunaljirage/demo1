import React, { useState } from 'react'

 const HouseAdvertisementCard = (props) => {
   const {house,setSeeMoreData,setSeeMoreToggle}= props
const handleClick =()=>{
  setSeeMoreData(house);
  setSeeMoreToggle(true);

}
const [like, setLike] = useState(false);
  return (
    <div className="card col-4 my-2 mx-2" style={{width: '18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <div className='d-flex justify-content-between'>
      <div><h5 className="card-title">{house.property_type}</h5></div>
    <div><svg onClick={()=>setLike(!like)} style={{color:like?'#ff1733':'#ffa3ae'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill marginLeft" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></div>
</div>
    <p className="card-text"><strong>Rental Price -</strong>$ {house.rental_price} </p>
    <p className="card-text"><strong>City - </strong>{house.city} </p>
    <button  className="btn btn-primary" onClick={()=>handleClick()}>See More</button>
  </div>
</div>
  )
}


export default HouseAdvertisementCard;