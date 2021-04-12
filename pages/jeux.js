import React from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const Jeux = () => {
    return (
        <div>
            <Head>
                <title>La Ludothèque</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
            <Header></Header>
            <section className="jeux">
                <div className="container py-20 sm:py-10 flex flex-col items-center justify-center ">
                    <h2 className="pb-10">Nos Jeux</h2>
                    <div className="">
                        <div className="grid-cols-1 text-center">
                            <figure>
                                <img src="../assets/img/bg/background2.jpg" />
                            </figure>
                            <h3 className="py-5">Exploding Kittens</h3>
                            <p className="text-center py-5">Exploding Kittens revisite le principe de la roulette russe dans un jeu de cartes déjantés avec des chatons et de la dynamite!</p>
                            <div className="py-5">
                                <span className="tag rounded py-2 px-4 font-bold">#PartyGame</span>
                                <span className="tag rounded py-2 px-4 font-bold">#Reflexion</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-5">
                        <p className="py-5">Vous souhaitez voir toute notre Ludothèque ?</p>
                        <a className="rounded py-2 px-4 font-bold" href="/ludotheque">Cliquez ici !</a>
                    </div>
                </div>
            </section>
            <Booking></Booking>
            <Footer />
        </div>
    )
}

export default Jeux