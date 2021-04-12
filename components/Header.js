import React, {useState} from 'react'
import Navbar from '../components/Navbar.js'

const Header = () => {

    return (
        <div className="header flex flex-col justify-center items-center h-screen">
            <Navbar></Navbar>
            <div className="header_title">
                <h1>Bienvenue à</h1>
                <img className="p-3" src="/assets/img/logo/logo_laluck.svg" alt="La Luck" />
            </div>
        </div>
    )
}

export default Header
