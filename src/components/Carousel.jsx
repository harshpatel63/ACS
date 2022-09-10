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
                class="carousel slide"
                data-bs-ride="carousel"
                style={{ width: "100%" }}
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="https://source.unsplash.com/random/100x80?sig=1"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsz6G0FYwFLuS5Ys5o7OsjUVuy78puVXk0w&usqp=CAU"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://source.unsplash.com/random/100x80?sig=3"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Carousel;
