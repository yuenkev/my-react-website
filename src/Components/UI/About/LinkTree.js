import React from "react";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import classes from "./LinkTree.module.css";


const LinkTree = (props) => {

    return <div className={classes.links}> 

        <a href="mailto: yuenkev@sheridancollege.ca" className={classes.link}><MdEmail></MdEmail></a>
        <a href="https://www.linkedin.com/in/yuenkev/" className={classes.link}><AiFillLinkedin></AiFillLinkedin></a>
        <a href="https://github.com/yuenkev" className={classes.link}><AiFillGithub></AiFillGithub></a>

    </div>
}

export default LinkTree;
