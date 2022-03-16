import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import deleteProperty from './hooks/deleteProperty';
import { useUserContext } from './hooks/userContext';
import userPropertyData from './hooks/userPropertyData';


 const UserRentalPropertyList = () => {
  const {user} = useUserContext();
  const [data,loading,getUserPropertyData] = userPropertyData(user);
 const[deletePropertyData]=deleteProperty(getUserPropertyData);
 const   navigate = useNavigate();
useEffect(() => {
  getUserPropertyData();
}, [user])
const deleteClickHandle = (property) =>{

  if (confirm("You want to delete?")) {
    deletePropertyData(property.id)
  }

}

const editClickHandle = (property) =>{
  navigate("/edit_rental_property_details",{state:{ property: property }});
  }
  return (
    <>
    {loading==true&&<div>Loading...</div>}
    {data.length>0?<div className='container'>
      <div className='d-flex mt-5'>
    <table className='table table-striped'>
    <thead>
    <tr>
    <th>Owner Name</th>
    <th>Owner Contact Number</th>
    <th>City</th>
    <th>Rental Price Per Month</th>
    <th>Rental Type</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {data.map((property)=>{
   return <tr key={property.id}>
     <td>{property.owner_name}</td>
     <td>{property.owner_contact_number}</td>
     <td>{property.city}</td>
     <td>{property.price}</td>
     <td>{property.rental_type}</td>
     <td><button type="button" className="btn btn-success" onClick={()=>editClickHandle(property)} >Edit</button></td>
     <td><button type="button" className="btn btn-danger" onClick={()=>deleteClickHandle(property)} >Delete</button></td>
   </tr>
  })}

    </tbody>
    </table>
    </div>
    </div>:
    <div className='container' >
    <div className="d-flex justify-content-center" style={{height:'100vh'}}>
    <h4 className='align-self-center' style={{color:'red'}}> No Any Rental Property Advertisement</h4>
    </div>
    </div>}
    </>
  )
}

export default UserRentalPropertyList;
