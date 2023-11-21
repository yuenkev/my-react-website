import React from "react";
import classes from "./Image.module.css";
import img1 from "./Images/expenseTracker.png";
import img2 from "./Images/volTracker.png";

import { Fade } from "react-awesome-reveal";

const Image = (props) => {
  return (
    <Fade direction="down" duration={1000} triggerOnce="true">
      <div className={classes.image}>
        <img src={props.img ? img1 : img2} alt="project img"></img>
      </div>
    </Fade>
  );
};

export default Image;
