import React from "react";
import { useDispatch, useSelector } from "react-redux";
import search_icon_dark from "../../assets/images/search-icon-dark-mode.svg";
import search_icon_light from "../../assets/images/search-icon-light-mode.svg";
import { setSearchValue } from "../../store/store";
import classes from "./Input.module.css";

const Input = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const searchValue = useSelector((state) => state.search.searchValue);

  return (
    <div
      className={`${
        theme === "dark_mode" ? classes.bg_dark : classes.bg_light
      } ${classes.input}`}
    >
      <img
        src={theme === "dark_mode" ? search_icon_dark : search_icon_light}
        alt="search icon"
      />

      <input
        value={searchValue}
        type="text"
        placeholder="Search for a country"
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
    </div>
  );
};

export default Input;
