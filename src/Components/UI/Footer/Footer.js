import React from "react";
import classes from "./Footer.module.css";
import Info from "./Info";
import Connect from "./Connect";

import { Fade } from "react-awesome-reveal";

const Footer = (props) => {
  return (
    <Fade direction="down" duration={1000} triggerOnce="true">
      <div className={classes.footer} id="footer">
        <Info className={classes.info}></Info>
        <Connect className={classes.connect}></Connect>
      </div>
    </Fade>
  );
};

export default Footer;
