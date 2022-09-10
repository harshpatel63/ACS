import React, { useState } from "react";
import "./css/Status.css";

const COMPLAINT_STATUS = {
    submitted: "btn-primary",
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
    function fetchComplaintStatus() {}
    return (
        <section className="section-full">
            {SearchComplaint(setcomplaintID)}
            <div className="fetch container-center">
                <div className="section-title">
                    <h2>Fetched Complaint</h2>
                </div>
                <div class="complaint-details">
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
                        href="#review-area"
                    >
                        Completed
                    </a>
                </div>
            </div>
        </section>
    );
}

function SearchComplaint(_setcomplaintID) {
    return (
        <div class="container-center">
            <div className="wrap">
                <div class="search">
                    <input
                        type="text"
                        class="searchTerm"
                        placeholder="Enter Complaint ID"
                        style={{ height: "100%" }}
                        onChange={(evt) => {
                            _setcomplaintID(evt.target.value);
                        }}
                    />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Status;
