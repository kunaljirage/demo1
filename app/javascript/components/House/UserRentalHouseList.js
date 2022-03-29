import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../User/hooks/userContext';
import userHouseData from './hooks/userHouseData';
import deleteHouse from './hooks/deleteHouse';


 const UserRentalHouseList = () => {
  const {user} = useUserContext();
  const [data,loading,getUserHouseData] = userHouseData(user);
 const[deleteHouseData]=deleteHouse(getUserHouseData);
 const   navigate = useNavigate();
useEffect(() => {
  getUserHouseData();
}, [user])
const deleteClickHandle = (house) =>{

  if (confirm("You want to delete?")) {
    deleteHouseData(house.id)
  }

}

const editClickHandle = (house) =>{
 navigate("/edit_rental_house_details",{state:{ house: house }});
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
    {data.map((house)=>{
   return <tr key={house.id}>
     <td>{house.owner_name}</td>
     <td>{house.owner_contact_number}</td>
     <td>{house.city}</td>
     <td>{house.rental_price}</td>
     <td>{house.property_type}</td>
     <td><button type="button" className="btn btn-success" onClick={()=>editClickHandle(house)} >Edit</button></td>
     <td><button type="button" className="btn btn-danger" onClick={()=>deleteClickHandle(house)} >Delete</button></td>
   </tr>
  })}

    </tbody>
    </table>
    </div>
    </div>:
    <div className='container' >
    <div className="d-flex justify-content-center" style={{height:'100vh'}}>
    <h4 className='align-self-center' style={{color:'red'}}> No Any Rental House Advertisement</h4>
    </div>
    </div>}
    </>
  )
}

export default UserRentalHouseList;



