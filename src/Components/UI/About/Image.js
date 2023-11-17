import React from "react";
import classes from "./Image.module.css";
import coder from "./Images/coder.png";

import { Fade } from "react-awesome-reveal";

const Image = (props) => {
  return (
    <Fade direction="down" duration={1000} triggerOnce="true"> 
      <div className={classes.image}>
        <img src={coder} alt="coder"></img>
      </div>
    </Fade>
  );
};

export default Image;
