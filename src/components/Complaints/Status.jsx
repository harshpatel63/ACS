import React, { useEffect, useState } from "react";
import "./css/Status.css";

const COMPLAINT_STATUS = {
    pending: "btn-warning",
    inProgress: "btn-danger",
    completed: "btn-success",
};

function Status() {
    let [complaintID, setcomplaintID] = useState("");
    let [complaint, setComplaint] = useState({
        name: "",
        title: "",
        location: "",
        date: "",
        category: "",
        description: "",
    });
    useEffect(() => {
        var map = window.L.map("map").setView([15.2993, 74.124], 10);
        window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(map);
        window.L.marker([15.412557520307072, 73.97804775322604])
            .addTo(map)
            .bindPopup("Location of the complaint")
            .openPopup();
        window.L.marker([15.412557520307072, 73.97804775322604], {
            title: "NITG",
        }).addTo(map);
    }, []);
    function fetchComplaintStatus() {}
    return (
        <section className="section-full">
            {SearchComplaint(setcomplaintID)}
            <div className="fetch container-center">
                <div className="section-title">
                    <h2>Fetched Complaint</h2>
                </div>
                <div className="complaint-details">
                    <div className="complaints-details__title">
                        <div className="complaints-details__title__name">
                            Name here
                        </div>
                        <div className="complaints-details__title__right">
                            <div
                                className="complaints-details__title__cfl noselect"
                                style={{ background: "#e40808" }}
                            >
                                Murder
                            </div>

                            <div className="complaints-details__title__cfl noselect">
                                Confidence Level: 90%
                            </div>
                        </div>
                    </div>
                    <div className="complaints-details__body">
                        <div className="complaints-details__body__complaint-title">
                            <h2>Lorem Ipsum is simply dummy text</h2>
                            <h4>(Date Filed: 2019-02-21)</h4>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                    <a
                        className={"btn " + COMPLAINT_STATUS.completed}
                        style={{ padding: "10px 20px", margin: "20px" }}
                    >
                        Completed
                    </a>
                    <div
                        id="map"
                        style={{ height: "500px", width: "100%", zIndex: "1" }}
                    ></div>
                </div>
            </div>
        </section>
    );
}

function SearchComplaint(_setcomplaintID) {
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
                            _setcomplaintID(evt.target.value);
                        }}
                    />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Status;
