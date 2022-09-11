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
                <div className="dashboard-parent-container">
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
                <span className="sub-form-title">
                    <h3 style={{ padding: "0" }}>Your Details</h3>
                </span>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Your Name (default)
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={
                            formData.name === "" ? "Loading..." : formData.name
                        }
                        disabled
                    />
                </div>

                <span className="sub-form-title">
                    <h3>Incident Details</h3>
                </span>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Title
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
                        Location
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
                        Select Date: &nbsp;
                    </label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={(evt) => updateData("date", evt.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Complaint Category
                    </label>
                    <div className="radio-buttons">{renderRadioButtons()}</div>
                </div>
                <div className="file-upload">
                    <label htmlFor="exampleFormControlInput1">
                        Upload Image
                    </label>
                    <br />
                    <input type="file" id="browse-file" multiple />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Please describe the incident in Detail
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
        </section>
    );
    function checkForm() {}
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
