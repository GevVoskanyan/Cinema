import React, { useState } from "react";
import Select from "react-select";
import countries from "country-list";
import { genre } from "../../data/data";
import "./CatalogSelects.scss";

function CatalogSelects(props) {
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
    <div className="catalog__select">
      <Select
        value={genreValue}
        onChange={setGenreValue}
        options={genre}
        placeholder="Genre"
        className="select"
      />

      <Select
        value={country}
        onChange={setCountry}
        options={countryOptions}
        placeholder="Country"
        className="select"
      />
      <Select
        value={year}
        onChange={setYear}
        options={yearOptions}
        placeholder="Year"
        className="select"
      />
    </div>
  );
}

export default CatalogSelects;
