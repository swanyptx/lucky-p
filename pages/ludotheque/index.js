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
    const [searchInputTime, setSearchInputTime] = useState('(15 - 30)')
    const [searchInputDifficulty, setSearchInputDifficulty] = useState(1)


    const [gamesArray, setGamesArray] = useState(allGamesFromAPI)
    

    //Filter

    const filteredGames = gamesArray.filter((game) => {

        if (game.nbMinPlayer <= searchInputPlayer && game.nbMaxPlayer >= searchInputPlayer && game.gameTimes == searchInputTime && game.difficulty == searchInputDifficulty ) {
            return game.title.toLowerCase().indexOf(searchInputText.toLowerCase()) !== -1
            
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
                                <div className="form-group flex flex-col p-3">
                                    <label htmlFor="searchByName" className="font-bold">Rechercher :</label>
                                    <input
                                        placeholder="Avez-vous un jeu en tête ?"
                                        type="text"
                                        id="searchByName"
                                        className="search-ByName p-2 w-full rounded"
                                        value={searchInputText}
                                        onChange={(e) => setSearchInputText(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col lg:flex-row p-3">
                                    <div className="form-group flex flex-col p-1">
                                        <label htmlFor="numberPlayer" className="font-bold">Nombre de Joueurs :</label>
                                        <input
                                            type="number"
                                            id="numberPlayer"
                                            value={searchInputPlayer}
                                            onChange={(e) => setSearchInputPlayer(e.target.value)}
                                            className="ml-6 p-2 w-12 rounded" />
                                    </div>
                                    <div className="form-group flex flex-col p-1">
                                        <label htmlFor="timePlayable" className="font-bold">Temps :</label>
                                        <select
                                            name=""
                                            id="timePlayable"
                                            value={searchInputTime}
                                            onChange={(e) => setSearchInputTime(e.target.value)}
                                            className="p-2 ml-6 rounded">
                                            <option value="(-15)">- 15min</option>
                                            <option value="(15 - 30)">15 - 30min</option>
                                            <option value="(30 - 60)">30 - 60min</option>
                                            <option value="(+60)">+ 60min</option>
                                        </select>
                                    </div>
                                    <div className="form-group flex flex-col p-1">
                                        <label htmlFor="difficulty" className="font-bold">Difficulté :</label>
                                        <select
                                            name=""
                                            id="difficulty"
                                            value={searchInputDifficulty}
                                            onChange={(e) => setSearchInputDifficulty(e.target.value)}
                                            className="p-2 ml-6 rounded">
                                            <option value="0">----</option>
                                            <option value="1">Facile</option>
                                            <option value="2">Intermédiaire</option>
                                            <option value="3">Pro</option>
                                            <option value="4">Varié</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group flex flex-col px-4 col-span-1 md:col-span-2 bg-red-500 rounded">
                                    <label htmlFor="categories" className="pt-4 font-bold">Catégories :</label>
                                    <div className="w-full grid md:grid-cols-3 grid-flow-row gap-4 p-2" >
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Adult">Adulte</label>
                                            <input 
                                            type="checkbox" 
                                            id="Adult" 
                                            name="" 
                                            onChange={(e) => setSearchAdult(e.target.checked)}
                                            />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Ambiance">Ambiance</label>
                                            <input type="checkbox" id="Ambiance" name="" />
                                        </div>

                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Bluff">Bluff</label>
                                            <input type="checkbox" id="Bluff" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Cards">Cartes</label>
                                            <input
                                            type="checkbox" 
                                            id="Cards" 
                                            name="" 
                                            onChange={(e) => setSearchCart(e.target.checked)}
                                            />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Coop">Coopération</label>
                                            <input type="checkbox" id="Coop" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Draw">Dessin</label>
                                            <input type="checkbox" id="Draw" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Dexterity">Dextérité</label>
                                            <input type="checkbox" id="Dexterity" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Child">Enfants</label>
                                            <input type="checkbox" id="Child" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Management">Gestion</label>
                                            <input type="checkbox" id="Management" name="" />
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-between">
                                            <label htmlFor="Strategy">Stratégie</label>
                                            <input type="checkbox" id="Strategy" name="" />
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="submit rounded py-3 px-4 font-bold" type="submit">Rechercher</button> */}
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">

                        <h2>Résultats</h2>
                        <hr className="w-80" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                            {filteredGames.map(game => {

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
                                        <div className="gameBlock flex flex-col rounded-2xl m-3 p-5 cursor-pointer transform hover:scale-110">
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