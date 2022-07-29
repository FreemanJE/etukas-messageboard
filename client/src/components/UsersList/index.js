import { useEffect, useState } from "react";
import axios from "../utility/axiosInstance";
import './style.css'


export default function UsersList() {

    const [userList, setUserList] = useState(null);

    // methods
    const getUsersList = async () => {
        try {
            const res = await axios.get("/user/list");

            setUserList(res.data)
            console.log(res.data)
        } catch (error) {
            console.error("An error happened", error);
        }
    }
    useEffect(() => {
        getUsersList();
      }, []);


  return (
    <div className="userPage" >
        <h2>Users List</h2>
        <div className='userContainer'>
            
            {userList && userList.map((user, index) =>{
            const { dates, username, firstname, lastname, _id, avatar } = user
            return (
                <div key={index} className='eachUser' >
                    <h3>User Info</h3>
                    <p>➡ <b>Name: </b> {firstname} {lastname} </p>  
                    <p>🦏 <b>Username: </b>{username}  </p>
                    <p> <b>User Id: </b>{_id}  </p>   
                    <p> Date Created: {dates.registered}</p> 
                    <img src={avatar} alt='avatar'></img>                  

                    {/* <button onClick={}>Show Messages</button> */}
                 
                </div>
            )
        })}
        </div>        
    </div>
  )
}
