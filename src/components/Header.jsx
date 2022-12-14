import React, { useEffect } from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import web3 from "../web3";
import { complaintAbi, complaintAddress } from "../complaint";

function Header() {
    let [isvisible, setisvisible] = useState(false);
    const navlinks = [
        { name: "Home", url: "/", class: "home" },
        { name: "Register Complaint", url: "/form", class: "form" },
        { name: "Complaint Status", url: "/status", class: "status" },
        { name: "About", url: "/about", class: "about" },
    ];

    /* ------------------------------- Just blockchain things ------------------------------- */
    useEffect(() => {
        loadBlockchainData();
    }, []);

    async function loadBlockchainData() {
        let accounts;
        try {
            accounts = await web3.eth.getAccounts();
        } catch (err) {
            // this.state.ismetamaskavailable = false;
            console.log("please install metamask");
            return;
        }

        window.MetaMaskAccount = accounts[0];
        window.complaintContract = new web3.eth.Contract(
            complaintAbi,
            complaintAddress
        );
        console.log(window.MetaMaskAccount);
        console.log(window.complaintContract.methods);
    }
    /*---------------------------------------------------------------------------------------*/

    return (
        <>
            <div className="header header-wrapper">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={logo}
                                alt="ACS Logo"
                                className="header__brand__img"
                            />
                            ACS
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setisvisible(!isvisible)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={
                                (isvisible ? "" : "collapse") +
                                " navbar-collapse"
                            }
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="navbar-nav nav_links">
                                {navlinks.map((ele) => (
                                    <li
                                        key={ele.name}
                                        className="nav-item"
                                        onClick={auto_closenavbar_on_mobile}
                                    >
                                        <Link className="nav-link" to={ele.url}>
                                            {ele.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="dummy-head"></div>
        </>
    );
    /*
     * For auto closing navbar on click
     */
    function auto_closenavbar_on_mobile() {
        setisvisible(false);
    }
}

export default Header;
