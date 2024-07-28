import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Trainers from "./pages/Trainers/Trainers";
import Gym from "./pages/Gym/Gym";
import User from "./pages/User/User";
import NavbarOffcanvas from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
  import { createTheme } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#cd2e35",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <div>
      <NavbarOffcanvas />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
