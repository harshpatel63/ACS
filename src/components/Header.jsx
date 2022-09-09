import React from "react";
// import { Link } from "react-router-dom";
import "./css/Header.css"

function Header() {
    const navlinks = [
        { name: "Home", url: "/home", class: "home"},
        { name: "Register Complaint", url: "/form", class: "form"},
        { name: "Complaint Status", url: "/status", class: "status"},
        { name: "About", url: "/about", class: "about"},
    ];
    return (
        <div>
            <header>
                <nav>            
                    <div class="nav-links">
                        <a class="active home" href="#home">Home</a>
                        <a class="about" href="#about">About</a>
                        <a class="experience" href="#experience">Experience</a>
                        <a class="skills" href="#skills">Skills</a>
                        <a class="work" href="#work">Work</a>
                        <a class="connect" href="#connect">Connect</a>
                    </div>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </nav>
                {/* <div className="px-3 py-2 text-bg-dark">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a
                                href="/"
                                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
                            >
                                ACS
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                {navlinks.map((eachlink) => (
                                    <li>
                                        <Link
                                            to={eachlink.url}
                                            className="nav-link text-white"
                                        >
                                            {eachlink.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> */}
            </header>
        </div>
    );
}

export default Header;
