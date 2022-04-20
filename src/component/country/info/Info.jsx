import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Content from "../content/Content";
import classes from "./Info.module.css";

const Info = ({
  img,
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
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={classes.info}>
      <button
        className={theme === "dark_mode" ? classes.btn_dark : classes.btn_light}
        onClick={() => navigate("/")}
      >
        &#8592; Back
      </button>

      <div className={classes.contents}>
        <img className={classes.image} src={img} alt="flag" />

        <Content
          name={name}
          nativeName={nativeName}
          population={population}
          region={region}
          subregion={subregion}
          capital={capital}
          domain={domain}
          languages={languages}
          currencies={currencies}
        />
      </div>
    </div>
  );
};

export default Info;
