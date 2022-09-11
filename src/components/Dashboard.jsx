import React, { useEffect } from 'react'
import "./css/Dashboard.css"
// import Chart from 'chart.js'

function Dashboard() {
  useEffect(()=>{
    var ctx1 = document.getElementById("myChart1");
    var ctx2 = document.getElementById("myChart2");

    var myChart1 = new window.Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Robbery', 'Others', 'Drugs', 'Murder', 'Rape', 'Kidnapping'],
        datasets: [{
          
          data: [328,281,155,137,44,30],
          backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Cases by Case Category',
                font:{
                  size:20
                }
            },    
            legend: { display: false }       
        } 
      }
    });
 
    var myChart2 = new window.Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Verna',
          'Farmagudi',
          'Aldona',
          'Nerul',
          'Curtorim',
          'St. Cruz',
          'Assagao',
          'Anjuna',
          'Bicolim',
          'Arpora',
          'Ponda city',
          'Colva',
          'Satari',
'          Mopa',
          'Korgao',
          'Mapusa',
          'Tudal',
          'Shiroda',
          'Canacona',
          'Pernem',
          'Curchorem',
          'Chandel',
          'Bambolim',
          'Vasco da gama',
          'Quepem',
          'Divar Island',
          'Morjim',
          'Sankhali',
          'Valpoi',
          'Madkai',],
        datasets: [{
          
          data: [46,
            45,
            44,
            42,
            42,
            39,
            38,
            37,
            37,
            35,
            35,
            34,
            32,
            31,
            31,
            31,
            31,
            30,
            30,
            29,
            29,
            27,
            27,
            27,
            26,
            25,
            24,
            24,
            24,
            23],
          backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis:'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Cases by City',
                font:{
                  size:20
                }
            },
            datalabels: { // This code is used to display data values
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold',
                    size: 16
                }
            },
            legend: { display: false } 
        } 
      }
    });

  },[])
  return (
    <div className='dashboard-parent-container'>
        <h1>Goa State Crime Report</h1>
        <hr />
        <div className="scorecard-outer-box">
                  <span className="score-box">
                    <div className='score-title'>Complaints Filed</div>
                    <div className="score">278</div>
                  </span>
                  <span className="score-box">
                    <div className='score-title'>Complaints Resolved</div>
                    <div className="score">78</div>
                  </span>
                  <span className="score-box">
                    <div className='score-title'>Pending Cases</div>
                    <div className="score">200</div>
                  </span>
                  <span className="score-box">
                    <div className='score-title'>Hostspot Regions</div>
                    <div className="score">12</div>
                  </span>
        </div>
        <div className="index-score">
            <span>Crime Index:	44.44</span>
            <span>Safety Index:	55.56</span>
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
                <p>High</p>
            </span>
            <hr />
            <span>    
                <p>Worries home broken and things stolen</p>
                <p>47.19</p>
                <p>Moderate</p>
            </span>
            <hr />
            <span>    
                <p>Worries being mugged or robbed</p>
                <p>41.09</p>
                <p>Moderate</p>
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
                <p>Worries being subject to a physical attack because of your skin color, ethnic origin, gender or religion</p>
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
                <p>Problem property crimes such as vandalism and theft</p>
                <p>48.41</p>
                <p>Moderate</p>
            </span>
            <hr />
            <span>    
                <p>Problem violent crimes such as assault and armed robbery</p>
                <p>42.92</p>
                <p>Moderate</p>
            </span>
            <hr />
            <span>
                <p>Problem corruption and bribery</p>
                <p>63.75</p>
                <p>High</p>
            </span>
            <hr/>
          </div>
        </div>
        <div className="rates">
          <h2>Safety in Goa</h2>
          <hr />
          <div className="span-rates">
            <span>
                <p>Safety walking alone during daylight</p>
                <p>78.29</p>
                <p>High</p>
            </span>
            <hr />          
            <span>    
                <p>Safety walking alone during night</p>
                <p>52.74</p>
                <p>Moderate</p>
            </span>
            <hr />
          </div>
        </div>
        <div className="chart-section">
          <div className="chart">
            <canvas id="myChart1" width="400" height="400"></canvas>
          </div>
          <br />
          <div className="chart">
            <canvas id="myChart2" width="400" height="400"></canvas>
          </div>
        </div>

    </div>
  )
}

export default Dashboard