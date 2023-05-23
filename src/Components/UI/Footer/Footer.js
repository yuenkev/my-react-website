import React from "react";
import classes from "./Footer.module.css"
import Info from "./Info";
import Connect from "./Connect";


const Footer = (props) => {

    return <div className={classes.footer} id="footer">
        <Info className={classes.info}></Info>
        <Connect className={classes.connect}></Connect>
    </div>

}

export default Footer;