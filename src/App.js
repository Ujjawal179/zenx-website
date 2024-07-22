import './App.css';
import OffcanvasExample from './components/Navbar/Navbar';
import ControlledCarousel from './components/Carousel/Carousel';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
    <OffcanvasExample/>
    <ControlledCarousel/>
    <Login/>
    </div>
  );
}

export default App;
