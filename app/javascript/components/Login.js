import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getUserData from "./hooks/getUserData";
import { useUserContext } from "./hooks/userContext";

const Login = () => {
  const [data,setData] = useState({email:'',password:''});
 const [getUser] = getUserData();
   const { email, password }=data;
  const handleChange = (e) =>{
 setData({...data,[e.target.name]:e.target.value})
}
const {setUser}=useUserContext();
const navigate = useNavigate();
const location = useLocation();

const setCookie = (cName, cValue) => {
  let date = new Date();
  date.setTime(date.getTime() + (86400000 * 20));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
const from = location.state?.from?.pathname || "/rental_property_details"

      const handleSubmit =async (event) =>{
          event.preventDefault();
          const response = await fetch("/api/v1/auth/login", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data })
            });

            response.json().then(data => {
              if(data.message==='successful')
              {
                setData({user_name:'',password:''});
                setCookie('token', data.token);
                getUser();
                navigate(from,{replace:true})
                }
              else{
                alert("Invalid username or password");
                  }

            });


      }
  return (
    <>
      <main className="container">
        <div
          className="row  w-100 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="col-12 col-md-5 col-xxl-5"
            style={{
              padding: "30px",
              border: "1px solid #ededed ",
              boxShadow: "5px 10px #ededed",
            }}
          >

            <form onSubmit ={(event) => handleSubmit(event)} >
              <h4>Login</h4>
              <input
                className="form-control mb-3"
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={ (e) => handleChange(e)}
                required
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={ (e) => handleChange(e)}
                required
              />
              <div className="d-flex  justify-content-center">
                <button className="w-100 btn  btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
