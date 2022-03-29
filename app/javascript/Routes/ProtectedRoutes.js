import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserContext } from '../components/User/hooks/userContext'



const  ProtectedRoutes = () => {
 const {user} = useUserContext()
  const location = useLocation()
  return user?<Outlet/>:<Navigate to='/' replace state={{from: location}} />;

}
export default ProtectedRoutes
