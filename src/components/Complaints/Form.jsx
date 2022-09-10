import React, { useState } from "react";
import "./css/Form.css";
function Form() {
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
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your name / Avatar name"
                        onChange={(evt) => updateData("name", evt.target.value)}
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
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Subject of the complaint"
                        onChange={(evt) =>
                            updateData("title", evt.target.value)
                        }
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="lat, long"
                        onChange={(evt) =>
                            updateData("location", evt.target.value)
                        }
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class=" col-form-label">
                        Select Date: &nbsp;
                    </label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={(evt) => updateData("date", evt.target.value)}
                    />
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
                        onChange={(evt) =>
                            updateData("description", evt.target.value)
                        }
                    ></textarea>
                </div>
            </div>
        </section>
    );

    function renderRadioButtons() {
        function setCategory(event) {
            updateData("category", event.target.value);
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
