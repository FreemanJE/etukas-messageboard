import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utility/axiosInstance";
import "./style.css";

export default function Register() {

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"), //name="email" see <input></input>
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      password: formData.get("password"),
    };
    alert(`You have entered the user details`);
    try {
      const response = await axios.post("/user/register", data);
      console.log("response ", response);
      event.target.reset();
      alert('Your registration was successful')
      navigate('/login');


    } catch (error) {
      console.log(error);
      alert('Registration failure. \n username exist already')
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User name
          <span><input
            type="text"
            autoComplete="username"
            name="username"
            required={true}
          /></span>
          {/* {user.errors.name && <p>{user.errors.name}</p>} */}
        </label>
        <label>
          First name
          <span><input
            type="text"
            autoComplete="firstname"
            name="firstname"
            required={true}
          /></span>
        </label>
        <label>
          Last name
          <span><input
            type="text"
            autoComplete="lastname"
            name="lastname"
            required={true}
          /></span>
        </label>
        <label>
          Password
          <span><input
            type="password"
            autoComplete="new-password"
            name="password"
            required={true}
          /></span>
        </label>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
