import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'


const Header = (props) => {

    const [headerResult, setHeaderResult] = useState();

    const functionHandler = () => {
        if (!headerResult) {
           return true
        } else {
            return false
        }

        props.passChildData();
    }

    return (

        <div className="header">

            <Navbar></Navbar>
            <div className="header_title">
                <h1>Bienvenue à</h1>
                <img className="p-3" src="/assets/img/logo/logo_laluck.svg" alt="La Luck" />
            </div>
            <div className="choice mt-4 p-4 text-center">
                <p> Êtes-vous déjà venu à La Luck ?</p>
                <div className="buttons mt-2">
                    <button className="text-white font-bold py-2  mx-1 md:mx-3 lg:mx-5 px-4 rounded" onClick={() => functionHandler(setHeaderResult(true))}>
                        Oui
                    </button>

                    <button className="text-white font-bold py-2 mx-1 md:mx-3 lg:mx-5 px-4 rounded" onClick={() => functionHandler(setHeaderResult(false))}>
                        Non
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Header
