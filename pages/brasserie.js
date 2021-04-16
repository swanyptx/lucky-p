import React, { useState } from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
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

    return (
        <div>
            <Head>
                <title>La Brasserie</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
            <Header></Header>
            <section className="carte">
                <div className="container py-20 sm:py-10 flex flex-col items-center ">
                    <h2>Nos Cartes</h2>
                    <div className="">
                        <div>
                            <nav>
                                <ul className="flex w-screen justify-around py-10">
                                    <li className="menuLi" onClick={() => {setCarte("Burger"); setBonus(""); setBonusTwo("");setBonusThree("")}}>Burgers</li>
                                    <li className="menuLi" onClick={() => {setCarte("Dessert"); setBonus(""); setBonusTwo("");setBonusThree("")}}>Desserts</li>
                                    <li className="menuLi" onClick={() => {setCarte("Soft"); setBonus("Coffee"); setBonusTwo("Tea");setBonusThree("")}}>Softs, Cafés, Thé</li>
                                    <li className="menuLi" onClick={() => {setCarte("DraughtBeer"); setBonus("BottledBeer"); setBonusTwo("Cider");setBonusThree("")}}>Bières, Cidres</li>
                                    <li className="menuLi" onClick={() => {setCarte("Vin"); setBonus("WhiteWine"); setBonusTwo("PinkWine");setBonusThree("RedWine")}}>Vins</li>
                                    <li className="menuLi" onClick={() => {setCarte("Cocktail"); setBonus("CocktailNoAlcool"); setBonusTwo("");setBonusThree("")}}>Cocktails</li>
                                    <li className="menuLi" onClick={() => {setCarte("Poutine"); setBonus(""); setBonusTwo("");setBonusThree("")}}>Poutines</li>
                                    <li className="menuLi" onClick={() => {setCarte("Brunch"); setBonus(""); setBonusTwo("");setBonusThree("")}}>Brunchs</li>
                                </ul>
                            </nav>
                            <div className="container flex justify-center text-center py-10">
                                {listeMenu()}
                            </div>
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