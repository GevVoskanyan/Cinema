import React, { useCallback } from "react";
import { useState } from "react";
import Select from "react-select";

import { TfiMenu } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.scss";
import { Link } from "react-router-dom";
const options = [
  { name: "Fantasy", id: 1 },
  { name: "Romance", id: 2 },
  { name: "Thriller", id: 3 },
  { name: "Western", id: 4 },
  { name: "Comedy", id: 5 },
];

function SearchBar(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const CustomPlaceholder = () => (
    <div className="custom-placeholder">
      <TfiMenu className="menu-icon" />
      Categories
    </div>
  );

  const onSelectChangeHandler = useCallback((ev) => {
    console.log(ev);
  }, []);
  return (
    <div className="search_bar">
      <div className="search_bar_container">
        <div className="search_bar_left_side">
          <Select
            defaultValue={selectedOption}
            onChange={(ev) => onSelectChangeHandler(ev)}
            options={options}
            className="search_bar_select"
            components={{ Placeholder: CustomPlaceholder }}
            getOptionLabel={(o) => o.name}
            getOptionValue={(o) => o.id}
            isSearchable={false}
          />
        </div>
        <div className="search_bar_right_side">
          <div className="search_bar_inp_container">
            <input
              type="search"
              className="search_bar_inp"
              placeholder="Search"
            />
            <BsSearch className="search_bar_search_icon" />
          </div>
          <Link to="/ticket" className="search_bar_btn btn">
            Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

{
  /* <ul className="search_bar_select">
            <li
              className="search_bar_select_main"
              onClick={() => setIsSubOpen(!isSubOpen)}
            >
              <AiOutlineMenu className="search_bar_select_main_icon" />
              Categories
              {isSubOpen && (
                <ul className="search_bar_select_sub">
                  {options.map((c) => (
                    <li
                      key={c.id}
                      className="search_bar_select_sub_list"
                      onClick={selectCategoryHandler}
                    >
                      {c.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul> */
}
