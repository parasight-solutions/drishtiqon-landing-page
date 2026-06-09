import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Clients from './components/Clients/Clients'
import WhyChooseUs from './components/whyChoose/why'
import Analytics from './components/Analytics/Analytics'
import Solutions from './components/Solutions/Solutions'
import Need from './components/Need/Need'
import Footer from './components/Footer/Footer'
import Module from './components/Module/Module'
import Plans from './components/Plans/Plans'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation happens only once
      offset: 300,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Clients />
        <Module />
        <WhyChooseUs />
        <Analytics />
        <Solutions />
        {/* <Need /> */}
        <Plans />
        <Footer />

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;