import React, { useEffect, useState } from 'react'
import "./TeamStyles.css"
import 'bootstrap/dist/css/bootstrap.css';
import DevCarousel from '../components/Carousel.js';


const Team = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const breakpoiintOne= 670;
  const breakpoiintTwo= 1025;
 

  const items= [
    {
      name: "Andrea",
      role: "Web Developer",
      description: "Something",
      link: "https://www.linkedin.com/in/andrea-bances-monard/",
    },
    {
      name: "Jane1",
      role: "UI/UX",
      description: "Something",
    },
    {
      name: "Jane2",
      role: "Web Developer",
      description: "Something",
    },
    {
      name: "Jane3",
      role: "Web Developer",
      description: "Something",
    },
    {
      name: "Jane4",
      role: "Web Developer",
      description: "Something",
    },
    {
      name: "Jane5",
      role: "Web Developer",
      description: "Something",
    },
    {
      name: "Jane6",
      role: "Web Developer",
      description: "Something",
    },
  ]
  
  const updateItem= (newItem) => {
    if (windowSize> breakpoiintTwo){
      if (newItem<0){
        newItem=0;
      }else if (newItem >= 4){
        newItem= 4
      }
    }else if (windowSize>breakpoiintOne){
      if (newItem<0){
        newItem=0;
      }else if (newItem >= 5){
        newItem= 5
      }
    }else{
      if (newItem<0){
        newItem=0;
      }else if (newItem >= (items.length)){
        newItem= items.length -1
      }
    }
    setActiveItem(newItem)
  }
  
  const updateWindow= () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindow)
    return () => window.removeEventListener('resize', updateWindow)
  })


  return (
    <div className='team-container'>
      <h1>Meet the Team</h1>
      <div className='gsal'>
        <div className="gsal-photo">
          image
        </div>
        <div className="gsal-description">
          <h1 className="gsal-name">
            Jane Doe
          </h1>
          <p className="gsal-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro placeat molestiae similique. Mollitia vitae rerum natus rem? Eaque odio, deserunt repudiandae accusamus veniam dolore dolorem, velit quibusdam atque dolor labore.
          </p>
        </div>
      </div>
      <div className="carousel">
        <div className="devs" style={{ transform: `translate: (-${activeItem * 100}%)`}}>
          {items.map((item, idx)=> {
            if (windowSize>breakpoiintTwo){
              if (idx === activeItem || idx === activeItem+1 || idx=== activeItem+2){
                return <DevCarousel item={item} key={item.name}/>
              }
            }else if (windowSize> breakpoiintOne){
              if (idx === activeItem || idx === activeItem+1){
                return <DevCarousel item={item} key={item.name}/>
              }
            }else {
              if (idx === activeItem){
                return <DevCarousel item={item} key={item.name}/>
              }
            }}
          )}
        </div>
        <div className="arrows">
          <button onClick={()=> (updateItem(activeItem-1))}>&lt;</button>
          <div className="indicators">...</div>
          <button onClick={()=> (updateItem(activeItem+1))}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Team
