import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserContext } from '../components/hooks/userContext';


const  ProtectedRoutes = () => {
  const {user}=useUserContext();
   console.log(user)
  const location = useLocation()
  return user?<Outlet/>:<Navigate to='/login' replace state={{from: location}} />;

}
export default ProtectedRoutes
