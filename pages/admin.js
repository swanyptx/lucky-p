
import React, { useState } from "react";
import Head from 'next/head'
import NewGame from '../components/NewGame'
import UpdateGame from "../components/updateGame";
import BookingTable from "../components/BookingTable";

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5500/games');
    const data = await res.json()

    return {
        props: { allGamesFromAPI: data }
    }
}

const Admin = ({ allGamesFromAPI }) => {


    const [GamesArray, setGamesArray] = useState(allGamesFromAPI)
    const [isHidden, setIsHidden] = useState(true);
    const [component, setComponent] = useState("")

    function notHidden() {
        setIsHidden(false);
    }

    function hidden() {
        setIsHidden(true);
    }

    const componentAppears = () => {
        if (component == "add") {
            return (
                <NewGame />
            )
        }

        if (component == "modify") {
            return (
                <UpdateGame
                    games={GamesArray}
                />
            )
        } else {
            return (
                <BookingTable />
            )
        }
    }

    return (
        <div>
            <Head>
                <title>La Luck - Admin</title>
                <link rel="icon" href="/icon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <div className="adminSide">
                <div className='navbar md:flex md:items-center md:justify-between p-4'>
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
                                <a className="block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" onClick={() => setComponent("add")}>
                                    Ajouter un Jeu
                        </a>
                            </li>
                            <li className="md:ml-4">
                                <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" onClick={() => setComponent("modify")}>
                                    Modifier/Supprimer un Jeu
                        </a>
                            </li>
                            <li className="md:ml-4">
                                <a className="border-t block no-underline hover:underline py-2 text-white hover:white md:border-none md:p-0" onClick={() => setComponent("reserve")}>
                                    Réservations
                        </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    {componentAppears()}
                </div>
            </div>
        </div>
    )
}

export default Admin
