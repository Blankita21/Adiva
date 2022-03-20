import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Stream from './Stream';
import Talks from './Talks';
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        {/* <Link to="/"><h2>Stream Selection</h2></Link>
        <Link to="/talks"><h2>Talks</h2></Link> */}
          <div>
            <Routes>
              <Route exact path= "/" element= {<Stream/>} />
              <Route path= "/talks" element= {<Talks/>} />
            </Routes>
            </div>
        
        {/* <div>
        <Router>
            <Routes>
              <Route path= "/" component = {Stream}/>
                
              <Route path= "/talks" >
                <Talks />
              </Route>
            </Routes>
            </Router>
        </div> */}
      </div>
    </Router>
  );
}

export default App;

