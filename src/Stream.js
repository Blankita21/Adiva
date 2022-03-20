import React from 'react'
import './App.css';
import Row from './Row';
import data from './data';

const Stream = () => {
  return (
    <div>
        <div className="top">
            <h2>Select the career stream that excites you the most.</h2>
            <p>New streams get added every now and then</p>
        </div>
        {data.map((e)=>
            {
            return (
            <Row task={e.text} items= {e.items}/>
            );
            })
        }

        <div className="wisdom">
          <h2>Wisdom of the day!</h2>
          <div className="quote">
            <img src="https://media.kidadl.com/605a0fea79175c2e668ede90_60_night_sky_quotes_for_starry_evenings_0839330492.jpeg.webp"/>
            <p className='quote'>"You love me but I love Money"</p>
          </div>
          <div className="foot">
            <h1>Introducing Adiva</h1>
            <p>Your home to all exams</p>
          </div>
        </div>
    </div>
  )
}

export default Stream