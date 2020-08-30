import React from 'react';
import './Header.css';
import logo from './logo.png';

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
               <img src={logo} alt="facebooklogo"/>
               <div className="header_input">
                <SearchIcon/>
                <input type="text"/>
               </div>
            </div>

             <div className="header_middle">
                  <div className="header_option">
                    <HomeIcon fontSize="large"/>
                  </div>
                  <div className="header_option">
                    <FlagIcon fontSize="large"/>
                  </div>
                  <div className="header_option">
                    <SubscriptionsIcon fontSize = "large"/>
                  </div>
                  <div className="header_option">
                    <StorefrontIcon  fontSize = "large"/>
                  </div>
                  <div className="header_option">
                    <SupervisedUserCircleIcon fontSize = "large"/>
                  </div>
            </div>

             <div className="header_right">
                <div className="header_info">
                 <Avatar/>
                 <h4>Mingmi</h4>
                </div>
                <IconButton>
                   <AddIcon/>
                </IconButton>
                 <IconButton>
                   <ForumIcon/>
                </IconButton>
                 <IconButton>
                   <NotificationsIcon/>
                </IconButton>
                 <IconButton>
                  <ExpandMoreIcon/>
                </IconButton>

            </div>
        </div>
    )
}

export default Header
