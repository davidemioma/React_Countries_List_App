import React from "react";
import { useSelector } from "react-redux";
import classes from "./Content.module.css";

const Content = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  domain,
  languages,
  currencies,
}) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${
        theme === "dark_mode" ? classes.text_dark : classes.text_light
      } ${classes.content}`}
    >
      <div>
        <h3>{name}</h3>

        <p>Native Name: {nativeName}</p>

        <p>Population: {population}</p>

        <p>Region: {region}</p>

        <p>Sub Region: {subregion}</p>

        <p>Capital: {capital}</p>
      </div>

      <div>
        <p>Top Level Domain: {domain?.length > 0 && domain?.join(", ")}</p>

        <p>Languages: {languages?.length > 0 && languages?.join(", ")}</p>

        <p>Currencies: {currencies?.length > 0 && currencies?.join(", ")}</p>
      </div>
    </div>
  );
};

export default Content;
