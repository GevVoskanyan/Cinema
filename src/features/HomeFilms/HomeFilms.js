import React from "react";
import "./HomeFilms.scss";
import Slider from "react-slick";
import RatingComponent from "../../common/RatingComponent/RatingComponent";

function HomeFilms(props) {
  const { data, title } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home_films">
      <div className="home_films_container">
        <h2 className="home_films_title">{title}</h2>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id} className="home_films_slides">
              <figure className="home_films_slides_img">
                <img src={d.img} alt="" />
              </figure>
              <div className="home_films_slides_info">
                <div className="home_films_slides_title">{d.title}</div>
                <div className="home_films_rating_voters">
                  <RatingComponent />
                  <span className="home_filmshome_voters">180k Voters</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeFilms;
