import React from "react";
import Logo from "../Header/Logo";
import classes from "./Info.module.css";
import { BiCopyright } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const Info = (props) => {
  return (
    <div>
      <Fade direction="down" duration={1200} triggerOnce="true">
        <Logo></Logo>
      </Fade>
      <Fade direction="down" duration={1000} triggerOnce="true">
        <h3 className={classes.title}>Developer/Designer</h3>
      </Fade>
      <Fade direction="down" duration={1200} triggerOnce="true">
        <h3 className={classes.copy}>
          2023 Kevin Yuen <BiCopyright></BiCopyright>. All Rights Resevered.
        </h3>
      </Fade>
    </div>
  );
};

export default Info;
