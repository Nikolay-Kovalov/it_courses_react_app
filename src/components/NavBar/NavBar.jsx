import styles from './NavBar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;