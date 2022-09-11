import React, { useState } from "react";
import { useEffect } from "react";
import "./css/Form.css";
import {
    Web3Storage,
    getFilesFromPath,
} from "web3.storage/dist/bundle.esm.min.js";

const SUBMIT_STATUS = {
    STOPPED: 0,
    RUNNING: 1,
    UPLOADING: 2,
    FINISHED: 3,
};

function Form() {
    let [complaintID, setcomplaintID] = useState(undefined);
    let [reviewStatus, setreviewStatus] = useState(SUBMIT_STATUS.STOPPED);
    let [formData, setformData] = useState({
        name: "",
        title: "",
        location: "",
        date: "",
        category: "",
        description: "",
    });
    function updateData(type, value) {
        switch (type) {
            case "name":
                setformData({ ...formData, name: value });
                break;
            case "title":
                setformData({ ...formData, title: value });
                break;
            case "location":
                setformData({ ...formData, location: value });
                break;
            case "date":
                setformData({ ...formData, date: value });
                break;
            case "category":
                setformData({ ...formData, category: value });
                break;
            case "description":
                setformData({ ...formData, description: value });
                break;
        }
    }
    useEffect(() => {
        setTimeout(() => {
            updateData("name", window.MetaMaskAccount);
        }, 2000);
    }, []);

    function autoCopy() {
        var copyTextarea = document.querySelector(".complaint-id");
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            console.log("Copying text command was " + msg);
        } catch (err) {
            console.log("Oops, unable to copy");
        }
    }
    return (
        <section className="section-full">
            {complaintID !== undefined && (
                <div className="complaintdashboard-parent-container">
                    <div className="complaintcard-outer-box">
                        <span className="complaint-box">
                            <div className="complaint-title">
                                This is Your Complaint ID (please save it):
                            </div>
                            <input
                                className="complaint-id"
                                value={complaintID}
                                onClick={autoCopy}
                            />
                            <br />
                            <h6>(click to copy)</h6>
                        </span>
                    </div>
                </div>
            )}
            <div className="container-center">
                <div
                    className="complaint-form"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        padding: "20px",
                    }}
                >
                    <span className="sub-form-title">
                        <div className="section-title">
                            <h2>Your Details</h2>
                        </div>
                    </span>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            <h5>Your Name (default)</h5>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder={
                                formData.name === ""
                                    ? "Loading..."
                                    : formData.name
                            }
                            disabled
                        />
                    </div>

                    <span className="sub-form-title">
                        <div className="section-title">
                            <h2>Incident Details</h2>
                        </div>
                    </span>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            <h5>Title</h5>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Subject of the complaint"
                            onChange={(evt) =>
                                updateData("title", evt.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            <h5>Location</h5>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="lat, long"
                            onChange={(evt) =>
                                updateData("location", evt.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className=" col-form-label">
                            <h5>Select Date: &nbsp;</h5>
                        </label>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            onChange={(evt) =>
                                updateData("date", evt.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            <h5>Complaint Category</h5>
                        </label>
                        <div className="radio-buttons">
                            {renderRadioButtons()}
                        </div>
                    </div>
                    <div className="file-upload">
                        <label htmlFor="exampleFormControlInput1">
                            <h5>Upload Image (optional)</h5>
                        </label>
                        <br />
                        <input type="file" id="browse-file" multiple />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            <h5>Please describe the incident in Detail</h5>
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(evt) =>
                                updateData("description", evt.target.value)
                            }
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={
                            "btn btn-primary " +
                            (reviewStatus !== SUBMIT_STATUS.STOPPED
                                ? "disabled"
                                : "")
                        }
                        onClick={(evt) => {
                            handleSubmit(evt);
                        }}
                    >
                        {reviewStatus == SUBMIT_STATUS.STOPPED && "Submit"}
                        {reviewStatus == SUBMIT_STATUS.RUNNING && (
                            <>
                                <span
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Submitting&nbsp;&nbsp;&nbsp;
                                    <div
                                        className="spinner-border"
                                        role="status"
                                        style={{
                                            height: "15px",
                                            width: "15px",
                                            fontSize: "10px",
                                        }}
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </span>
                            </>
                        )}

                        {reviewStatus == SUBMIT_STATUS.FINISHED && (
                            <span>Submitted</span>
                        )}

                        {reviewStatus == SUBMIT_STATUS.UPLOADING && (
                            <span>Uploading Files</span>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
    function checkForm() {
        if (formData.title.length === 0) {
            alert("Title is empty");
            return false;
        }
        console.log(formData);

        if (formData.date === "") {
            alert("Date is empty");
            return false;
        }
        if (formData.category === "") {
            alert("Please Select the Category");
            return false;
        }
        if (formData.description === "") {
            alert("Description is empty");
            return false;
        }
        if (formData.location.split(",").length === 2) {
            let [lat, long] = formData.location.split(",");
            lat = parseFloat(lat);
            long = parseFloat(long);
            if (lat == NaN || long == NaN) return false;
            /*
            if(15.804206786179925, 73.87422231517183)
15.414648991515763, 74.27578885992173
14.989226288455015, 74.10992441752504
15.288375577751793, 73.9062312426519

            */
            if (
                lat >= 14.989226288455 &&
                lat <= 15.8042067861 &&
                long >= 73.9062312426519 &&
                long <= 74.27578885992173
            )
                return true;
            else {
                console.log(lat, long);
                alert("Range Out of Goa");
                return false;
            }
        } else {
            alert("Location is invalid");
            return false;
        }
        return true;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (checkForm() == false) return;
        let browseHandlerFile = document.getElementById("browse-file");
        console.log(browseHandlerFile.files);

        let imageHashes = [];
        /*------------ if files are there upload them ------------------ */
        if (browseHandlerFile.files.length > 0) {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNCZmYxMzM4NWVjMkNkQ2MyQUIwZjdERGRFYjJCNmY4NGI0M2RjQkEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4MzAzNDcwMTUsIm5hbWUiOiJBQ1MifQ.WZcxoUermP-jOzJKTf6OlXbTqicjA3hQw9kN0q8-95g";
            const client = new Web3Storage({ token });
            let cid;
            setreviewStatus(SUBMIT_STATUS.UPLOADING);
            try {
                cid = await client.put(browseHandlerFile.files);
            } catch (error) {
                console.log(error);
                alert("Some error Occured:", error.message);
                setreviewStatus(SUBMIT_STATUS.STOPPED);

                return;
            }
            let IPFS_URL = "https://ipfs.io/ipfs/" + cid + "/";
            for (let i = 0; i < browseHandlerFile.files.length; i++)
                imageHashes.push(IPFS_URL + browseHandlerFile.files[i].name);
        }

        setreviewStatus(SUBMIT_STATUS.RUNNING);

        try {
            let x = await window.complaintContract.methods
                .createComplaint(
                    formData.name,
                    formData.title,
                    formData.location,
                    formData.date,
                    parseInt(formData.category),
                    formData.description,
                    imageHashes
                )
                .send({
                    from: window.MetaMaskAccount,
                });
            console.log(x);
            setcomplaintID(
                x.events.ComplaintCreated.returnValues.id +
                    window.MetaMaskAccount.slice(1)
            );
        } catch (e) {
            alert(e.message + " Please Try again..");
            setreviewStatus(SUBMIT_STATUS.STOPPED);
            return;
        }
        setreviewStatus(SUBMIT_STATUS.FINISHED);
    }
    function renderRadioButtons() {
        function setCategory(event) {
            updateData("category", event.target.value);
            console.log(event.target.value);
        }

        return (
            <div onChange={setCategory.bind(this)}>
                <label className="radio-buttons">
                    <input type="radio" value="0" name="category" /> &nbsp;
                    Drugs
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="1" name="category" />
                    &nbsp; Robbery
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="2" name="category" />
                    &nbsp; Kidnapping
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="3" name="category" />
                    &nbsp; Murder
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="4" name="category" />
                    &nbsp; Rape
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="5" name="category" />
                    &nbsp; Others
                </label>
            </div>
        );
    }
}

export default Form;
