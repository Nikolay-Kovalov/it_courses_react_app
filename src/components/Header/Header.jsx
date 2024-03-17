import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/"><img src="" alt="logo"/></Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;