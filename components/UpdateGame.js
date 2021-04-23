import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const UpdateGame = ({ games }) => {

    // Hook pour la recherche de jeux 
    const [gamesArray, setGamesArray] = useState(games)
    const [searchInputText, setSearchInputText] = useState('')
    const [modify, setModify] = useState("")
    const [Test, setTest] = useState(false)

    // Hook pour l'update
    const [titleText, setTitleText] = useState('');
    const [preambleText, setPreambleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [nbMinPlayerText, setNbMinPlayerText] = useState('');
    const [nbMaxPlayerText, setNbMaxPlayerText] = useState('');
    const [difficultyText, setDifficultyText] = useState('');
    const [gameTimesText, setGameTimesText] = useState('');
    const [quantityText, setQuantityText] = useState('');
    const [videoURLText, setVideoURLText] = useState('');
    const [minAgeText, setMinAgeText] = useState('');

    let filteredGames = [];

    if (Test) {
        filteredGames = gamesArray.filter((game) => {
            return game.title.toLowerCase().indexOf(searchInputText.toLowerCase()) !== -1
        }
        )
    }

    async function deleteGame(id) {
        await fetch(`http://localhost:5500/games/${id}`, {
            method: 'DELETE',
        }).catch(error => console.log(error))
            .then(res => res.json())
    }

    // async function deleteGame(id) {
    //     await fetch(`http://localhost:5500/games/${id}`, {
    //         method: 'DELETE',
    //     }).catch(error => console.log(error))
    //         .then(res => res.json())

    //     alert("Le jeu a bien été supprimer")
    // }

    const updateGameSelected = async (id) => {

        function titleVide() {
            if (titleText == "" || titleText == null || titleText == undefined) {
                return (
                    modify.title
                )
            } else {
                return (titleText)
            }
        }
        function preambleVide() {
            if (preambleText == "" || preambleText == null || preambleText == undefined) {
                return (
                    modify.preamble
                )
            } else {
                return (preambleText)
            }
        }
        function descriptionVide() {
            if (descriptionText == "" || descriptionText == null || descriptionText == undefined) {
                return (
                    modify.description
                )
            } else {
                return (descriptionText)
            }
        }
        function nbMinPlayerVide() {
            if (nbMinPlayerText == "" || nbMinPlayerText == null || nbMinPlayerText == undefined) {
                return (
                    modify.nbMinPlayer
                )
            } else {
                return (nbMinPlayerText)
            }
        }
        function nbMaxPlayerVide() {
            if (nbMaxPlayerText == "" || nbMaxPlayerText == null || nbMaxPlayerText == undefined) {
                return (
                    modify.nbMaxPlayer
                )
            } else {
                return (nbMaxPlayerText)
            }
        }
        function difficultyVide() {
            if (difficultyText == "" || difficultyText == null || difficultyText == undefined) {
                return (
                    modify.difficulty
                )
            } else {
                return (difficultyText)
            }
        }
        function gameTimesVide() {
            if (gameTimesText == "" || gameTimesText == null || gameTimesText == undefined) {
                return (
                    modify.gameTimes
                )
            } else {
                return (gameTimesText)
            }
        }
        function quantityVide() {
            if (quantityText == "" || quantityText == null || quantityText == undefined) {
                return (
                    modify.quantity
                )
            } else {
                return (quantityText)
            }
        }
        function videoURLVide() {
            if (videoURLText == "" || videoURLText == null || videoURLText == undefined) {
                return (
                    modify.videoURL
                )
            } else {
                return (videoURLText)
            }
        }
        function minAgeVide() {
            if (minAgeText == "" || minAgeText == null || minAgeText == undefined) {
                return (
                    modify.minAge
                )
            } else {
                return (minAgeText)
            }
        }

        const gameSchema = {

            title: titleVide(),
            preamble: preambleVide(),
            description: descriptionVide(),
            nbMinPlayer: nbMinPlayerVide(),
            nbMaxPlayer: nbMaxPlayerVide(),
            difficulty: difficultyVide(),
            gameTimes: gameTimesVide(),
            quantity: quantityVide(),
            videoURL: videoURLVide(),
            minAge: minAgeVide(),
        }

        await fetch(`http://localhost:5500/games/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameSchema),

        }).catch(error => console.log(error))
            .then(res => res.json())

        alert("Le jeu a été modifié !")
        // await fetch(`http://localhost:5500/games/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(gameSchema),

        // }).catch(error => console.log(error))
        //     .then(res => res.json())

    }


    function modifyGame(game) {

        setModify(game)

    }

    const gameModified = () => {
        if (modify !== "") {

            return (
                <form id="gameToModify" action="" className="formAdd p-10 rounded-3xl my-20 grid md:grid-cols-2 grid-cols-1 ">
                    <h1 className="col-span-1 md:col-span-2 text-center my-5 text-4xl">Modification de jeu</h1>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameName">Nom du jeu</label>
                        <input type="text"
                            id="gameName"
                            onChange={(e) => setTitleText(e.target.value)}
                            defaultValue={modify.title}
                            placeholder="Insérez le nom du jeu"
                            className="inputAdd p-1 rounded mt-2"
                        />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gamePreamble">Préambule</label>
                        <textarea type="text"
                            onChange={(e) => setPreambleText(e.target.value)}
                            id="gamePreamble" defaultValue={modify.preamble}
                            placeholder="Insérez un texte accrocheur pour le jeu"
                            className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameDescription">Description</label>
                        <textarea type="text"
                            onChange={(e) => setDescriptionText(e.target.value)}
                            id="gameDescription"
                            defaultValue={modify.description}
                            placeholder="Insérez la description du jeu"
                            className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMinPlayer">Nombre minimum de joueurs</label>
                        <input type="number"
                            id="gameMinPlayer"
                            onChange={(e) => setNbMinPlayerText(e.target.value)}
                            min="0" defaultValue={modify.nbMinPlayer}
                            placeholder="0"
                            className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMaxPlayer" >Nombre maximum de joueurs</label>
                        <input type="number"
                            id="gameMaxPlayer"
                            onChange={(e) => setNbMaxPlayerText(e.target.value)}
                            min="0" defaultValue={modify.nbMaxPlayer}
                            placeholder="0"
                            className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameDifficulty">Difficulté</label>
                        <select name="" onChange={(e) => setDifficultyText(e.target.value)} id="gameDifficulty" className="inputAdd p-1 rounded mt-2">
                            <option value="1" selected={modify.difficulty == 1 ? true : false}>Facile</option>
                            <option value="2" selected={modify.difficulty == 2 ? true : false}>Moyen</option>
                            <option value="3" selected={modify.difficulty == 3 ? true : false}>Difficile</option>
                            <option value="4" selected={modify.difficulty == 4 ? true : false}>Varié</option>
                        </select>
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMinAge" >Age minimum conseillé</label>
                        <input type="number"
                            id="gameMinAge" onChange={(e) => setMinAgeText(e.target.value)}
                            min="0"
                            defaultValue={modify.minAge}
                            placeholder="0"
                            className="inputAdd p-1 rounded mt-2"
                        />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameQuantity" >Quantité de jeu à disposition</label>
                        <input type="number"
                            id="gameQuantity"
                            onChange={(e) => setQuantityText(e.target.value)}
                            min="1"
                            defaultValue={modify.quantity}
                            placeholder="0"
                            className="inputAdd p-1 rounded mt-2"
                        />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameTime">Temps de Jeu</label>
                        <select name="" id="gameTime" onChange={(e) => setGameTimesText(e.target.value)} className="inputAdd p-1 rounded mt-2">
                            <option value="(-15)" selected={modify.gameTimes == "(-15)" ? true : false}>Moins de 15 minutes</option>
                            <option value="(15 - 30)" selected={modify.gameTimes == "(15 - 30)" ? true : false}>15 à 30 minutes</option>
                            <option value="(30 - 60)" selected={modify.gameTimes == "(30 - 60)" ? true : false}>30 à 60 minutes</option>
                            <option value="(60+)" selected={modify.gameTimes == "(60+)" ? true : false}>Plus de 60 minutes</option>
                        </select>
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameVideoURL">URL de la video :</label>
                        <input type="text"
                            id="gameVideoURL"
                            defaultValue={modify.videoURL}
                            onChange={(e) => setVideoURLText(e.target.value)}
                            placeholder="00000000"
                            className="inputAdd p-1 rounded mt-2"
                        />
                    </div>
                    <button className="col-span-1 md:col-span-2 my-5 text-xl buttonTest" onClick={() => updateGameSelected(modify._id)}>Valider</button>
                </form>
            )
        }
        else {
            return (
                <p className="text-white">Veuillez recherche un jeu via la barre de recherche</p>
            )
        }
    }

    return (

        <div className="flex justify-center items-center flex-col">

            <div>
                {gameModified()}
            </div>

            {/* Formulaire de Recherche */}
            <form action="" className="mt-20 p-4 rounded-3xl formSearch flex justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col md:flex-row items-center">
                    <label htmlFor="searchByName">Rechercher</label>
                    <input
                        type="text"
                        id="searchByName"
                        placeholder="Ajouter le nom d'un jeu"
                        className="search-ByName ml-6 p-2 rounded"
                        value={searchInputText}
                        onChange={(e) => { setSearchInputText(e.target.value); setTest(false) }}
                    />

                </div>
                <a className="buttonTest px-4 m-4" onClick={() => setTest(true)}>Rechercher</a>
            </form>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredGames.map(game => {

                    let maxLength = 140;
                    let desc = game.preamble.substring(0, maxLength) + '...';
                    //Categories Looping
                    let arrayCategories = [];
                    for (let index = 0; index < game.categories.length; index++) {
                        arrayCategories.push(
                            <div className="gameBlockCategorie">{game.categories[index].categorieName}</div>
                        )
                    }

                    return (
                        <div className="gameBlock grid rounded-2xl p-5 m-5">
                            <div className="fakeBlock self-center"> </div>
                            <h4 className="font-semibold text-center">{game.title}</h4>
                            <h4 className="desc">{desc}</h4>
                            <div className="flex flex-row justify-start flex-wrap ">{arrayCategories}</div>
                            <button className="button" href="#gameToModify" onClick={() => modifyGame(game)}>Modifier</button>
                            <button className="button mt-1" href="/ludotheque" onClick={() => deleteGame(game._id)}>Supprimer</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UpdateGame
