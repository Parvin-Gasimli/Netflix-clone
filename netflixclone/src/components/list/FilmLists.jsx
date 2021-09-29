import ListItem from "../ListItem/ListItem";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import "./filmlist.css";

const List = () => {
    const[sliderNumber,setSliderNumber]=useState(0);
    const[isMoved,setisMoved]=useState(false)
  const listRef = useRef();
  const handleClick = (directions) => {
      setisMoved(true)
    let distance = listRef.current.getBoundingClientRect().x-50
    if (directions === "left" &&sliderNumber>0) {
        setSliderNumber(sliderNumber-1)
      listRef.current.style.transform = `translateX(${230+distance}px)`;
    }
    if(directions==="right" && sliderNumber<5){
        setSliderNumber(sliderNumber+1)
        listRef.current.style.transform = `translateX(${-230+distance}px)`;    }
  
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="Wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{display:!isMoved&& "none"}}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
         
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
