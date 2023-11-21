import React from "react";
import classes from "./Connect.module.css";
import LinkTree from "./LinkTree";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Connect = (props) => {
  return (
    <div className={classes.connect}>
      {/* <BiHappyAlt className={classes.happy}></BiHappyAlt> */}

      <Fade direction="down" duration={1200} triggerOnce="true">
        <h3 className={classes.greeting}>
          What if it could turn out better than you imagined?{" "}
        </h3>
      </Fade>
      <Fade direction="down" duration={1000} triggerOnce="true">
        <h4 className={classes.reach}>
          {" "}
          Feel free to reach out <AiOutlineArrowDown></AiOutlineArrowDown>{" "}
        </h4>

        <LinkTree></LinkTree>
      </Fade>
    </div>
  );
};

export default Connect;
