import React from 'react'

 const PropertyAdvertisementCard = (props) => {
   const {property}= props
  return (
    <div className="card col-4 my-2 mx-2" style={{width: '18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{property.rental_type}</h5>
    <p className="card-text"><strong>Rental Price -</strong>$ {property.price} </p>
    <p className="card-text"><strong>City - </strong>{property.city} </p>
    <a  className="btn btn-primary">See More</a>
  </div>
</div>
  )
}


export default PropertyAdvertisementCard;