import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Trainers from './pages/Trainers/Trainers';
import Gym from './pages/Gym/Gym';
import NavbarOffcanvas from './components/Navbar/Navbar'; 

function App() {
  return (
    <div>
    <NavbarOffcanvas/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;