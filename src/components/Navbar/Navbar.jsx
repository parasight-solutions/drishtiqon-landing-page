import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '/logo-icons/drishtiqon-logo.png'
import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
    { name: "Solutions", to: "/" },
    { name: "Partners", to: "/partners" },
    // { name: "Modules", to: "/modules" },
    // { name: "Industries", to: "/industries" },
    { name: "Pricing", to: "/pricing" },
    // { name: "Resources", to: "/resources" },
    // { name: "Contact", to: "/contact" },
    { name: "About Us", to: "/aboutus" },
]


export const Navbar = () => {
    const navAnimation = () => {
        window.addEventListener("scroll", function () {
            const navbar = document.querySelector(".navbar");

            if (window.scrollY > 200) {
                navbar.classList.add("fixed-nav");
            } else {
                navbar.classList.remove("fixed-nav");

            }
        })
    };

    useEffect(() => {
        navAnimation()
    }, [])

    return (


        <nav className="navbar navbar-expand-lg " data-aos="fade-down">
            <div className="container-fluid px-lg-5">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="drishtiqon logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 gap-1 mb-lg-0">
                        {NAV_ITEMS.map((item, idx) =>
                            <li className="nav-item">
                                <NavLink to={item?.to} className={({ isActive }) => `nav-link
                                ${isActive && "active"}`}>{item?.name}</NavLink>
                            </li>
                        )}

                    </ul>
                    <Link
                        to="/book-a-demo"
                        className="common-btn"
                    >
                        <p>Book A Demo</p>
                    </Link>

                </div>
            </div>
        </nav>

    )
}

export default Navbar


