import React, { useEffect, useState } from "react";
import "./css/Status.css";

const COMPLAINT_STATUS = {
    pending: "btn-warning",
    inProgress: "btn-danger",
    completed: "btn-success",
};

function Status() {
    let map = undefined,
        marker;
    let category = [
        "Drugs",
        "Robbery",
        "Kidnapping",
        "Murder",
        "Rape",
        "Others",
    ];
    let [complaintID, setcomplaintID] = useState("");
    let [complaint, setComplaint] = useState({
        name: "",
        title: "",
        location: "0,0",
        date: "",
        category: "",
        description: "",
    });
    useEffect(() => {
        map = window.L.map("map");
        window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(map);
        window.marker = window.L.marker([1000, 1000])
            .addTo(map)
            .bindPopup("Location of the complaint")
            .openPopup();
        map.setView([15.412557, 73.97804], 10);
    }, []);

    useEffect(() => {
        try {
            console.log(complaint.location);
            let [lat, long] = complaint.location.split(",");

            if (complaint.location !== "0,0") {
                window.marker
                    .setLatLng([parseInt(lat), parseInt(long)], {
                        title: "NITG",
                    })
                    .update();
            }
        } catch (error) {
            console.log(error);
        }
    }, [complaint.location]);
    async function fetchComplaintStatus() {
        try {
            let actualComplaintID = parseInt(complaintID.split("x")[0]);
            let x = await window.complaintContract.methods
                .getComplaintStatus(actualComplaintID)
                .call();
            console.log(x, setComplaint);
            setComplaint({
                name: x[1],
                title: x[2],
                location: x[3],
                date: x[4],
                category: category[parseInt(x[6])],
                status: x[7],
                description: x[8],
            });
        } catch (e) {
            alert(e.message + " Please Try again..");
            return;
        }

        /* Map*/
        setTimeout(() => {}, 2000);
    }

    function SearchComplaint() {
        return (
            <div className="container-center">
                <div className="wrap">
                    <div className="search">
                        <input
                            type="text"
                            className="searchTerm"
                            placeholder="Enter Complaint ID"
                            style={{ height: "100%" }}
                            onChange={(evt) => {
                                setcomplaintID(evt.target.value);
                            }}
                        />
                        <button
                            type="submit"
                            className="searchButton"
                            onClick={() => fetchComplaintStatus()}
                        >
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <section className="section-full">
            {SearchComplaint(setcomplaintID)}
            <div className="complaint-details">
                {complaint && complaint.name === "" ? (
                    ""
                ) : (
                    <div className="fetch container-center">
                        <div className="section-title">
                            <h2>Fetched Complaint</h2>
                        </div>
                        <div className="complaints-details__title">
                            <div className="complaints-details__title__name">
                                {complaint.name}
                            </div>
                            <div className="complaints-details__title__right">
                                <div
                                    className="complaints-details__title__cfl noselect"
                                    style={{ background: "#e40808" }}
                                >
                                    {complaint.category}
                                </div>

                                <div className="complaints-details__title__cfl noselect">
                                    Confidence Level: 90%
                                </div>
                            </div>
                        </div>
                        <div className="complaints-details__body">
                            <div className="complaints-details__body__complaint-title">
                                <h2>{complaint.title}</h2>
                                <h4>(Date Filed: {complaint.date})</h4>
                            </div>
                            <p>{complaint.description}</p>
                        </div>
                        <a
                            className={"btn " + COMPLAINT_STATUS.completed}
                            style={{ padding: "10px 20px", margin: "20px" }}
                        >
                            Completed
                        </a>
                    </div>
                )}
                <div
                    id="map"
                    style={{
                        height: "500px",
                        width: "100%",
                        zIndex: "1",
                    }}
                ></div>
            </div>
        </section>
    );
}

export default Status;
