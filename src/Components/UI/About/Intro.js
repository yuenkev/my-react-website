import React from "react";
import classes from "./Intro.module.css";
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import LinkTree from "./LinkTree";

const Intro = (props) => {
  return (
    <div className={classes.intro}>
      <h1>
        Howdy <FaHandSparkles className={classes.hand}></FaHandSparkles> , I'm
        Kevin!
      </h1>

      <h3>
        I am a Developer/Designer passoniate about creating engaing
        and impactful experiences.{" "}
      </h3>

      <LinkTree></LinkTree>

      <h4>
        Feel free to check out my stuff!{" "}
        <AiOutlineArrowDown></AiOutlineArrowDown>
      </h4>
    </div>
  );
};

export default Intro;
