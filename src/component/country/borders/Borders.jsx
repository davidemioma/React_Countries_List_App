import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import classes from "./Borders.module.css";

const Borders = ({ borders }) => {
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${classes.borders} ${
        theme === "dark_mode" ? classes.bg_dark : classes.bg_light
      }}`}
    >
      {borders?.map((border, i) => (
        <div
          key={i}
          className={`${
            theme === "dark_mode" ? classes.bg_dark : classes.bg_light
          }`}
          onClick={() => navigate(`/country/${border}`)}
        >
          {border}
        </div>
      ))}
    </div>
  );
};

export default Borders;
