import React from "react";
import RatingComponent from "../RatingComponent/RatingComponent";
import "./FilmCart.scss";

function FilmCart({ data }) {
  return (
    <div key={data.id} className="films_slides">
      <figure className="films_slides_img">
        <img src={data.img} alt="" />
      </figure>
      <div className="films_slides_info">
        <div className="films_slides_title">{data.title}</div>
        <div className="films_slides_rating_voters">
          <RatingComponent />
          <span className="films_slides_voters">180k Voters</span>
        </div>
      </div>
    </div>
  );
}

export default FilmCart;
