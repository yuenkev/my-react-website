import React from "react";
import classes from "./Info.module.css";

const Info = (props) => {
  return (
    <div className={classes.info}>
      <h2 className={classes.name}>{props.name}</h2>
      <p className={classes.para}>{props.para}</p>
      <a href={props.link} className={classes.git}>
        View Source Code
      </a>
    </div>
  );
};

export default Info;
