import React from 'react';
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from "react-router-dom";
  



function Header() {


    return (
    <div className="header">
         <Link to="/">
            <img
            className="header_icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="airbnb logo"
            />
         </Link>

            <div className="header_center">
            <input type="text" type="search" />
                <SearchIcon />
            </div>

            <div className="header_right"> 
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

    </div>
  );
}

export default Header;