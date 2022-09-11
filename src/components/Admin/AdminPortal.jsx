import React from "react";
import "./AdminPortal.css"

function AdminPortal() {
    return <div className="section-full">
            <div className="container-center section work" id="work">  
                <h1>ADMIN PORTAL</h1>         
                <hr />
                <div className="scorecard-outer-box">
                    <span className="score-box">
                    <div className='score-title'>Complaints Filed</div>
                    <div className="score">278</div>
                    </span>
                    <span className="score-box">
                    <div className='score-title'>Complaints Resolved</div>
                    <div className="score">78</div>
                    </span>
                    <span className="score-box">
                    <div className='score-title'>Pending Cases</div>
                    <div className="score">200</div>
                    </span>
                    <span className="score-box">
                    <div className='score-title'>Hostspot Regions</div>
                    <div className="score">12</div>
                    </span>
                </div>

                <div class="cards">
                    <div class="work-card">
                        <h1>Complaint Title</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sed maxime! Voluptatem magni quod odit, unde nemo at nihil voluptate, reiciendis temporibus quis dignissimos a suscipit. Perspiciatis, mollitia molestias.
                        </p>
                        <div class="card-buttons">
                            <a
                                href=""
                                target="_blank"
                                >View</a>
                                <a
                                href=""
                                target="_blank"
                                >Verify</a>
                                <a
                                href=""
                                target="_blank"
                                >Solved</a>
                        </div>
                    </div>       
                    <div class="work-card">
                        <h1>Complaint Title</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sed maxime! Voluptatem magni quod odit, unde nemo at nihil voluptate, reiciendis temporibus quis dignissimos a suscipit. Perspiciatis, mollitia molestias.
                        </p>
                        <div class="card-buttons">
                            <a
                                href=""
                                target="_blank"
                                >View</a>
                                <a
                                href=""
                                target="_blank"
                                >Verify</a>
                                <a
                                href=""
                                target="_blank"
                                >Solved</a>
                        </div>
                    </div>       
                    <div class="work-card">
                        <h1>Complaint Title</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sed maxime! Voluptatem magni quod odit, unde nemo at nihil voluptate, reiciendis temporibus quis dignissimos a suscipit. Perspiciatis, mollitia molestias.
                        </p>
                        <div class="card-buttons">
                            <a
                                href=""
                                target="_blank"
                                >View</a>
                                <a
                                href=""
                                target="_blank"
                                >Verify</a>
                                <a
                                href=""
                                target="_blank"
                                >Solved</a>
                        </div>
                    </div>                                    
                </div>               
                <h1><a href="./work.html" target="_blank">Check More</a></h1>                
            </div>
        
        </div>;
}

export default AdminPortal;
