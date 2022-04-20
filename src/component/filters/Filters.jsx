import React from "react";
import arrow_white from "../../assets/images/arrow-white.svg";
import arrow_black from "../../assets/images/arrow-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, setFilterValue } from "../../store/store";
import classes from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const filterIsOpen = useSelector((state) => state.filters.isOpen);

  const filterValue = useSelector((state) => state.filters.filterValue);

  const getFilterValue = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <div
      className={`${classes.filters} ${
        theme === "dark_mode" ? classes.dark_mode : classes.light_mode
      }`}
    >
      <div
        className={classes.filter_top}
        onClick={() => dispatch(toggleFilter())}
      >
        <span>{filterValue ? filterValue : "All"}</span>

        <img
          className={filterIsOpen ? classes.rotate : ""}
          src={theme === "dark_mode" ? arrow_white : arrow_black}
          alt=""
        />
      </div>

      {filterIsOpen && (
        <div className={classes.filter_list} onClick={getFilterValue}>
          <option value="">All</option>

          <option value="africa">Africa</option>

          <option value="america">America</option>

          <option value="asia">Asia</option>

          <option value="europe">Europe</option>

          <option value="oceania">Oceania</option>
        </div>
      )}
    </div>
  );
};

export default Filters;
