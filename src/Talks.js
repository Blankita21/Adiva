import React from 'react'
import './Talks.css'
import articles from './articles';

const Talks = () => {
  return (
    <div className="talks">
      <div className="head">
        <p>Top 10 News of the day</p>
      </div>
      <div className="list">
        <ul>
          {articles.map((e)=>
          {
            return (
              <>
                <li>
                  <div className="story">
                    <p className='title'>
                        {e.title}
                    </p>
                    <p>{e.news}</p>
                  <p className="red">Full Story</p>
                </div>
              </li>
            <hr/> 
            </>
            );
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Talks