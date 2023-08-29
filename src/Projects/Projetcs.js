import React from 'react'
import "./projects.css"
import ProjectItem from './ProjectItem'
function Projetcs() {
  var data=[{
    name:"Website- Made as Intern",
    image:"./vroom.jpg",
    tech:["Javascript","HTML","REACT"],
    link: "https://github.com/preetgami/ram_auto"

  }, {
      name: "FULL Stack Artwork Marketplace ",
      image: "./cart.jpg",
      tech: ["React", "Node", "MongoDb", "Express"],
      link: "https://github.com/preetgami/econ-frontend"

    },
    {
      name:"Real time ONLINE Chess",
      image: "./Chess_Icons.jpg",
      tech: ["React", "Node", "Express"],
      link: "https://github.com/preetgami/onlinechess"
    }
    , {
    name: "Predict La Liga winners using ML",
    image: "./football.png",
    tech: ["Jupyternotebooks", "Python"],
    link: "https://github.com/preetgami/la-liga"

    },  {
      name: "Chrome extension-made as intern",
      image: "./gear.jpg",
      tech: ["Javascript", "HTML", "Google App Script"],
      link: "https://github.com/preetgami/web-ext-ram-auto"

    },{
      name: "Wordle solver",
    image: "./wordle.jpg",
      tech: ["React","Javascript","HTML"],
    link:"https://github.com/preetgami/wordle-solver"
    }, {
    name: "chrome extension -weather,quotes",
    image: "./quote.png",
    tech: ["Javascript", "HTML"],
    link: "https://github.com/preetgami/web-ext"

    }]
  return (
    <div>
      <h1 className='protect-title-main'> Some Projects (click for demos)</h1>
     
      <div className='projects-data'>
        {data.map(item=>{return <ProjectItem
          name={item.name}
            image={item.image}
            tech={item.tech}
            link={item.link}

          
          />
        })}
       
      </div>
    </div>
  )
}

export default Projetcs

/* {
year: "July 2022",
  job: "",
    title: "Ram Auto",
      duration: "2 months",
        details: "Developped a full stack application using React where User can Log in to find out their car status and detailed cost breakdown.The idea was to help clients with several vehicles to manage their costs and save their time. Also developped a Chrome extension to add inventoryto Google Sheets! "
    },

  */