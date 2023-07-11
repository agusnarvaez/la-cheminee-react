import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoLaCheminee from '../assets/logos/logo-la-cheminee.svg'
import '../assets/styles/header.css'
import HeaderNav from "./Header/HeaderNav"
import {scrollToTop } from '../utils/headerUtils.js'
export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    var burgerMenuIconClass = 'bi bi-list text-center d-sm-block d-lg-none z-index-150 col-1 p-0'
    var crossIconClass = 'bi bi-x-lg text-center d-sm-block d-lg-none z-index-150 col-1 p-0'
    var navClass = 'navbar col-12 col-lg-5 col-xl-3 d-flex justify-content-between flex-nowrap p-0 ps-lg-6'+(burgerMenu?' show':'')


    return (
        <header className="container-fluid p-0 row justify-content-between sticky-top bg-white px-3 py-3 py-lg-1 m-0">
            <NavLink
                onClick={scrollToTop}
                className="col-6 col-md-5 col-lg-4 d-flex align-center p-0"
                to='/'
                title='inicio'
                exact="true"
            >
                <img className="col-12 col-md-8 col-lg-5 h-auto" alt="Logo La Cheminée" src={logoLaCheminee}  />
            </NavLink>
            <i  className={`icon ${burgerMenu ? crossIconClass : burgerMenuIconClass}`} onClick={() => setBurgerMenu(!burgerMenu)}></i>
            <nav className={navClass} id="navBar">
                <HeaderNav burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            </nav>
        </header>
    )
}