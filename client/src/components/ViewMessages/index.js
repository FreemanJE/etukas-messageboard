import { useEffect, useState } from "react";
import axios from "../utility/axiosInstance";
// import "./userStyle.css";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);

  // methods
  const viewAllMessages = async () => {
    try {
      const res = await axios.get("/api/message");

      setMessages(res.data.messages);
      console.log(res.data.messages);
    } catch (error) {
      console.error("An error happened", error);
    }
  };
  useEffect(() => {
    viewAllMessages();
  }, []);

  return (
    <div className="userPage">
      <h2>All Messages from Users📜 </h2>

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
