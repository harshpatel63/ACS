import React from "react";
import "./css/About.css";

function About() {
    return (
        <div>
            <div className="parent_home_container">
                <div className="section home" id="home">
                    <div className="home-items">
                        <h1>Anonymous Complaint System</h1>
                        <h2>
                            File your complaint without disclosing your
                            identity.
                        </h2>
                        <h2>Your Security Is Our Responsibility !</h2>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="home_info">                
                <h3>Problem Statement :</h3>
                <ul>
                    <li>
                    Often people are afraid to complain to the police about crimes such as illegal mining , drugs, or other crimes. They fear their names begin released and they becoming a target.
                    </li>
                    <li>
                    This is a major concern and efforts to keep the identity of the complainant hidden is important. Also change in statements and hacking of databases where the statement is stored is also a major concern and can effect the process of judiciary.
                    </li>                    
                </ul>
                <h3>Our Solution :</h3>
                <ul>
                    <li>
                    The core element of our proposed solution is Blockchain Technology. A Blockchain network is a decentralized, distributed ledger that has rigorous cryptographic concepts, consensus mechanisms that makes it reliable, trustworthy and impossible to hack. Anything written in blockchain can’t be removed unless done legally. This ensures that our system doesn't have a single point of failure. Also the users in the blockchain are kept completely anonymous.
                    </li>
                    <li>
                    In a blockchain network each user is identified by a hexadecimal public address which is in no way related with the users identity, unless its mapped explicitly. A user in a blockchain network looks like : 0x0dd86ea683F5E141944A42c2EfEc9E3D9f2cCE31 ( hexadecimal public address )
                    </li>
                    <li>
                    The solution also helps to minimize false claims and has trained ML models which predict the rate of crime in that location. Using this prediction, cops can prioritize their action and also can take preemptive steps to bring down crime.
                    </li>
                </ul>
            </div>
            <div className="developers">
                <h1 className="title">Team - Finite Automata</h1>
                <hr />
                <div className="about_parent_container">
                    <div className="myself">
                        <h1>HARSH PATEL</h1>
                        <hr className="dots" />
                        <div className="about_member">
                            <p>
                                4th Year
                                <br />
                                Computer Science Engineering
                                <br />
                                National Institute of Technology Goa
                            </p>
                        </div>
                    </div>
                    <div className="myself">
                        <h1>ROSHAN KUMAR</h1>
                        <hr className="dots" />
                        <div className="about_member">
                            <p>
                                4th Year
                                <br />
                                Computer Science Engineering
                                <br />
                                National Institute of Technology Goa
                            </p>
                        </div>
                    </div>
                    <div className="myself">
                        <h1>BIPIN JADAV</h1>
                        <hr className="dots" />
                        <div className="about_member">
                            <p>
                                4th Year
                                <br />
                                Electrical and Electronics Engineering
                                <br />
                                National Institute of Technology Goa
                            </p>
                        </div>
                    </div>
                    <div className="myself">
                        <h1>ABHINAV UPADHYAY</h1>
                        <hr className="dots" />
                        <div className="about_member">
                            <p>
                                4th Year
                                <br />
                                Mechanical Engineering
                                <br />
                                National Institute of Technology Goa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
