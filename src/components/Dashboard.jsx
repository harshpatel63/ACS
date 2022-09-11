import React, { useEffect } from "react";
import "./css/Dashboard.css";
// import Chart from 'chart.js'

function Dashboard() {
    let map;
    let dataofloc = [
        { location: [15.671696656002844, 73.74297100503983], label: "Ambrol" },
        { location: [15.643912846142063, 73.7553278251829], label: "Morjim" },
        { location: [15.583039895195592, 73.7470899450875], label: "Anjuna" },
        { location: [15.554194483937469, 73.77864920346967], label: "Saligao" },
        { location: [15.734076714277608, 73.7992101602372], label: "Pernem" },
        { location: [15.760525868269458, 73.865799691008], label: "Tamboxem" },
        { location: [15.747962949407679, 73.88364843121462], label: "Mopa" },
        { location: [15.601167055909462, 73.78000134650357], label: "Assgao" },
        { location: [15.603152153075216, 73.81432584690087], label: "Mapusa" },
        { location: [15.589917809283525, 73.87473696760019], label: "Aldona" },
        { location: [15.509173414144772, 73.79918621325784], label: "Nerul" },
        {
            location: [15.527046587856196, 73.91314355457696],
            label: "divar island",
        },
        {
            location: [15.601832304763715, 73.96463030517296],
            label: "bicholim",
        },
        {
            location: [15.552198800547536, 74.03533877599148],
            label: "Sankhali",
        },
        { location: [15.597862065691382, 74.05661996623782], label: "moriem" },
        { location: [15.532342045643059, 74.13556631715169], label: "satari" },
        {
            location: [15.456110929597706, 73.84613235006984],
            label: "Santz crux",
        },
        { location: [15.469353864419068, 73.89693261065788], label: "Panjim" },
        {
            location: [15.380610058934602, 73.82553764983145],
            label: "Vasco-da-gama",
        },
        { location: [15.419128474648, 73.94752854442214], label: "Madkai" },
        { location: [15.407206985651483, 73.98048006480357], label: "Bandora" },
        { location: [15.389985850346205, 74.01343158518502], label: "Ponda" },
        { location: [15.384686752755162, 73.91457702404068], label: "Birla" },
        { location: [15.362164083996076, 73.94340960437447], label: "Verna" },
        { location: [15.320432646902894, 74.03406842588709], label: "Shiroda" },
        { location: [15.292601612770557, 74.0450522660142], label: "Curtorim" },
        {
            location: [15.264104105015438, 74.09242007656252],
            label: "Curchorem",
        },
        { location: [15.239579896944036, 74.07045239630826], label: "Quepem" },
        { location: [15.1626746702468, 74.11438775681683], label: "Rivona" },
        { location: [15.06053313766933, 74.17067993746844], label: "Quepem" },
        { location: [14.990863059735638, 74.0834957064592], label: "Canacona" },
    ];
    useEffect(() => {
        var ctx1 = document.getElementById("myChart1");
        var ctx2 = document.getElementById("myChart2");

        var myChart1 = new window.Chart(ctx1, {
            type: "bar",
            data: {
                labels: [
                    "Robbery",
                    "Others",
                    "Drugs",
                    "Murder",
                    "Rape",
                    "Kidnapping",
                ],
                datasets: [
                    {
                        data: [328, 281, 155, 137, 44, 30],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Number of Cases by Case Category",
                        font: {
                            size: 20,
                        },
                    },
                    legend: { display: false },
                },
            },
        });

        var myChart2 = new window.Chart(ctx2, {
            type: "bar",
            data: {
                labels: [
                    "Verna",
                    "Farmagudi",
                    "Aldona",
                    "Nerul",
                    "Curtorim",
                    "St. Cruz",
                    "Assagao",
                    "Anjuna",
                    "Bicolim",
                    "Arpora",
                    "Ponda city",
                    "Colva",
                    "Satari",
                    "          Mopa",
                    "Korgao",
                    "Mapusa",
                    "Tudal",
                    "Shiroda",
                    "Canacona",
                    "Pernem",
                    "Curchorem",
                    "Chandel",
                    "Bambolim",
                    "Vasco da gama",
                    "Quepem",
                    "Divar Island",
                    "Morjim",
                    "Sankhali",
                    "Valpoi",
                    "Madkai",
                ],
                datasets: [
                    {
                        data: [
                            46, 45, 44, 42, 42, 39, 38, 37, 37, 35, 35, 34, 32,
                            31, 31, 31, 31, 30, 30, 29, 29, 27, 27, 27, 26, 25,
                            24, 24, 24, 23,
                        ],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                indexAxis: "y",
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Number of Cases by City",
                        font: {
                            size: 20,
                        },
                    },
                    datalabels: {
                        // This code is used to display data values
                        anchor: "end",
                        align: "top",
                        formatter: Math.round,
                        font: {
                            weight: "bold",
                            size: 16,
                        },
                    },
                    legend: { display: false },
                },
            },
        });
        map = window.L.map("map2");

        window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(map);

        dataofloc.forEach((ele) => {
            window.L.circle(ele.location, {
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
                radius: 1500,
                title: ele.label,
            })
                .addTo(map)
                .bindPopup(ele.label)
                .openPopup();
        });
        map.setView([15.412557, 73.97804], 10);
    }, []);

    return (
        <section className="section-full">
            <div className="dashboard-parent-container container-center">
                <h1>Goa State Crime Report</h1>
                <hr />
                <div className="scorecard-outer-box">
                    <span className="score-box">
                        <div className="score-title">Complaints Filed</div>
                        <div className="score">278</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Complaints Resolved</div>
                        <div className="score">78</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Pending Cases</div>
                        <div className="score">200</div>
                    </span>
                    <span className="score-box">
                        <div className="score-title">Hostspot Regions</div>
                        <div className="score">12</div>
                    </span>
                </div>
                <div className="index-score">
                    <span class="alert alert-danger">Crime Index: 44.44</span>
                    <span class="alert alert-success">Safety Index: 55.56</span>
                </div>
                <div className="rates">
                    <h2>Crime Rates in Goa</h2>
                    <hr />
                    <div className="span-rates">
                        <span>
                            <p>Level of crime</p>
                            <p>47.69</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>Crime increasing in the past 3 years</p>
                            <p>66.49</p>
                            <p> High</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries home broken and things stolen</p>
                            <p>47.19</p>
                            <p> Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries being mugged or robbed</p>
                            <p>41.09</p>
                            <p> Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries car stolen</p>
                            <p>30.24</p>
                            <p>Low</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries things from car stolen</p>
                            <p>32.56</p>
                            <p>Low</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries attacked</p>
                            <p>40.48</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>Worries being insulted</p>
                            <p>40.62</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>
                                Worries being subject to a physical attack
                                because of your skin color, ethnic origin,
                                gender or religion
                            </p>
                            <p>30.77</p>
                            <p>Low</p>
                        </span>
                        <hr />
                        <span>
                            <p>Problem people using or dealing drugs</p>
                            <p>58.97</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>
                                Problem property crimes such as vandalism and
                                theft
                            </p>
                            <p>48.41</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>
                                Problem violent crimes such as assault and armed
                                robbery
                            </p>
                            <p>42.92</p>
                            <p>Moderate</p>
                        </span>
                        <hr />
                        <span>
                            <p>Problem corruption and bribery</p>
                            <p>63.75</p>
                            <p>High</p>
                        </span>
                        <hr />
                    </div>
                </div>

                <div className="rates">
                    <h2>Safety in Goa</h2>
                    <hr />
                    <div className="span-rates">
                        <span>
                            <p>Safety walking alone during daylight</p>
                            <p>78.29</p>
                            <p>&nbsp; High</p>
                        </span>
                        <hr />
                        <span>
                            <p>Safety walking alone during night</p>
                            <p>52.74</p>
                            <p> Moderate</p>
                        </span>
                        <hr />
                    </div>
                </div>
                <div className="chart-section" style={{ width: "100%" }}>
                    <div className="chart">
                        <canvas id="myChart1" width="400" height="400"></canvas>
                    </div>
                    <br />
                    <div className="chart" style={{ width: "100%" }}>
                        <canvas id="myChart2" width="400" height="400"></canvas>
                    </div>
                </div>
                <div
                    id="map2"
                    style={{
                        height: "500px",
                        width: "100%",
                        zIndex: "1",
                    }}
                ></div>
            </div>
        </section>
    );
}

export default Dashboard;

/*



*/
