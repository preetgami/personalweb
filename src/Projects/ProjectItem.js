import React from 'react'
import "./projects.css"
function ProjectItem({name,image,tech,link}) {
  return (
    <a href={link} target="_blank" className='box-project' style={{
      textDecoration: 'none'
     }
  }>
    <img src={require(`${image}`)} alt={name} className='project-image'></img>
      <div className='projext-text'>
        {name}
        <div className="tech-container">
          {tech.map((t, index) => ( 
            <div key={index} className='box-tech'>
              {t}
            </div>
          ))}
        </div>
    </div>
    </a>
  )
}

export default ProjectItem