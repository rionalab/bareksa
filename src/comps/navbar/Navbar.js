import React from 'react'
import Styles from './style.module.scss'
import Logo from 'assets/images/logo.svg'
import User from './user/User';
import Search from './search/Search';
import Notification from './notification/Notification';
import Setting from './setting/Setting';
import Burger from 'assets/images/menu.png';

function Navbar() {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.logo}>
                <img src={Logo} alt='' />
            </div>
            <User />
            <div className={Styles.tools}>
                <Search />
                <Notification />
                <Setting />
            </div>
            <div className={Styles.mobileMenu}>
                <img src={Burger} alt="" />
            </div>
        </div>
    );
}

export default Navbar
