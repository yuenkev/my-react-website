import React from "react";
import classes from "./Intro.module.css";
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import LinkTree from "./LinkTree";

import { Fade } from "react-awesome-reveal";

const Intro = (props) => {
  return (
    <div className={classes.intro}>
      <Fade direction="down" duration={1200} triggerOnce="true">
        <h1>
          Howdy <FaHandSparkles className={classes.hand}></FaHandSparkles> , I'm
          Kevin!
        </h1>
      </Fade>

      <Fade direction="down" duration={1000} triggerOnce="true">
        <h3>
          I am a Developer/Designer passoniate about creating engaing and
          impactful experiences.{" "}
        </h3>

        <LinkTree></LinkTree>
      </Fade>

      <Fade direction="down" duration={1200} triggerOnce="true">
        <h4>
          Feel free to check out my stuff!{" "}
          <AiOutlineArrowDown></AiOutlineArrowDown>
        </h4>
      </Fade>
    </div>
  );
};

export default Intro;
