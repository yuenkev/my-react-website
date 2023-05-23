import React from "react";
import classes from './Image.module.css';
import coder from './Images/coder.jpg';

const Image = (props) => {
    return <div className={classes.image}> 
        <img src={coder} alt="coder"></img>
    </div>
}

export default Image;