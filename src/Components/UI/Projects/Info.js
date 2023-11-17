import React from "react";
import classes from "./Info.module.css";

import { Fade } from "react-awesome-reveal";

const Info = (props) => {
  return (
    <div className={classes.info}>
      <Fade direction="down" duration={1200} triggerOnce="true">
        <h2 className={classes.name}>{props.name}</h2>
      </Fade>
      <Fade direction="down" duration={1000} triggerOnce="true">
        <p className={classes.para}>{props.para}</p>
        <a href={props.link} className={classes.git}>
          View Source Code
        </a>
      </Fade>
    </div>
  );
};

export default Info;
