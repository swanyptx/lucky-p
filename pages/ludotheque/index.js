import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer.js'
import Navbar from '../../components/Navbar.js'
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
    const [categoriesText, setCategoriesText] = useState([]);

    const navbarBooking = true;

    //Filter

    const filteredGames = gamesArray.filter((game) => {

        if (game.nbMinPlayer <= searchInputPlayer && game.nbMaxPlayer >= searchInputPlayer && game.gameTimes == searchInputTime && game.difficulty == searchInputDifficulty) {
            return game.title.toLowerCase().indexOf(searchInputText.toLowerCase()) !== -1
        }

    })

    //CATEGORIES CHECKED

    return (
        <div>

            <Head>
                <title>La Ludothèque</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar displayNavbar={navbarBooking}
                booking={false}
            ></Navbar>
            <section className="ludotheque">
                <div className="container py-20 sm:py-10 flex flex-col items-center justify-center">

                    <h2>Nos Jeux</h2>

                    <div className="py-5">
                        <div className="search rounded p-5">
                            <form action="" method="get" className="flex flex-col">
                                <div className="form-group flex flex-col">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 py-2">
                                    <div className="form-group flex flex-col p-1">
                                        <label htmlFor="numberPlayer" className="font-bold">Nombre de Joueurs :</label>
                                        <input
                                            type="number"
                                            id="numberPlayer"
                                            min="1" max="30"
                                            value={searchInputPlayer}
                                            onChange={(e) => setSearchInputPlayer(e.target.value)}
                                            className=" p-2 w-100 rounded" />
                                    </div>
                                    <div className="form-group flex flex-col p-1">
                                        <label htmlFor="timePlayable" className="font-bold">Temps :</label>
                                        <select
                                            name=""
                                            id="timePlayable"
                                            value={searchInputTime}
                                            onChange={(e) => setSearchInputTime(e.target.value)}
                                            className="p-2 rounded">
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
                                            className="p-2  rounded">
                                            <option value="1">Facile</option>
                                            <option value="2">Intermédiaire</option>
                                            <option value="3">Difficile</option>
                                            <option value="4">Varié</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group flex flex-col px-4 col-span-1 md:col-span-2 bg-red-500 rounded">
                                    <label htmlFor="categories" className="pt-4 font-bold">Catégories :</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2" >
                                        {/* <div className="w-full grid md:grid-cols-3 grid-flow-row gap-4 p-2" > */}
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Adult" name="" value="60744fd321882cb44ef430b7" onClick={(e) => getCheck(e.target.value)} />
                                            <label className="pl-2" htmlFor="Adult">Adulte</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Ambiance" name="" />
                                            <label className="pl-2" htmlFor="Ambiance">Ambiance</label>
                                        </div>

                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Bluff" name="" />
                                            <label className="pl-2" htmlFor="Bluff">Bluff</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox"
                                                id="Cards"
                                                name=""
                                                onChange={(e) => setSearchCart(e.target.checked)}
                                            />
                                            <label className="pl-2" htmlFor="Cards">Cartes</label>

                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Coop" name="" />
                                            <label className="pl-2" htmlFor="Coop">Coopération</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Draw" name="" />
                                            <label className="pl-2" htmlFor="Draw">Dessin</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Dexterity" name="" />
                                            <label className="pl-2" htmlFor="Dexterity">Dextérité</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Child" name="" />
                                            <label className="pl-2" htmlFor="Child">Enfants</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Management" name="" />
                                            <label className="pl-2" htmlFor="Management">Gestion</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Strategy" name="" />
                                            <label className="pl-2" htmlFor="Strategy">Stratégie</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="Dice" name="" />
                                            <label className="pl-2" htmlFor="Dice">Dés</label>
                                        </div>
                                        <div className="form-group-checkbox flex items-center justify-start">
                                            <input type="checkbox" id="BoardGame" name="" />
                                            <label className="pl-2" htmlFor="BoardGame">Plateau</label>
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

                                console.log()

                                const categoriesTextMapping = categoriesText.map(categories => {
                                    for (let index = 0; index. < categ; index++) {

                                    }
                                })

                                function getCheck(value) {
                                    categoriesText.push(value)
                                    if (categoriesText === game.categories)
                                        console.log(categoriesText)
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
            <Footer />

        </div>
    )
}

export default Ludotheque