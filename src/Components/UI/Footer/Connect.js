import React from "react";
import classes from "./Connect.module.css";
import LinkTree from "./LinkTree";
import { AiOutlineArrowDown } from "react-icons/ai";

const Connect = (props) => {
  return (
    <div className={classes.connect}>
      {/* <BiHappyAlt className={classes.happy}></BiHappyAlt> */}
      <h3 className={classes.greeting}>
        What if it could turn out better than you imagined?{" "}
      </h3>
      <h4 className={classes.reach}>
        {" "}
        Feel free to reach out <AiOutlineArrowDown></AiOutlineArrowDown>{" "}
      </h4>
      <LinkTree></LinkTree>
    </div>
  );
};

export default Connect;
