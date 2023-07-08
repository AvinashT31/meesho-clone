import React, { useState } from 'react'
import '../Css/Login.css'
import { Route, useNavigate } from 'react-router-dom';

const Login = () => {

  const[loginData, setloginData] = useState({Email:"", Password: ""})
  console.log(loginData, "loginData");

  const route = useNavigate()

  const login = (e) => {
    e.preventDefault();
    
    var DataBase = JSON.parse(localStorage.getItem("MeeshoDB"));
    console.log(DataBase, "DataBase");

    var flag = false;
    var cuser;

    for(var i=0; i<DataBase.length; i++){
      if(DataBase[i].Email === loginData.Email && DataBase[i].Password === loginData.Password){
        flag = true;
        cuser = DataBase[i]
      }
    }
    if(flag){
      localStorage.setItem("currentuser", JSON.stringify(cuser));
      setloginData({Email:"", Password: ""});
      alert("Login Success");
      route('/');
    }
    else{
      alert("Incorrect Email or Password please check!")
      setloginData({Email:"", Password: ""});
    }
  }

  const handleclick = (e) => {
      var name = e.target.name;
      var value = e.target.value;
      setloginData({...loginData, [name]: value})
  }


  return (
    <main className='register-fullpage'>
      <div className='register-page'>
        <div className='register-img'>
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
        </div>
        <form onSubmit={(e) => login(e)}>
          <label>Enter Your Email</label>
          <br />
          <input onChange={(e) => handleclick(e)} name='Email' value={loginData.Email} type="text" />
          <br />
          <label>Enter Your Password</label>
          <br />
          <input onChange={(e) => handleclick(e)} name='Password' value={loginData.Password} type="text" />
          <br />
          <input className='btn' type="submit" value="Login" />
          <p className='btn-1'>Don't have an account?<a href="register"><span style={{fontWeight:"550"}}> Create Your Account</span></a></p>
        </form>

      </div>

    </main>
  )
}

export default Login
