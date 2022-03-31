import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [data,setData] = useState({name:'',email:'',mobile_number:'',user_type:'Owner',password:''});
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
              <h4>Sign-up</h4>
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

              <div className="row  mb-3" >
                <div className="row ms-2">
                <label className="form-check-label p-1">Type :</label>
                </div>
                  <div className="row m-2">
                  <div className="col-md-6 col-xxl-6 col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="user_type"
                    value="owner"
                    id="owner"
                    onChange={(e) => handleChange(e)}
                    checked={ data.user_type=== "owner"?true:false }
                  />
                  <label className="form-check-label" htmlFor="owner">
                    Owner
                  </label>
                    </div>
                  <div className="col-md-6 col-xxl-6 col-12 form-check">
                  <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="user_type"
                    value="agent"
                    id="agent"
                    onChange={(e) => handleChange(e)}
                    checked={data.user_type=== "agent"?true:false }
                  />
                  </div>
                  <div>
                  <label className="form-check-label" htmlFor="agent">
                  Agent
                  </label>
                  </div>
                 </div>
                </div>

                </div>
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
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
