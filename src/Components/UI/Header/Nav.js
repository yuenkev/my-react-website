import React from "react";
import classes from './Nav.module.css';

const Nav = (props) => {



    //{props.navState ? [classes.nav, classes.active].join('') : [classes.nav] }
    return <ul className={props.navState ? [classes.nav, classes.active].join(' ') : [classes.nav]}>
        <li><a href="#about" className={classes.child}>About</a></li>
        <li><a href="#project" className={classes.child}>Work</a></li> 
        <li><a href="#footer" className={classes.child}>Contact</a></li>
    </ul>
}

export default Nav;