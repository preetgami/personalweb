import React from 'react'
import "./timeline.css"
function TimelineItem({year,title,duration,details,job}) {
    return (<div className='box'>
        <div id='timeline-length'> 
            <h4 className='timeline-year'> {year} </h4>
            <h5>
                {duration}
            </h5>
        </div>
        <div id='timeline-title'>
            <h3>{job} </h3>
            <h3>{title} </h3>

        </div> 
        
        

        <p>
            {details}
        </p>


    </div>
        
    );
}
export default TimelineItem