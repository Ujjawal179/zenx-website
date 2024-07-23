import './App.css';
import OffcanvasExample from './components/Navbar/Navbar';
import ControlledCarousel from './components/Carousel/Carousel';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div>
    <OffcanvasExample/>
    <ControlledCarousel/>
    <Login/>
    <Signup/>
    </div>
  );
}

export default App;
