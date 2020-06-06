import React from 'react';
import {Link} from 'gatsby';
import headerStyles from './Header.module.scss';
import img from '../images/aditi-long-logo.png'

const Header = () => {
  

    return (
        <header className={headerStyles.header}>

               
            <nav>
                <ul className={headerStyles.nav_list}>
                    <li>
                       <Link to="/" className={headerStyles.img_nav_item}><img src={img}/></Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.nav_item}  
                          activeClassName={headerStyles.activeNavItem}
                        to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.nav_item}  
                          activeClassName={headerStyles.activeNavItem}
                        to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.nav_item} 
                          activeClassName={headerStyles.activeNavItem} 
                        to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.nav_item} 
                        activeClassName={headerStyles.activeNavItem}
                        to="/about"> About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;