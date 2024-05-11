import React from 'react';
import './app.css';
import Home from './components/Home';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <div style={{margin: "auto", textAlign: "center"}}>
        <Header/>
        <Outlet/>
      </div>
      <Footer  style={{marginTop: "50%"}}/>
      </>
  );
}

export default App;