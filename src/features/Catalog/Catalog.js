import React, { useState } from "react";
import "./Catalog.scss";
import Wrapper from "../Wrapper/Wrapper";
import SearchBar from "./../SearchBar/SearchBar";
import CatalogSelects from "./../../common/CatalogSelects/CatalogSelects";
import CatalogFilmsList from "./../../common/CatalogFilmsList/CatalogFilmsList";
import { Link } from "react-router-dom";

function Catalog(props) {
  return (
    <section className="catalog">
      <Wrapper>
        <SearchBar />
        <div className="catalog__container">
          <div className="orange__line" />
          <div className="catalog__selects_container">
            <CatalogSelects />
          </div>
          <CatalogFilmsList />
          <button className="catalog_btn">More</button>
        </div>
      </Wrapper>
    </section>
  );
}

export default Catalog;
