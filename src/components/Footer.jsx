import React from "react";
import "./css/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__row row">
                    <div className="col-sm-3 about-div">
                        <h4 className="title">ACS</h4>
                        <p>
                            Anonymous Complaint System, pull is always the right
                            approach but one exception could be when you are
                            trying to convert.
                        </p>
                    </div>

                    <div className="col-sm-3 payment-div">
                        <h4 className="title">Integrated with</h4>
                        <ul className="payment">
                            <li>
                                <a href="https://metamask.io/" target="_blank">
                                    <div className="footer__buy_with_meta_mask">
                                        <img
                                            src="https://raw.githubusercontent.com/harshpatel63/Decentralized-Rating-System/master/src/assets/Metamask-logo.jpg"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="row text-center"> © 2022. Meta Health</div>
            </div>
        </footer>
    );
}

export default Footer;
