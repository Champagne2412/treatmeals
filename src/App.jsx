import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/HeroSection/Hero";
import Title from "./Components/Title/Title";
import Details from "./Components/Details/Details";
import Menu from "./Components/Menu/Menu";
import Services from "./Components/Services/Services";
import Brand from "./Components/BrandName/Brand";
import Customers from "./Components/Customers/Customers";
import Download from "./Components/AppDownload/Download";
import Footer from "./Components/Footer/Footer.jsx";
import Design from "./Components/Footer/Design/Design.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="containerrr">
        <Nav />
        <Hero />
        <Details />
        <Menu />
        <Services />
        <div style={{position:"relative"}}>
          <Brand />
          <div className="for-hero"><Design/></div>
        </div>
        <Customers />
      </div>
      <Download />
      <Footer/>
    </>
  );
}

export default App;
