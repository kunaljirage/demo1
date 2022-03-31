import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditRentalHouseDetails from "../components/House/EditRentalHouseDetails";
import ErrorPage from "../components/ErrorPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Login from "../components/User/Login";
import RentalHouseDetails from "../components/House/RentalHouseDetails";
import SignUp from "../components/User/Signup";
import UserRentalHouseList from "../components/House/UserRentalHouseList";
import { useUserContext } from "../components/User/hooks/userContext";


export default function  AppRoutes(){

  const {user} = useUserContext()

return( <>

 <Router>
   <Header/>
    <Routes>
     {user ?

      <>
      <Route path="/properties/new" exact element={<RentalHouseDetails />} />
      <Route path="/properties"  element={<UserRentalHouseList />} />
      <Route path="/properties/:id/edit" element={<EditRentalHouseDetails />}/>
      </>
       :
      <>
      <Route path="/login"  element={<Login />} />
      <Route path="/signup"  element={<SignUp />} />
      </>
    }
       <Route path="/"  exact element={<Home />} />
      <Route path="/*"  element={<ErrorPage />} />
    </Routes>

  </Router>
  </>
 )
 }