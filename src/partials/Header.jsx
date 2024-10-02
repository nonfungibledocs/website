import React, { Fragment, useContext, useEffect, useState } from "react"
import { Route, Routes, Link, Outlet, BrowserRouter, useNavigate } from "react-router-dom"
import styles from '../styles.module.css'
import pico from '../pico.min.css'
import {ThemeContext, UserContext, UserProvider} from "../context.js";

function Header({brand}) {
  const {user, theme, setTheme} = useContext(UserContext);
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark":"light");
  };
  return (<nav className="nfd-gradient-bg container-fluid" data-theme={theme}>
      <ul>
    <li>
      <Link to="/" className={pico.contrast}>
        <img src="/images/icons/favicon-32x32.png"/> &nbsp;&nbsp;
        <strong>nonfungibledocs.com</strong>  - improve document security. <span class="hidden md:block">detect source of the leak by creating multiple versions in the first place</span> 
        </Link>
    </li>
  </ul>
  <ul>
    <li>
        <span role="link" className={pico.secondary} onClick={()=> { toggleTheme() }} >
          <svg viewBox="0 0 24 24" height="24" width="24" version="1.1">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="ic_fluent_dark_theme_24_regular" fill="#546e7a" fillRule="nonzero">
                  <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
                </g>
              </g>
            </g>
          </svg>&nbsp;&nbsp;
        </span>
    </li>
    <li>
      <details role="list" dir="rtl" open>
      <summary aria-haspopup="listbox" role="link" className={"secondary"}>{user && <img className={styles.profileicon} src={user.picture} />}</summary>
        <ul role="listbox">
          <li><Link to="/">Home</Link></li>
          <li><Link to="https://youtu.be/CGAblZfXb5U">Video</Link></li>
          <li><Link to="https://github.com/nonfungibledocs">Github</Link></li>
          <li><Link to="/app">Try</Link></li>
        </ul>
      </details>
    </li>
    <li>&nbsp;</li>
  </ul>
</nav>)
};

export default Header;
