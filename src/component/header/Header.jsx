import React from "react";
import Inputs from "../inputs/Input";
import Filters from "../filters/Filters";
import classes from "./Header.module.css";

const header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.input}>
        <Inputs />
      </div>

      <Filters />
    </div>
  );
};

export default header;
