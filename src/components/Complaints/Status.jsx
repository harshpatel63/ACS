import React, { useState } from "react";
import "./css/Status.css";

function Status() {
    let [complaintID, setcomplaintID] = useState("");
    function fetchComplaintStatus() {}
    return (
        <section className="section-full">
            {SearchComplaint(setcomplaintID)}
            <div className="fetch container-center">hi</div>
        </section>
    );
}

function SearchComplaint(_setcomplaintID) {
    return (
        <div class="wrap container-center">
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
    );
}
export default Status;
