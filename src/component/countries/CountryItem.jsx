import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import classes from "./Countries.module.css";

const CountryItem = ({ id, name, flagImg, population, region, capital }) => {
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${classes.country} ${
        theme === "dark_mode" ? classes.bg_dark : classes.bg_light
      }`}
      onClick={() => navigate(`/country/${id}`)}
    >
      <img src={flagImg} alt="flag" />

      <div className={classes.content}>
        <h2>{name}</h2>

        <p>Population: {population}</p>

        <p>Region: {region}</p>

        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryItem;
