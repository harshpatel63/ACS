import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const navlinks = [
        { name: "Home", url: "/home" },
        { name: "Register Complaint", url: "/form" },
        { name: "Complaint Status", url: "/status" },
        { name: "About", url: "/about" },
    ];
    return (
        <div>
            <header>
                <div className="px-3 py-2 text-bg-dark">
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
                </div>
            </header>
        </div>
    );
}

export default Header;
