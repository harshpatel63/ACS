import React, { useState } from "react";
import "./css/Form.css";
function Form() {
    return (
        <section className="section-full">
            <div className="container-center">
                <span className="sub-form-title">
                    <h3 style={{ padding: "0" }}>Your Details</h3>
                </span>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Your Name
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your name / Avatar name"
                    />
                </div>

                <span className="sub-form-title">
                    <h3>Incident Details</h3>
                </span>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Title
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Subject of the complaint"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Location
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="lat, long"
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class="col-1 col-form-label">
                        Date
                    </label>
                    <div class="col-5">
                        <div class="input-group date" id="datepicker">
                            <input type="text" class="form-control" id="date" />
                            <span class="input-group-append">
                                <span class="input-group-text bg-light d-block">
                                    <i class="fa fa-calendar"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Complaint Category
                    </label>
                    <div className="radio-buttons">{renderRadioButtons()}</div>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                        Please describe the incident in Detail
                    </label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>
        </section>
    );

    function renderRadioButtons() {
        function setCategory(event) {
            console.log(event.target.value);
        }

        return (
            <div onChange={setCategory.bind(this)}>
                <label className="radio-buttons">
                    <input type="radio" value="Drugs" name="gender" /> Drugs
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="Robbery" name="gender" /> Robbery
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="Kidnapping" name="gender" />
                    Kidnapping
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="Murder" name="gender" /> Murder
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="Murder" name="gender" /> Rape
                </label>
                <label className="radio-buttons">
                    <input type="radio" value="Rape" name="gender" /> Others
                </label>
            </div>
        );
    }
}

export default Form;
