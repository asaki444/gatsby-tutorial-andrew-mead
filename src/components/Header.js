import React from 'react';
import {Link, graphql,useStaticQuery} from 'gatsby';
import headerStyles from './Header.module.scss';

const Header = () => {
  
        const data = useStaticQuery(graphql` 
            query {
            site{
                siteMetadata{
                    title
                }
            }
        }`)

   console.log("data", data);
    return (
        <header className={headerStyles.header}>
            <h1> 
                <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
                </h1>
            <nav>
                <ul className={headerStyles.nav_list}>
                    <li>
                        <Link className={headerStyles.nav_item} 
                        to="/">Home</Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.nav_item}  
                          activeClassName={headerStyles.activeNavItem}
                        to="/blog"> Blog</Link>
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