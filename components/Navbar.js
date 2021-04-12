import React, { useState } from 'react';

const Navbar = ({displayNavbar}) => {

    const [isHidden, setIsHidden] = useState(true);

    function notHidden() {
        setIsHidden(false);
    }

    function hidden() {
        setIsHidden(true);
    }

    return (
        // <div className="container navbar md:flex md:items-center md:justify-between p-4">
        <div className= {displayNavbar ? 'navbar md:flex md:items-center md:justify-between p-4' : 'displayNone'}>
            <div className="flex items-center justify-between mb-4 md:mb-0">
                <h4 className="text-white">
                    <a className="no-underline text-white hover:white" href="#">
                        La Luck
                    </a>
                </h4>

                <div className="text-white hover:text-orange md:hidden" href="#" onClick={isHidden ? notHidden : hidden}>
                    <div className="hamburger">|||</div>
                </div>
            </div>

            <nav className={isHidden ? "hidden md:block" : ""}>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4">
                        <a className="block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#concept">
                            Le Concept
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#brasserie">
                            La Brasserie
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#ludotheque">
                            La Ludothèque
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#events">
                            Nos Évènements
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="button" href="#contact">
                            Réserver
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
