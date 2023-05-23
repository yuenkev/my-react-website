import React from "react";
import Logo from "../Header/Logo";
import classes from "./Info.module.css";
import {BiCopyright} from "react-icons/bi";

const Info = (props) => {
  return (
    <div>
      <Logo></Logo>
      <h3 className={classes.title}>Developer/Designer</h3>
      <h3 className={classes.copy}>
        2023 Kevin Yuen <BiCopyright></BiCopyright>. All Rights Resevered.
      </h3>
    </div>
  );
};

export default Info;
