import React from "react";
import "./Home.scss";
import Wrapper from "../Wrapper/Wrapper";
import SearchBar from "./../SearchBar/SearchBar";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeFilms from "../HomeFilms/HomeFilms";
import Comments from "../Comments/Comments";
import { latest } from "../../data/data";

function Home() {
  return (
    <section className="home">
      <Wrapper>
        <SearchBar />
        <HomeBanner />
        <HomeFilms title="Latest" data={latest} />
        <HomeFilms title="Coming soon" data={latest} />
        <HomeFilms title="Featured movies" data={latest} />
        <button type="button" className="more">
          More
        </button>
        <Comments />
      </Wrapper>
    </section>
  );
}

export default Home;
//clip-path: polygon(50% 3%, 100% 0, 100% 46%, 100% 100%, 51% 96%, 0 100%, 0 48%, 0 0);
