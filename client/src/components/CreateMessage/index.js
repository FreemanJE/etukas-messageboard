import axios from "../utility/axiosInstance";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateMessage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      user_id: formData.get("user_id"),
      content: formData.get("content"),
      category: formData.get("category"),
    };
    alert(`Message details entered`);

    try {
      const response = await axios.post("/api/message", data);
      console.log("response ", response);
      event.target.reset();
      alert("New Message created");
      navigate("/viewMessages");

    } catch (error) {
        console.log(error);
       alert('Message failure. \n Wrong format')
    }
  };

  return (
    <div className="home-container">
      <h1>Create your new message</h1>
      <form onSubmit={handleSubmit}>
      <label>
          user_id
          <input
            type="id"
            autoComplete="user_id"
            name="user_id"
            required={true}
          />
        </label>
        <label>
          Content
          <textarea                      
            autoComplete="content"
            name="content"
            required={true}
          />          
        </label>
        <label>
          Category
          <input
            type="text"
            autoComplete="category"
            name="category"
            required={true}
          />
        </label>
        <button className="btn btn-primary " type="submit" >Create</button>
      </form>
    </div>
  );
}
