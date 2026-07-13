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

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from "./pages/Contact";
import HomePage from './pages/HomePage'
import MSME_Pack from './pages/MSME_Pack'
import DMS from './pages/DMS'
import BES from './pages/BES'
import Pricing from './pages/Pricing'


function HomeWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

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


        <Routes>
          <Route path="/" element={<HomeWrapper />} >
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="msme-pack" element={<MSME_Pack />} />
            <Route path="dms" element={<DMS />} />
            <Route path="bes" element={<BES />} />
          </Route>

        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;