import React from "react";
import classes from "./Image.module.css";
import img1 from "./Images/expenseTracker.png";
import img2 from "./Images/volTracker.png";

const Image = (props) => {
  return (
    <div className={classes.image}>
      <img src={props.img ? img1 : img2} alt="project img"></img>
    </div>
  );
};

export default Image;
