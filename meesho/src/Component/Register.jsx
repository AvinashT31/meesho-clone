import React, { useState } from 'react'
import '../Css/Register.css'
import { json, useNavigate } from 'react-router-dom';

const Register = () => {

  const [registerData, setregisterData] = useState({ Name: "", Email: "", Number: "", Password: "" });
  console.log(registerData, "registerData");

  const route = useNavigate();

  const register = (e) => {
    e.preventDefault();

    var DataBase = JSON.parse(localStorage.getItem("MeeshoDB")) || [];
    console.log(DataBase, "DataBase");

    var flag = false;

    for (var i = 0; i < DataBase.length; i++) {
      if (DataBase[i].Email === registerData.Email){
        flag = true;
      }
    }
    if (flag) {
      alert("Email is already present");
      setregisterData({ Email: "" })
    }
    else if (registerData.Number.length < 10) {
      alert("Number is only 10 digits");
      setregisterData({ Number: "" })
    }
    else if (registerData.Password.length < 8) {
      alert("Password should be 8 digits");
      setregisterData({ Password: "" })
    }
    else {
      DataBase.push(registerData);
      localStorage.setItem("MeeshoDB", JSON.stringify(DataBase));
      setregisterData({ Name: "", Email: "", Number: "", Password: "" });
      alert("Registration Done");
      route("/login");
    }
  }

  const handlesearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    var name = e.target.name;
    var value = e.target.value;
    setregisterData({ ...registerData, [name]: value })
  }
  return (
    <main className='register-fullpage'>
      <div className='register-page'>
        <div className='register-img'>
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
        </div>
        <form onSubmit={(e) => register(e)}>
          <label>Enter Your Name</label>
          <br />
          <input onChange={(e) => handlesearch(e)} type="text" value={registerData.Name} name='Name' />
          <br />
          <label>Enter Your Email</label>
          <br />
          <input onChange={(e) => handlesearch(e)} type="email" value={registerData.Email} name='Email' />
          <br />
          <label>Enter Your Number</label>
          <br />
          <input onChange={(e) => handlesearch(e)} type="number" value={registerData.Number} name="Number" />
          <br />
          <label>Enter Your Password</label>
          <br />
          <input onChange={(e) => handlesearch(e)} type="text" value={registerData.Password} name='Password' />
          <br />
          <input className='btn' type="submit" value="Register" />
          <p className='btn-1'>Already have an account?<a href="login"><span style={{ fontWeight: "550", }}> Login</span></a></p>
        </form>
      </div>
    </main>
  )
}

export default Register
