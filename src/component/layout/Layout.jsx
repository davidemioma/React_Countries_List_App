import React from "react";
import { useSelector } from "react-redux";
import Nav from "../nav/Nav";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div>
      <Nav />

      <div
        className={`${
          theme === "dark_mode" ? classes.bg_dark : classes.bg_light
        } ${classes.layout}`}
      >
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
