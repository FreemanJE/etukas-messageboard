import { useEffect, useState } from "react";
import axios from "../utility/axiosInstance";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Profile() {
   //state
  const [profileInfo, setProfileInfo] = useState(null);

  //methods
  const getProfileInfo = async () => {
    try {
      const res = await axios.get("/user/profile");

      setProfileInfo(res.data.profile);
    } catch (error) {
      console.error("An error happened", error);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  //ui elements
  return (
    <div className="home-container">
      <div>
        <h4>You are welcome</h4>
      </div>

      {profileInfo != null ? (
        <>
          <motion.div
            layout
            animate={{ opacity: 5 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 110 }}
          >
            <AnimatePresence>
              <div className="profile-motion">
                <h1>
                  {profileInfo.firstname} {profileInfo.lastname}
                </h1>
                <h3>username: {profileInfo.username}</h3>
                <h3>user id: {profileInfo._id}</h3>

                <a href="https://robohash.org">
                  {" "}
                  click me
                  <img src={profileInfo.avatar} alt="" />
                </a>
                <Link
                  className="btn btn-outline-dark me-md-2 m-2 "
                  to="/createMessage"
                >
                  Create Message
                </Link>
              </div>
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <div>
          <p>No user Profile found</p>
          <p>Please login in 👨‍🏫 </p>
        </div>
      )}
    </div>
  );
}
