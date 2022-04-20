import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import icon_moon from "../../assets/images/icon-moon.svg";
import icon_sun from "../../assets/images/icon-sun.svg";
import { toggleTheme } from "../../store/store";
import classes from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === "dark_mode" ? classes.bg_dark : classes.bg_light}>
      <nav className={`container ${classes.nav}`}>
        <h2 onClick={() => navigate("/")}>Where in the world?</h2>

        <div>
          <img
            src={theme === "dark_mode" ? icon_sun : icon_moon}
            onClick={() => dispatch(toggleTheme())}
            alt="icon"
          />

          <p>{theme === "dark_mode" ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
