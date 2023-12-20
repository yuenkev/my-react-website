import React from "react";
import classes from "./Image.module.css";
import img1 from "./Images/expenseTracker.png";
import img2 from "./Images/volTracker.png";
import img3 from "./Images/clientWeb.png";

import { Fade } from "react-awesome-reveal";

const Image = (props) => {
  var imgNumber;

  if (props.img === 1) {
    imgNumber = img1;
  } else if (props.img === 2) {
    imgNumber = img2;
  } else if (props.img === 3) {
    imgNumber = img3;
  }

  return (
    <Fade direction="down" duration={1000} triggerOnce="true">
      <div className={classes.image}>
        <img src={imgNumber} alt="project img"></img>
      </div>
    </Fade>
  );
};

export default Image;
