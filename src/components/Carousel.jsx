import React from "react";

function Carousel() {
    return (
        <section
            style={{
                height: "70vh",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ width: "100%" }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://i.pinimg.com/736x/a3/8e/5c/a38e5c80d0813fd9fe59bdf389338898.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets-global.website-files.com/616e938268c8f0a92cb2b540/617895a3f99eeb3f74fb62ad_Pu3h1voezpklZI_VAWqXB-FHo0X_AbyyXGkJGENhp7Ftndi0udb7bxrvBq4QIhpd7rqoxk_iOLjJyeF2lXtThsaNw5o_i6QrwL3iXlVp1F5ypOfrqwgH8Dz7Bz64DQAiEB6cw-Ij.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://havecamerawilltravel.com/wp-content/uploads/2022/01/youtube-banner-size-800x450.png"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Carousel;
