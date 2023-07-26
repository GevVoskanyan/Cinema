import React from "react";
import "./Home.scss";
import Header from "./../../layouts/Header/Header";
import SearchBar from "./../SearchBar/SearchBar";

function Home() {
  return (
    <section className="home">
      <Header />
      <SearchBar />
    </section>
  );
}

export default Home;
//clip-path: polygon(50% 3%, 100% 0, 100% 46%, 100% 100%, 51% 96%, 0 100%, 0 48%, 0 0);
