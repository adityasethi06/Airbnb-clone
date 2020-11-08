import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <img 
                style={{cursor: "pointer"}}
                alt="airbnb"
                className="header_icon"
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a"/>
            <div className="header_center">
                <input placeholder="Start your search" type="text"/>
                <SearchIcon fontSize="small" style={{backgroundColor: "red", borderRadius: "999px", padding: "5px", cursor: "pointer"}}/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMore/>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
