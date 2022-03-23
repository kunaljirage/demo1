import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./hooks/userContext";

const Header = () => {
   const { user, setUser } = useUserContext();
  const handleClickLogout = () => {
    setUser('')
    let date = new Date();
    date.setTime(date.getTime() + (10));
    const expires = "expires=" + date.toUTCString();
    document.cookie = 'token' +'=; Path=/;'+ expires + ';'
  };
  const openProfile = () => {
    document.getElementById('profile').classList.add('d-flex')
  }
  const closeProfile = () =>{
    document.getElementById('profile').classList.remove('d-flex')
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home Rental
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {user ? (
                <>
                <li className="nav-item">
                  {" "}
                  <Link
                    className="nav-item nav-link"
                    to="/rental_property_details"
                  >
                    Rent Property
                  </Link>
                </li>
                <li className="nav-item">
                {" "}
                <Link
                  className="nav-item nav-link"
                  to="/user_rental_property_list"
                >
                  See Your Ads List
                </Link>
              </li>
              </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Signin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {user && (
            <div className="navbar-nav  justify-content-end">
              <div className="nav-item">
                <li className="nav-link" onClick={()=> openProfile()} style={{cursor:'pointer'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-fill me-1"
                    viewBox="0 0 16 16"

                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Profile
                </li>
              </div>
            </div>
          )}
        </div>
      </nav>
      {user && (
      <div className="container-fluid  justify-content-end" id="profile"   style={{position:'fixed',display:"none",marginTop:"-11px"}}>
         <div className="card p-2">
          <div className="d-flex justify-content-end"><span onClick={() => closeProfile()} style={{padding:'5px',fontSize:'20px',fontWeight:'lighter',color:'#d1cdcd',cursor:'pointer'}} >X</span></div>
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <span >{user.name}</span>{" "}
            <span >{user.email}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              {" "}
              <span className="idd1">Mobile No- {user.mobile_number}</span>{" "}
              <span>
                <i className="fa fa-copy"></i>
              </span>{" "}
            </div>
            <div className=" d-flex mt-2">
            <button className="btn1 btn-light"   onClick={() => handleClickLogout()}>Logout</button>
            </div>
            <div className=" d-flex mb-3 mt-2">
             <button className="btn1 btn-dark">Edit Profile</button>
            </div>
          </div>
        </div>

        </div>
         )}

    </header>
  );
};
export default Header;
