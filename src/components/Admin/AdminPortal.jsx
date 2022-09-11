import React, { useEffect } from "react";
import "./AdminPortal.css";

function AdminPortal() {
    let complaintList = [
        {
            title: "Complaint Title",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum sed maxime! Voluptatem magni quod odit, unde nemo at nihil voluptate, reiciendistemporibus quis dignissimos a suscipit. Perspiciatis, mollitia molestias.",
        },
    ];
    async function fetchComplaints() {
        try {
            let x = await window.complaintContract.methods
                .getComplaintsList()
                .call();
            console.log(x);
        } catch (e) {
            alert(e.message + " Please Try again..");
            return;
        }

        /* Map*/
    }

    useEffect(() => {
        setTimeout(() => {
            fetchComplaints();
        }, 2000);
    }, []);
    return (
        <div className="section-full">
            <div className="container-center section work" id="work">
                <h1>ADMIN PORTAL</h1>
                <hr />
                <div className="scorecard-outer-box">
                    <span className="score-box">
                        <div className="score-title">Complaints Filed</div>
                        <div className="score">278</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Complaints Resolved</div>
                        <div className="score">78</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Pending Cases</div>
                        <div className="score">200</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Hostspot Regions</div>
                        <div className="score">12</div>
                    </span>
                </div>

                <div class="cards">
                    {complaintList.map((each) => (
                        <div class="work-card">
                            <h1>{each.title}</h1>
                            <p>{each.description}</p>
                            <div class="card-buttons">
                                <button
                                    className="btn btn-primary"
                                    href=""
                                    target="_blank"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <h1>
                    <a href="./work.html" target="_blank">
                        Check More
                    </a>
                </h1>
            </div>
        </div>
    );
}

export default AdminPortal;
