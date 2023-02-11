import "./Styles/Header.scss";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

export default function Header({ setCityName }) {
  const [searchVal, setSearchVal] = useState("");
  function searchSubmit(event) {
    event.preventDefault();
    setCityName(searchVal);
  }
  return (
    <header className="header">
      <a
        className="logo"
        href="https://openweathermap.org/"
        target="_blank"
      ></a>
      <div className="inputForm">
        <form className="search_form" onSubmit={searchSubmit}>
          <div className="search_box">
            <input
              type="text"
              placeholder="Enter a city name"
              className="search"
              id="search"
              required
              onChange={(event) => setSearchVal(event.target.value)}
            />
            <label htmlFor="search" onClick={(event) => setCityName(searchVal)}>
              <ImSearch />
            </label>
          </div>
        </form>
      </div>
    </header>
  );
}
