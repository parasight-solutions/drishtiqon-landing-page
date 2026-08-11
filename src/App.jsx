import { useEffect } from 'react';
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import BookADemoPage from './pages/BookADemoPage';
import Pricing from './pages/Pricing';
import MSME_Pack from './pages/MSME_Pack';
import DMS from './pages/DMS';
import BES from './pages/BES';

function HomeWrapper() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

/**
 * Local:
 * http://localhost/eureka_one
 * basename = /eureka_one
 *
 * Sandbox/live root:
 * https://sandbox.drishtiqon.co.in
 * basename = /
 */
function getRouterBasename() {
    const path = window.location.pathname;

    if (path === '/eureka_one' || path.startsWith('/eureka_one/')) {
        return '/eureka_one';
    }

    return '/';
}

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 300,
        });
    }, []);

    return (
        <BrowserRouter basename={getRouterBasename()}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomeWrapper />}>
                    <Route index element={<HomePage />} />

                    <Route path="contact" element={<Contact />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="pricing" element={<Pricing />} />

                    <Route path="msme-pack" element={<MSME_Pack />} />
                    <Route path="dms" element={<DMS />} />
                    <Route path="bes" element={<BES />} />
                    <Route path="/book-a-demo" element={<BookADemoPage />} />

                    {/*
                     * These links currently exist in Navbar but dedicated
                     * pages do not exist yet. Display HomePage instead of
                     * showing a blank screen.
                     */}
                    <Route path="modules" element={<HomePage />} />
                    <Route path="industries" element={<HomePage />} />
                    <Route path="resources" element={<HomePage />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;