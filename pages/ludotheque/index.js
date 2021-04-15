import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Booking from '../../components/Booking.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Link from 'next/link'

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5500/games');
    const data = await res.json()

    return {
        props: { allGamesFromAPI: data }
    }
}

const Ludotheque = ({ allGamesFromAPI }) => {

    const [searchInputText, setSearchInputText] = useState('')
    const [searchInputPlayer, setSearchInputPlayer] = useState(2)
    const [searchInputTime, setSearchInputTime] = useState('')
    const [gamesArray, setGamesArray] = useState(allGamesFromAPI)

    //Search By Name
    function searchByName(name) {
        console.log(searchInputText)
        setSearchInputText(name.target.value)
    }

    function searchByNbPlayer(nbPlayer) {
        console.log(searchInputPlayer)
        setSearchInputPlayer(nbPlayer.target.value)
    }

    function searchByTime(time) {
        console.log(searchInputTime)
        setSearchInputTime(time.target.value)
    }

    //Filter
    const filteredGames = gamesArray.filter((game) => {
        return game.title.toLowerCase().indexOf(searchInputText.toLowerCase()) !== -1;
    })

    const filteredByNbPlayer = gamesArray.filter((game) => {
        if (game.nbMinPlayer <= searchInputPlayer && game.nbMaxPlayer >= searchInputPlayer) {
            return game.title
        }
    })

    const filteredByTime = gamesArray.filter((game) => {
        if (game.gameTimes == searchInputTime) {
            return game.title
        }
    })

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
                <div className="container py-20 sm:py-10 flex flex-col items-center justify-center ">

                    <h2>Nos Jeux</h2>

                    <div className="py-10">
                        <div className="search rounded p-5">
                            <form action="" method="get" className="flex flex-col">
                                <div className="form-group flex flex-nowrap items-center p-6">
                                    <label htmlFor="searchByName">Rechercher</label>
                                    <input
                                        type="text"
                                        id="searchByName"
                                        className="search-ByName ml-6 p-2 rounded"
                                        value={searchInputText}
                                        onChange={searchByName.bind(this)}
                                    />
                                </div>
                                <div className="flex flex-wrap p-3">
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="numberPlayer">Nombre de Joueurs</label>
                                        <input
                                            type="number"
                                            id="numberPlayer"
                                            value={searchInputPlayer}
                                            onChange={searchByNbPlayer.bind(this)}
                                            className="ml-6 p-2 w-12 rounded" />
                                    </div>
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="timePlayable">Temps</label>
                                        <select
                                            name=""
                                            id="timePlayable"
                                            value={searchInputTime}
                                            onChange={searchByTime.bind(this)}
                                            className="p-2 ml-6 rounded">
                                            <option value="(-15)">- 15min</option>
                                            <option value="(15 - 30)">15 - 30min</option>
                                            <option value="(30 - 60)">30 - 60min</option>
                                            <option value="(+60)">+ 60min</option>
                                        </select>
                                    </div>
                                    <div className="form-group flex flex-wrap m-3 items-center">
                                        <label htmlFor="difficulty">Difficulté</label>
                                        <select
                                            name=""
                                            id="difficulty"
                                            className="p-2 ml-6 rounded">
                                            <option value="1">Facile</option>
                                            <option value="2">Intermédiaire</option>
                                            <option value="3">Pro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group flex items-start p-6">
                                    <label htmlFor="searchByHashtags">Hashtag</label>
                                    <input type="text" id="searchByHashtags" className="search-hastags rounded ml-11 mb-6 p-2" />
                                </div>
                                <button className="submit rounded py-3 px-4 font-bold" type="submit">Rechercher</button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">

                        <h2>Résultats</h2>
                        <hr className="w-80" />
                        <div className="grid grid-cols-4 gap-4">
                            {filteredByTime.map(game => {

                                //Shorten preamble
                                let maxLength = 140;
                                let desc = game.preamble.substring(0, maxLength) + '...';

                                //Categories Looping
                                let arrayCategories = [];
                                for (let index = 0; index < game.categories.length; index++) {
                                    arrayCategories.push(
                                        <div className="gameBlockCategorie text-white rounded-sm p-1 m-1">{game.categories[index].categorieName}</div>
                                    )
                                }

                                return (

                                    <Link href={'/ludotheque/' + game._id} key={game._id}>
                                        <div className="gameBlock flex flex-col rounded-2xl p-5">
                                            <div className="fakeBlock self-center"> </div>
                                            <h4 className="font-semibold text-center">{game.title}</h4>
                                            <h4 className="desc">{desc}</h4>
                                            <div className="flex flex-row justify-start ">{arrayCategories}</div>
                                        </div>
                                    </Link>

                                )
                            })}
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