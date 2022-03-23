import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [data,setData] = useState({name:'',email:'',mobile_number:'',password:''});
  const {name,email,mobile_number,password}=data;
  const   navigate = useNavigate();
  const handleChange = (e) =>{
 setData({...data,[e.target.name]:e.target.value})
}


      const handleSubmit = async(event) =>{
         // console.log(data);
          event.preventDefault();
          const response = await fetch("/api/v1/user/create", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user":data })
            });

            response.json().then(data => {

             if(data.message==='successful')
              {
                alert("Signin successful");
                setData({name:'',email:'',mobile:'',password:''})
                navigate("/login");
              }
              else{

             const errors= (data.errors)
            const error= errors[Object.keys(errors)[0]];
                alert(error)

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
              <h4>Sign-In</h4>
              <input
                className="form-control mb-3 mt-3"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={ (e) => handleChange(e)}
                required
              />

              <input
                className="form-control mb-3"
                placeholder="Email"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={ (e) => handleChange(e)}
                required
              />

              <input
                className="form-control mb-3"
                placeholder="Phone Number"
                type="phone"
                id="mobile"
                name="mobile_number"
                value={mobile_number}
                onChange={ (e) => handleChange(e)}
                required
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={ (e) => handleChange(e)}
                required
              />
              <div className="d-flex  justify-content-center">
                <button className="w-100 btn  btn-primary" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
