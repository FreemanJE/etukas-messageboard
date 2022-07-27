import { useEffect, useState } from "react";
import axios from "../utility/axiosInstance";
// import "./userStyle.css";

export default function UserMessages(user_id) {
  const [userId, setUserId] = useState("")
  const [messages, setMessages] = useState([]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const data = { user_id: formData.get("user_id")}
  // }

  // methods
  

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const data = { user_id: formData.get("user_id")}    


    try {
      const res = await axios.get(`/api/message/view/user?user_id=${user_id}`);
      
      // (user_id ) ? 
      setMessages(res.data.messages) 
      console.log(res.data.messages) 
      
      // console.log("No messages")

    } catch (error) {
      console.error("An error happened", error);
    }
  
  };
  // useEffect(() => {
  //   viewAllMessages();
  // }, []);

  return (
    <div className="userPage">
      <h2>All Messages from Users📜 </h2>
      <h2> Still Forming</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Enter user Id
          <input type="text" className="form-control" autoComplete="username" name="username" required={true} />
        </label>        
        
        <button className="btn btn-primary "  >Login</button>
      </form>

      <div className='userContainer'>
      {messages &&
        messages.map((message, index) => {
          const { user_id, content, dates, category,  } = message;

          return (
            <div key={index} className="eachUser eachMessage">
              <p><b>user Id: </b>{user_id} </p>              
              <p><b>Date Created: </b>{dates.created} </p>
              <h4> <b>Content: </b> {content} </h4>
              <p><b>Category: </b> {category} </p>
              
            </div>
          );
        })}
        </div> 
    </div>
  );
}
