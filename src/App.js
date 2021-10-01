import React from 'react';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Header from "./Comp/Header";
import About from "./Comp/About"
import Index from "./Comp/Index";
import Customer from "./Comp/Customer";
import Works from "./Comp/Works";
import Caro from "./Comp/Caro";
import Phone from "./Comp/Phone";
import Footer from "./Comp/Footer";

function App() {
  return (
    <div className="App">
      
      <div className="container">
      <Header/>
      <About />

      <Index />
      <Customer/>
      <Works/>
      <Caro/>
      <Phone/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
