import React from 'react'
import TimelineItem from './TimelineItem'
import "./timeline.css"

function Timeline() {
  var data = [{
    year: "Present",
    job: "Data Analytics student",
    title: "NielsenIQ",
    duration: "4 Months",
    details: " Selected as one of 150 students for a 12-week professional development program in understanding data analytics. Analyze the consumer trends of Fortune 500 Companies and present findings to these clients."
  },{
    year: "Present",
     job: "Bachelor of Science",
    title: "University Of Alberta",
    duration: "2022-2026",
    details: "Pursuing my Bsc in Computer Science with Spec. Relavant coursework: Algorithms, Data Structures. Languages: C, Python, Javascript. Excited to learn more about ML"
    
  } ]
  return (
    <div className='title-timeline'> <h1 style={{ marginLeft: '1.5rem' }} >Expereince + Education</h1>
    <section className='col'>
      <div className='container'>
        {data.map(item=>{ return <TimelineItem
          year={item.year}
          title={item.title}
            duration={item.duration}
            details={item.details}
            job={item.job}
          />
        })}
      </div>

    </section>
    </div>
  )
}

export default Timeline