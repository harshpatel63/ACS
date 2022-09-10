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
                        placeholder="0xA3c4D7D124F066392b6c08ee579bd73C1306cD49"
                        onChange={(evt) => updateData("name", evt.target.value)}
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
