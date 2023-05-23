import React, {useState} from "react";
import classes from "./Header.module.css";
import Logo from "./Logo";
import Nav from "./Nav";

import {AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai';

const Header = (props) => {

const [nav, setNav] = useState(false);

  return (
    <header className={classes.header}>
      <Logo className={classes.logo}></Logo>
      <Nav className={classes.nav} navState={nav}></Nav>

      {/* using onclick to toggle the useState/menu from on/off  */}
      <div onClick={() => setNav(!nav)} className={classes.mobile_btn}> 

        {/* simple  tenary */}
        {nav ? <AiOutlineClose size={25}></AiOutlineClose> : <AiOutlineMenu size={25}></AiOutlineMenu> }
      </div>
    </header>
  );
};

export default Header;
