import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.css";

const ListItem = (index) => {
  const [isHovered, setisHovered] = useState(false);
  const trailer ="https://youtu.be/BoDrQ8JktVg?t=4"
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setisHovered(true);
      }}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src="https://i1.wp.com/www.alphr.com/wp-content/uploads/2015/10/narcos.jpeg?resize=690%2C388&ssl=1"
        alt=""
      />
      {isHovered && (
        <div>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add  className="icon" />
              <ThumbUpAltOutlined  className="icon" />
              <ThumbDownAltOutlined  className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hours 14 minutes</span>
              <span className="limit">+16</span>
              <span> 1998</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque mollitia praesentium sit animi facere aliquid quasi
              aut, unde reiciendis deserunt.
            </div>
            <div className="genre">Action</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
