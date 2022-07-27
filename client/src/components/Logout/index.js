import { useEffect } from "react";
import axios from "../utility/axiosInstance";

export default function Logout() {
  const logout = async () => {
    await axios.get("/user/logout");
    alert("You are logged out");
  };

  useEffect(() => {
    logout();
  }, []);

  return <div className="home-container">
   <h2> Logout</h2>
    </div>;
}
