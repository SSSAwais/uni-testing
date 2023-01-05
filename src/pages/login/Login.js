import React, { Component, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import { Link ,useNavigate} from "react-router-dom";

import "./Login.css";
const Login = () => {
  
  function adminList(){
      let items =JSON.parse (localStorage.getItem('admin'));
      if (items) {
         return JSON.parse (localStorage.getItem('admin'));
         }
         else{
          return []
         }
  }

  const [admin, setAdmin] = useState(adminList());
  const [userName,setUserName]=useState("");
  const [passcode,setPassCode]=useState('');

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(admin));
  }, [admin]);

  const handleLogin = (e) => {
    e.preventDefault();
    // navigate('/dashboard');
    const newAdmin=[
        ...admin,{
            userName,
            passcode

        }
        
    ]
    setAdmin(newAdmin);
    console.log(newAdmin)
    // navigate('/dashboard');
  };

  return (
    <>
      <section onSubmit={handleLogin}>
        <form>
          <div className="login">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="login_section">
                    <h2 >Login</h2>
                    <Input
                      type="email"
                      placeholder="Enter The Email"
                      className="form-control inputss"
                      value={userName}
                      onChange={(e)=>setUserName(e.target.value)}
                    />
                    
                    <Input
                      type="password"
                      placeholder="Enter The password"
                      className="form-control inputss"
                      value={passcode}
                      onChange={(e)=>setPassCode(e.target.value)}

                    />
                    <button className="login_button">Login</button>
                    <div className="forget_password">
                      <Link to="#">Forget Password?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
