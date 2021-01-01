import {BrowserRouter as Router} from "react-router-dom";
import {NavbarProvider} from "./Context/NavbarContext"
import Routes from './Include/RoutesProv';
import Nav from './Include/NavbarProv'
import Footer from './Include/Footer'
import './Assets/css/style.css'
import './App.css';

function App() {
  return (
    <Router>
      <NavbarProvider>
        <Nav />
      </NavbarProvider>
      <Routes />
      <Footer />
    </Router>   
    );
  }

export default App;
