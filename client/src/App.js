import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import UsersList from "./components/UsersList";
import ViewMessages from "./components/ViewMessages";
import UserMessages from "./components/UserMessages";
import CreateMessage from "./components/CreateMessage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="container-bg" >
        <BrowserRouter>
          <Navbar />

          <div className="info-bg">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/list" element={<UsersList />} />
              <Route path="/createMessage" element={<CreateMessage/>} />
              <Route path="/viewMessages" element={<ViewMessages/>} />
              <Route path="/userMessage" element={<UserMessages/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />              
            </Routes>
          </div>
         
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
