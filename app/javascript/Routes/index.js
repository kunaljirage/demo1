import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditRentalPropertyDetails from "../components/EditRentalPropertyDetails";
import ErrorPage from "../components/ErrorPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Login from "../components/Login";
import RentalPropertyDetails from "../components/RentalPropertyDetails";
import Signin from "../components/Signin";
import User from "../components/User";
import UserRentalPropertyList from "../components/UserRentalPropertyList";
import ProtectedRoutes from "./ProtectedRoutes";

export default function  AppRoutes(){
 return( <>

 <Router>
   <Header/>
    <Routes>
      <Route path="/"  exact element={<Home />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/signin"  element={<Signin />} />
      <Route path="/*"  element={<ErrorPage />} />

      <Route  element={<ProtectedRoutes />}>
      <Route path="/user"  element={<User />} />
      <Route path="/rental_property_details"  element={<RentalPropertyDetails />} />
      <Route path="/user_rental_property_list"  element={<UserRentalPropertyList />} />
      <Route path="/edit_rental_property_details"  element={<EditRentalPropertyDetails />} />
      </Route>
    </Routes>
  <Footer/>
  </Router>
  </>
 )
 }