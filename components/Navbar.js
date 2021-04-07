import React, { useState } from 'react';

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(true);

    function notHidden() {
        setIsHidden(false);
    }

    function hidden() {
        setIsHidden(true);
    }

    return (
        <div className="container navbar md:flex md:items-center md:justify-between p-4">
            <div className="flex items-center justify-between mb-4 md:mb-0">
                <h4 className="text-white">
                    <a className="no-underline text-white hover:white" href="#">
                        La Luck
                    </a>
                </h4>

                <div className="text-white hover:text-orange md:hidden" href="#" onClick={isHidden ? notHidden : hidden}>
                    <div className="hamburger transform rotate-90 hover:transform scale-300">|||</div>
                </div>
            </div>

            <nav className={isHidden ? "hidden md:block" : ""}>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4">
                        <a className="block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#">
                            Accueil
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#">
                            La Brasserie
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#">
                            La Ludothèque
                        </a>
                    </li>
                    <li className="md:ml-4">
                        <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
