import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-around
p-4 px-md-4 mb-3 bg-primary border-bottom shadow-lg"
      >
        <h2 className="my-0 mr-md-auto text-white font-weight-normal">
          Etukas Message Board
        </h2>
        <nav className="my-2 my-md-0 me-md-3">
          <Link className="p-2 text-white" to="/">
            Homepage
          </Link>
          <Link className="p-2 text-white" to="/register">
            Register
          </Link>
          <Link className="p-2 text-white" to="/list">
            Users List
          </Link>
          <Link className="p-2 text-white" to="/login">
            Create Message
          </Link>
          <Link className="p-2 text-white" to="/viewMessages">
            View Messages
          </Link>
          {/* <Link  className="p-3 text-white" to="/userMessage">User Messages</Link> */}
          <Link className="p-2 text-white" to="/profile">
            Profile
          </Link>
          <Link className="btn btn-outline-dark text-white me-md-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-warning" to="/logout">
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
}
