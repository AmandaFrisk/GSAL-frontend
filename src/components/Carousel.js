import React from "react";
import { CarouselItem } from "react-bootstrap";

const DevCarousel = (props) => {
  return ( 
    <>
      <CarouselItem>
      {/* <div className="carousel-item"> */}
        <div className="text">{props.item.name}</div>
        <div className="text">{props.item.role}</div>
        <div className="text">{props.item.description}</div>
        <button><a href={props.item.link} target="_blank">LinkedIn</a></button>
      {/* </div> */}
      </CarouselItem>
    </>
   );
}

export default DevCarousel;