import React, { useState } from "react";
import "./Catalog.scss";
import Wrapper from "../Wrapper/Wrapper";
import SearchBar from "./../SearchBar/SearchBar";
import Select from "react-select";
import countries from "country-list";
import { genre } from "../../data/data";

function Catalog(props) {
  const [year, setYear] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [country, setCountry] = useState("");

  const countryOptions = countries.getData().map((country) => ({
    value: country.code,
    label: country.name,
  }));
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let year = currentYear; year >= currentYear - 100; year--) {
    yearOptions.push({ value: year, label: year.toString() });
  }

  return (
    <section className="catalog">
      <Wrapper>
        <SearchBar />
        <div className="catalog__container">
          <div className="orange__line" />
          <div className="catalog__selects_container">
            <Select
              value={genreValue}
              onChange={setGenreValue}
              options={genre}
              className="catalog__select"
              placeholder="Genre"
            />

            <Select
              value={country}
              onChange={setCountry}
              options={countryOptions}
              className="catalog__select"
              placeholder="Country"
            />
            <Select
              value={year}
              onChange={setYear}
              options={yearOptions}
              className="catalog__select"
              placeholder="Year"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Catalog;
