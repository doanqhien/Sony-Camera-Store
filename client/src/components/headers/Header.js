import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {   
    
    const [offsetY,setOffsetY] = useState(0);
    const [menu,setMenu] = useState(false); 
    const [theme,setTheme] = useState('')

    useEffect(() => {
        setTheme(localStorage.getItem('selected-theme'))
        window.onscroll = () => {
            setOffsetY(window.pageYOffset);
        };
    });
    /* menu */
    function showMenu() {
        setMenu(menu ? false : true);
    }
    /* remove meu after click */
    function hiddenMenu() {
        setMenu(false);
    }
    /* dark mode */
    if (theme) {
        document.body.classList[theme === 'dark' ? 'add' : 'remove']('dark-theme');
    } 
    function darkMode() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('selected-theme', theme === 'dark' ? 'light' : 'dark');
    }; 

    return (
    <div>
        <header className={offsetY >= 250 ? "l-header scroll-header" : "l-header"} id="header">
            <nav className="nav bd-container">
                <a href="/" className="nav__logo">SONY</a>
                <div className={menu === false ? "nav__menu" : "nav__menu show"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink exact activeClassName="nav__link-active" onClick = {hiddenMenu} className="nav__link" to="/">Home</NavLink></li>
                        <li className="nav__item"><NavLink activeClassName="nav__link-active" onClick = {hiddenMenu} className="nav__link" to="/info">News</NavLink></li>
                        <li className="nav__item"><NavLink activeClassName="nav__link-active" onClick = {hiddenMenu} className="nav__link" to="/products">Products</NavLink></li>
                        <li className="nav__item"><NavLink activeClassName="nav__link-active" onClick = {hiddenMenu} className="nav__link" to="/support">Support</NavLink></li>
                        <li className="nav__item"><NavLink activeClassName="nav__link-active" onClick = {hiddenMenu} className="nav__link" to="/login"><i className='nav__icon bx bx-cart'/></NavLink></li>
                        <li><i className={theme === 'dark' ? "bx bx-moon change-theme" : "bx bx-sun change-theme"} onClick = {darkMode} /></li>
                    </ul>
                </div>
                <div className="nav__toggle" onClick = {showMenu} id="nav-toggle">
                <i className="bx bx-menu" />
                </div>
            </nav>    
        </header> 
        <div>
            <a href="# " className={offsetY >= 700 ? "btn btn-outline-success scrolltop show-scroll" : "btn btn-outline-success scrolltop"} id="scroll-top">
                <i className=" bx bx-chevron-up scrolltop__icon" />
            </a>
        </div>
    </div>
    )
}

