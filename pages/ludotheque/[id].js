import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer.js'
import Navbar from '../../components/Navbar.js'


export const getStaticPaths = async () => {
    // const res = await fetch('https://luckyp-api.herokuapp.com/games');
    const res = await fetch('http://localhost:5500/games');
    const data = await res.json()

    const paths = data.map(game => {
        return {
            params: { id: game._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://luckyp-api.herokuapp.com/games/' + id);
    const data = await res.json();
    console.log(data)
    return {
        props: { game: data }
    }
}


const Details = ({ game }) => {

    const navbarBooking = true;

    const gameItem = game.map(game => {

        function numberPlayers() {
            if (game.nbMinPlayer == game.nbMaxPlayer) {
                return (<p> {game.nbMinPlayer} joueurs</p>)
            } else {
                return (<p>De {game.nbMinPlayer} à {game.nbMaxPlayer} joueurs</p>)
            }
        }

        function gameTimes() {
            if (game.gameTimes == "(-15)") {
                return (<p>Moins de 15 minutes</p>)
            } if (game.gameTimes == "(15 - 30)") {
                return (<p> Entre 15 et 30 minutes</p>)
            } if (game.gameTimes == "(30) - 60)") {
                return (<p>Entre 30 et 60 minutes</p>)
            }  if (game.gameTimes == "+ 60)") {
                return (<p>Plus d'une heure</p>)
            }
        }

        function gameDifficulty() {
            if (game.difficulty == "1") {
                return (<p> Facile</p>)
            } if (game.difficulty == "2") {
                return (<p>Intermédiaire</p>)
            }  if (game.difficulty == "3") {
                return (<p>Difficile</p>)
            } if (game.difficulty == "4") {
                return (<p>Varié</p>)
            }
        }

        function gamePreamble() {
            if (game.preamble == "" || game.preamble == undefined || game.preamble == null) {
                return( <p> Ce jeu ne contient pas de préambule </p>)
            } else {
                return ( <p>{game.preamble}</p> )
            }
        }

        function gameDescription() {
            if (game.description == "" || game.description == undefined || game.description == null) {
                return( <p> Ce jeu ne contient pas de description </p>)
            } else {
                return ( <p>{game.description}</p> )
            }
        }

        function gameURL() {
            if (game.videoURL == "" || game.videoURL == undefined || game.videoURL == null) {
                return ( <p> Ce jeu ne contient pas de video des règles</p> )
            } else {
                return (<iframe className="w-full h-full md:w-6/12 mdw-6/12 lg:w-160 lg:h-80" src={`https://www.youtube.com/embed/${game.videoURL}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
            }
        }

        function itemsContent() {
            if (game.content == [] || game.content == undefined || game.content == "") {
                return (
                    <p>Ce jeu ne contient pour le moment aucune description concernant son contenu</p>
                )
            } else {
                 const lolo = game.content.map((contentItem) => {
                    return(
                    <p>{contentItem}</p>
                    )
                 })
                return (  
                <div>
                    <p>Ce jeu contient les objets suivants : </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
                        {lolo}
                    </div> 
                </div>
                )
            }
        } 

        return (
            <section key={game._id} id="contact" className= "lg:static flex justify-center lg:py-20 ">
                <div className="container flex flex-col justify-center lg:py-8 text-white">
                <div className="gamePictureInsideIDGame border-4 ">
                <img src={`/assets/img/imageGames/${game._id}.jpg`} alt="" onError={(e) => { e.target.onerror = null; e.target.src = "/assets/img/imageGames/unknown.jpg" }} />
                </div>
                    <h1 className="font-bold">{game.title}</h1>
                    <div className="description">
                        <div className="flex flex-row flex-wrap pb-3">
                            <div className="nbPlayers flex flex-row pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                {numberPlayers()}
                            </div>
                            <div className="gameTimes flex flex-row pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {gameTimes()}
                            </div>
                            <div className="difficulty flex flex-row pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                </svg>
                                {gameDifficulty()}
                            </div>
                            <div className="minimumAge flex flex-row pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <p>A partir de {game.minAge} ans</p>
                            </div>
                        </div>
                        <ul className="flex">
                            <li className="mr-6">
                                <a className="text-blue-500 hover:text-blue-800" href="#description">Description</a>
                            </li> 
                            <li className="mr-6">
                                <a className="text-blue-500 hover:text-blue-800" href="#goal">But du Jeu</a>
                            </li>
                            <li className="mr-6">
                                <a className="text-blue-500 hover:text-blue-800" href="#rules">Règle</a>
                            </li>
                            <li className="mr-6">
                                <a className="text-blue-500 hover:text-blue-800" href="#content">Contenu</a>
                            </li>

                        </ul>
                        <div id="description" className="py-3">
                        {gamePreamble()}
                        </div>
                        <div id="goal" className="py-3">
                            <h3>Description :</h3>
                        {gameDescription()}
                        </div>
                        <div id="rules" className="py-3">
                            <h3>Règles :</h3>
                            {gameURL()}
                        </div>
                        {/* width="560" height="315" */}
                        <div id="content" className="py-3">
                            <h3>Contenu :</h3>
                            {itemsContent()}
                        </div>
                    </div>
                </div>
            </section>
        )
    })

    return (
        <div>
            <Head>
                <title>La Brasserie</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
             <Navbar displayNavbar={navbarBooking} 
            booking = {false}
            ></Navbar>
            <div>
                {gameItem}
            </div>
            <Footer />
        </div>
    );
}

export default Details