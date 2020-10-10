import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import "./Components/Header/Header.scss";
import "./Components/Body/Body.scss";
import "./Components/Article/Article.scss";
import "./Components/Profile/Profile.scss";
import "./Components/Footer/Footer.scss";

function App() {
  return (
    <>  
    <div className='mainContainer'>
        <Header />
  
        <Body />
    
        <Footer/>
        
        </div>
    </>
  );
}

export default App;
