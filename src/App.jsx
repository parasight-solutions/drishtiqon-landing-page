import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Clients from './components/Clients/Clients'
import WhyChooseUs from './components/WhyChoose/Why'
import Analytics from './components/Analytics/Analytics'
import Solutions from './components/Solutions/Solutions'
import Need from './components/Need/Need'
import Footer from './components/Footer/Footer'
import Module from './components/Module/Module'
import Plans from './components/Plans/Plans'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
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