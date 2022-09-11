import React from 'react'
import "./css/Dashboard.css"

function Dashboard() {
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
            

    </div>
  )
}

export default Dashboard