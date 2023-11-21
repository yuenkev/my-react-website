import React from "react";
import classes from "./Logo.module.css";
import { Fade } from "react-awesome-reveal";

const Logo = (props) => {
  return (
    <div>
      <Fade direction="down" duration={1200} triggerOnce="true">
        <h1 className={classes.name}>yuenkev</h1>
      </Fade>
    </div>
  );
};

export default Logo;
