import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPortal.css";

function AdminPortal() {
    let [complaintList, setcomplaintList] = useState([]);
    async function fetchComplaints() {
        try {
            let x = await window.complaintContract.methods
                .getComplaintsList()
                .call();
            console.log(x);
            setcomplaintList(x);
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

                <div
                    class="cards"
                    style={{
                        width: "100%",
                        display: "flex",
                    }}
                >
                    {complaintList.length === 0 ? (
                        <div
                            className="spinner"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {LoadingSpinner()}
                        </div>
                    ) : (
                        complaintList.map((each) => {
                            if (each[2] == "") return;
                            let thiscomplaint = {
                                name: each[1],
                                title: each[2],
                                description: each[8],
                            };
                            return (
                                <Link
                                    to={
                                        "/status/" +
                                        complaintList.findIndex(
                                            (ele) => ele === each
                                        ) +
                                        (thiscomplaint.name &&
                                            thiscomplaint.name.slice(1))
                                    }
                                    target="_blank"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <div class="work-card">
                                        <h1>{thiscomplaint.title}</h1>
                                        <p>{thiscomplaint.description}</p>
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
                                </Link>
                            );
                        })
                    )}
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

export function LoadingSpinner(heading = true) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
            }}
        >
            {heading == true && <h1>Loading &nbsp;&nbsp;&nbsp;&nbsp;</h1>}{" "}
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default AdminPortal;
