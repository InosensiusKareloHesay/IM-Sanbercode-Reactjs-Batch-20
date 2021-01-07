import React from 'react';
import './App.css';
import { UserProvider } from './Context/UserContext';
import Routes from './Layout/Routes'
import 'antd/dist/antd.css'

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
