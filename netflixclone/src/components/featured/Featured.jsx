import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.css";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
              <option >
                  Genre
              </option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasty">Fantasty</option>
              <option value="historical">Historical</option>
              <option value=" horror">Horror</option>
              <option value=" romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value=" thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed
          velit perspiciatis quam eveniet mollitia enim ipsa totam quasi
          aliquam, alias deleniti maiores. Perspiciatis perferendis quas
          doloremque aut possimus reiciendis?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span> Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
