import axios from "../utility/axiosInstance";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"), 
      password: formData.get("password")
    };

    try {
      const response = await axios.post("/user/login", data);
      console.log("response ", response);
      event.target.reset()     
      alert('Login was successful')
      navigate('/profile')


    } catch (error) {}
  };

  return (
    <div className="home-container"> 
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" className="form-control" autoComplete="username" name="username" required={true} />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            required={true}
          />
        </label>
        <button className="btn btn-primary "  >Login</button>
      </form>
    </div>
  );
}
