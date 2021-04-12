import React from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const Ludotheque = () => {
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
            <section className="ludotheque">
                <div className="container h-screen py-20 sm:py-10 flex flex-col items-center justify-center ">
                    <h2>Nos Jeux</h2>
                    <div className="py-10">
                        <div className="search rounded p-5">
                            <form action="" method="get" className="flex flex-col">
                                <div className="form-group flex flex-nowrap items-center p-6">
                                    <label htmlFor="searchByName">Rechercher</label>
                                    <input type="text" id="searchByName" className="search-ByName ml-6 p-2 rounded"/>
                                </div>
                                <div className="flex flex-wrap p-3">
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="numberPlayer">Nombre de Joueurs</label>
                                        <input type="number" id="numberPlayer" defaultValue="2" className="ml-6 p-2 w-12 rounded"/>
                                    </div>
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="timePlayable">Temps</label>
                                        <input type="time" id="timePlayable" defaultValue="00:00" className="ml-6 p-2 rounded"/>
                                    </div>
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="difficulty">Difficulté</label>
                                        <select name="" id="difficulty" className="p-2 ml-6 rounded">
                                            <option value="1">Facile</option>
                                            <option value="2">Intermédiaire</option>
                                            <option value="3">Pro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group flex items-start p-6">
                                    <label htmlFor="searchByHashtags">Hashtag</label>
                                    <input type="text" id="searchByHashtags" className="search-hastags rounded ml-11 mb-6 p-2"/>
                                </div>
                                <button className="submit rounded py-3 px-4 font-bold" type="submit">Rechercher</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>Résultats</h2>
                        <hr className="w-80"/>
                        <div className="flex flex-wrap">
                            <div>
                                <p>resultat</p>
                                {/* ForEach d'un composant avec propriété inséré via appel à API */}
                            </div>
                            <div>
                                <p>resultat</p>
                            </div>
                            <div>
                                <p>resultat</p>
                            </div>
                            <div>
                                <p>resultat</p>
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

export default Ludotheque