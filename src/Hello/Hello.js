import React from 'react'
import"./home.css"
function Hello() {
  return (

    
      <div className='main-home'>

        <div className='my-image'>
        <img src={require('./me.png')} id="image" ></img>
        </div>
        <h1 id="title">Hello👋</h1>
      <div className='hello-content'>
    
        
        
          <p>My name is Preet. I'm a Computer Science student at the University of Alberta.
          In my first introductions to this field, I was engrossed in the world of route finding algorithms taugh in my high school math class.
          But over the past years it has grown to much more. From ML to web, I have dipped my feet in some domains, interested ever more to learn.
          Thanks for stoppping by my website!
          
       

        <br />


          </p>
      </div>
    
      
    </div>
  )
}

export default Hello