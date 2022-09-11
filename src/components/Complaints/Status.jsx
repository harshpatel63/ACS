import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Status.css";
import { LoadingSpinner } from "../Admin/AdminPortal";

const COMPLAINT_STATUS = {
    pending: "btn-warning",
    inProgress: "btn-danger",
    completed: "btn-success",
};

function Status() {
    let [loading, setLoading] = useState(true);
    let [confidencelevel, setconfindencelevel] = useState("--");
    let { id } = useParams();
    let map = undefined;
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

        if (id != undefined) {
            document.getElementById("search-bar").value = "Loading...";
            complaintID = id;
            setTimeout(() => {
                document.getElementById("search-bar").value = id;
                setcomplaintID(id);
                fetchComplaintStatus();
            }, 1000);
            console.log(id);
        }
    }, []);
    async function getConfidence(lat, long, category = 0) {
        let x = await fetch(
            "http://localhost:5000/inputs/" + lat + "/" + long + "/" + category
        );
        x = await x.json();
        setconfindencelevel(x.confidence);
    }
    useEffect(() => {
        try {
            console.log(complaint.location);
            let [lat, long] = complaint.location.split(",");
            getConfidence(lat, long);
            if (complaint.location !== "0,0") {
                window.marker
                    .setLatLng([parseFloat(lat), parseFloat(long)], {
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
            console.log(complaintID);
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
            setLoading(false);
        } catch (e) {
            alert(e.message + " Please Try again..");
            return;
        }
    }

    return (
        <section className="section-full">
            <div className="container-center">
                <div className="wrap">
                    <div className="search">
                        <input
                            id="search-bar"
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
            <div className="complaint-details">
                <div className="fetch container-center">
                    <div className="section-title">
                        <h2>Fetched Complaint</h2>
                    </div>
                    {loading && id !== undefined ? (
                        LoadingSpinner()
                    ) : complaint && complaint.name === "" ? (
                        "Please Provide a Complaint ID"
                    ) : (
                        <div className="section-body">
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
                                        Confidence Level:{" "}
                                        {(confidencelevel + "").slice(0, 5)}%
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
                                style={{
                                    padding: "10px 20px",
                                    margin: "20px",
                                }}
                            >
                                Completed
                            </a>
                        </div>
                    )}
                </div>
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
