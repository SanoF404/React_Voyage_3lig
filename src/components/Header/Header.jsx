import {  NavLink  } from "react-router-dom";
import Styles from "./Header.module.css";
function Header() {
    return(
        <header className={Styles.header}>
            <h1>Travel agency</h1>
            <nav className={Styles.nav}>
                <NavLink to="/" className={({isActive})=>isActive ? Styles.active:""}>Accueil</NavLink>
                <NavLink to="/" className={({isActive})=>isActive ? Styles.active:""}>Destinations</NavLink>
                <NavLink to="/" className={({isActive})=>isActive ? Styles.active:""}>Contact</NavLink>

            </nav>
        </header>
    )
}
export default Header;