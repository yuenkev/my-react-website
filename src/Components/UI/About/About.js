import React from "react";
import classes from './About.module.css';

import Image from "./Image";
import Intro from "./Intro";

const About = (props) => {
    return <div className={classes.about} id="about"> 
        <Intro className={classes.intro}></Intro>
        <Image className={classes.image}></Image>
    </div>
}

export default About;