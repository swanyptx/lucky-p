import React, { useState } from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Menu from '../components/Card/Menu'

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5500/menus');
    const data = await res.json()

    return {
        props: { allMenusFromAPI: data }
    }
}

const Brasserie = ({ allMenusFromAPI }) => {

    const [carteMenu, setcarteMenu] = useState(allMenusFromAPI)
    const [carte, setCarte] = useState("")
    const [bonus, setBonus] = useState("")
    const [bonusTwo, setBonusTwo] = useState("")
    const [bonusThree, setBonusThree] = useState("")

    const listeMenu = () => {

        const menu = carteMenu.filter((menu) => {
            if (menu.type === carte || menu.type == bonus || menu.type == bonusTwo || menu.type == bonusThree) {
                return menu
            }
        })
        return (
            <Menu
                data={menu}
                name={carte}
            />
        )
    }

    const [isHidden, setIsHidden] = useState(true);

    function notHidden() {
        setIsHidden(false);
    }

    function hidden() {
        setIsHidden(true);
    }

    return (
        <div>
            <Head>
                <title>La Brasserie</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
            <Navbar displayNavbar={true}></Navbar>
            <section className="carte py-28">
                <h2 className="hidden md:block py-20 text-center">Nos Cartes</h2>
                <div className="container sm:py-10 flex flex-col items-center ">
                    <div className="w-full">

                        <div className="text-white hover:text-orange block md:hidden" href="#" onClick={isHidden ? notHidden : hidden}>
                            <h2 className="titleMobile text-center p-4 rounded">Nos Cartes</h2>
                        </div>
                        <nav className={isHidden ? "hidden sm:block" : ""}>
                            <ul className="menuUl grid grid-cols-1 md:grid-cols-4 gap-4 justify-around p-10">
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Burger"); setBonus(""); setBonusTwo(""); setBonusThree(""); hidden() }}>Burgers</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Dessert"); setBonus(""); setBonusTwo(""); setBonusThree(""); hidden() }}>Desserts</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Soft"); setBonus("Coffee"); setBonusTwo("Tea"); setBonusThree(""); hidden() }}>Softs, Cafés, Thé</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("DraughtBeer"); setBonus("BottledBeer"); setBonusTwo("Cider"); setBonusThree(""); hidden() }}>Bières, Cidres</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Vin"); setBonus("WhiteWine"); setBonusTwo("PinkWine"); setBonusThree("RedWine"); hidden() }}>Vins</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Cocktail"); setBonus("CocktailNoAlcool"); setBonusTwo(""); setBonusThree(""); hidden() }}>Cocktails</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Poutine"); setBonus(""); setBonusTwo(""); setBonusThree(""); hidden() }}>Poutines</li>
                                <li className="menuLi m-2 p-4 rounded flex justify-center items-center" onClick={() => { setCarte("Brunch"); setBonus(""); setBonusTwo(""); setBonusThree(""); hidden() }}>Brunchs</li>
                            </ul>
                        </nav>
                        <div className="container flex justify-center text-center py-10">
                            {listeMenu()}
                        </div>

                    </div>
                </div>
            </section>
            <Booking></Booking>
            <Footer />
        </div>
    )
}

export default Brasserie