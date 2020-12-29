import {BrowserRouter as Router} from "react-router-dom";
import {NavbarProvider} from "./Tugas-15/navbarContext"
import Routes from './Tugas-15/routes';
import Nav from './Tugas-15/nav'
import './App.css';

function App() {
  return (
    <Router>
      <NavbarProvider>
        <Nav />
      </NavbarProvider>
      <Routes />
    </Router>   
    );
  }

export default App;
