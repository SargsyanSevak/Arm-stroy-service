import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import Background from "./components/Background/Background";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import FeedBack from "./components/FeedBack/FeedBack";
import CallMe from "./components/CallMe/CallMe";

function App() {
  // const [scrollTop, setScrollTop] = useState(0);
  // const handleScroll = () => {
  //   setScrollTop(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  window.addEventListener("scroll", function() {
    let header = document.querySelector(".headerContainer");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
  return (
    <div className="App" >
      <Background />
      <Services />
      <AboutUs />
      <Projects />
      <FeedBack />
      <Payment />
      <Contacts />
      <Footer />
      <CallMe />
    </div>
  );
}

export default App;
