import React, { useState } from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Burger from '../components/Card/Burger'
import Desserts from '../components/Card/Desserts'
import Softs from '../components/Card/Softs'
import Bieres from '../components/Card/Bieres'
import Vins from '../components/Card/Vins'
import Cocktails from '../components/Card/Cocktails'
import Poutines from '../components/Card/Poutines'
import Brunchs from '../components/Card/Brunchs'

const Brasserie = () => {

    const [carte, setCarte] = useState("")


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
                <div className="container h-screen py-20 sm:py-10 flex flex-col items-center ">
                    <h2>Nos Cartes</h2>
                    <div className="">
                        <div>
                            <nav>
                                <ul className="flex w-screen justify-around">
                                    <li onClick={() => setCarte(Burger)}>Burgers</li>
                                    <li onClick={() => setCarte(Desserts)}>Desserts</li>
                                    <li onClick={() => setCarte(Softs)}>Softs</li>
                                    <li onClick={() => setCarte(Bieres)}>Bières</li>
                                    <li onClick={() => setCarte(Vins)}>Vins</li>
                                    <li onClick={() => setCarte(Cocktails)}>Cocktails</li>
                                    <li onClick={() => setCarte(Poutines)}>Poutines</li>
                                    <li onClick={() => setCarte(Brunchs)}>Brunchs</li>
                                </ul>
                            </nav>
                            <div>
                                {carte}
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