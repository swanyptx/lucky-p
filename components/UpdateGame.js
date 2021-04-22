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
    const [nbMinPlayerText, setNbMinPlayerText] = useState(2);
    const [nbMaxPlayerText, setNbMaxPlayerText] = useState(4);
    const [difficultyText, setDifficultyText] = useState(1);
    const [gameTimesText, setGameTimesText] = useState((-15));
    const [quantityText, setQuantityText] = useState(1);
    const [videoURLText, setVideoURLText] = useState('');
    const [minAgeText, setMinAgeText] = useState(6);
    const [categoriesText, setCategoriesText] = useState([]);

    let categorieIds = []
    let filteredGames = [];

    function getCheck(value) {

        let test = -1;
        categoriesText.find((element) => {

            if (element === value) {
                test = categoriesText.indexOf(element)
            }
        })

        const newCategories = [...categoriesText];

        if (test !== -1) {

            newCategories.splice(test, 1)
            setCategoriesText(newCategories);

        }
        else {

            newCategories.push(value)
            setCategoriesText(newCategories);

        }

        console.log(categoriesText)
    }

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

    const updateGameSelected = async (id) => {

        const gameSchema = {

            title: titleText,
            preamble: preambleText,
            description: descriptionText,
            nbMinPlayer: nbMinPlayerText,
            nbMaxPlayer: nbMaxPlayerText,
            difficulty: difficultyText,
            gameTimes: gameTimesText,
            quantity: quantityText,
            videoURL: videoURLText,
            minAge: minAgeText,
            categories: categoriesText,
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

    }


    function modifyGame(game) {

        setModify(game)

    }

    const gameModified = () => {
        if (modify !== "") {
            let arrayCategorieGame = []

            modify.categories.map((categorie) => {

                arrayCategorieGame.push(categorie.categorieName)
                return arrayCategorieGame
            })

            return (
                <form action="" className="formAdd p-10 rounded-3xl my-20 grid md:grid-cols-2 grid-cols-1 ">
                    <h1 className="col-span-1 md:col-span-2 text-center my-5 text-4xl">Modification de jeu</h1>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameName">Nom du jeu</label>
                        <input type="text" id="gameName" onChange={(e) => setTitleText(e.target.value)} defaultValue={modify.title} placeholder="Insérez le nom du jeu" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gamePreamble">Préambule</label>
                        <textarea type="text" onChange={(e) => setPreambleText(e.target.value)} id="gamePreamble" defaultValue={modify.preamble} placeholder="Insérez un texte accrocheur pour le jeu" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameDescription">Description</label>
                        <textarea type="text" onChange={(e) => setDescriptionText(e.target.value)} id="gameDescription" defaultValue={modify.description} placeholder="Insérez la description du jeu" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMinPlayer">Nombre minimum de joueurs</label>
                        <input type="number" id="gameMinPlayer" onChange={(e) => setNbMinPlayerText(e.target.value)} min="0" defaultValue={modify.nbMinPlayer} placeholder="0" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMaxPlayer" >Nombre maximum de joueurs</label>
                        <input type="number" id="gameMaxPlayer" onChange={(e) => setNbMaxPlayerText(e.target.value)} min="0" defaultValue={modify.nbMaxPlayer} placeholder="0" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameDifficulty">Difficulté</label>
                        <select name="" onChange={(e) => setDifficultyText(e.target.value)} id="gameDifficulty" className="inputAdd p-1 rounded mt-2">
                            <option value="" selected={modify.difficulty == 1 ? true : false}>Facile</option>
                            <option value="" selected={modify.difficulty == 2 ? true : false}>Moyen</option>
                            <option value="" selected={modify.difficulty == 3 ? true : false}>Difficile</option>
                            <option value="" selected={modify.difficulty == 4 ? true : false}>Varié</option>
                        </select>
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameMinAge" >Age minimum conseillé</label>
                        <input type="number" id="gameMinAge" onChange={(e) => setMinAgeText(e.target.value)} min="0" defaultValue={modify.minAge} placeholder="0" className="inputAdd p-1 rounded mt-2" />
                    </div>
                    <div className="form-group flex flex-col p-4">
                        <label htmlFor="gameQuantity" >Quantité de jeu à disposition</label>
                        <input type="number" id="gameQuantity" onChange={(e) => setQuantityText(e.target.value)} min="0" defaultValue={modify.quantity} placeholder="0" className="inputAdd p-1 rounded mt-2" />
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
                    <div className="form-group flex flex-col p-4 col-span-1 md:col-span-2 py-6">
                        <label htmlFor="categories" className="py-4">Catégories</label>
                        <div className="w-full grid md:grid-cols-3 grid-flow-row gap-4 text-center" >
                            <div className="form-group-checkbox">
                                <label htmlFor="Adult">Adulte</label>
                                <input type="checkbox" id="Adult" name="" value="60744fd321882cb44ef430b7" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Adulte") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Ambiance">Ambiance</label>
                                <input type="checkbox" id="Ambiance" name="" value="60744fd321882cb44ef430b4" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Ambiance") ? true : false} />
                            </div>

                            <div className="form-group-checkbox">
                                <label htmlFor="Bluff">Bluff</label>
                                <input type="checkbox" id="Bluff" name="" value="6074503521882cb44ef430bc" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Bluff") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Cards">Cartes</label>
                                <input type="checkbox" id="Cards" name="" value="6074503521882cb44ef430b9" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Cartes") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Coop">Coopération</label>
                                <input type="checkbox" id="Coop" name="" value="6074503521882cb44ef430bb" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Coopération") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Draw">Dessin</label>
                                <input type="checkbox" id="Draw" name="" value="6074503521882cb44ef430b8" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Dessin") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Dexterity">Dextérité</label>
                                <input type="checkbox" id="Dexterity" name="" value="60744fd321882cb44ef430b5" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Dextérité") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Child">Enfants</label>
                                <input type="checkbox" id="Child" name="" value="60744fd321882cb44ef430b6" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Gestion") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Management">Gestion</label>
                                <input type="checkbox" id="Management" name="" value="6074503521882cb44ef430ba" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Gestion") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Strategy">Stratégie</label>
                                <input type="checkbox" id="Strategy" name="" value="60744fd321882cb44ef430b3" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Stratégie") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Strategy">Dés</label>
                                <input type="checkbox" id="Dice" name="" value="6078cc3549a7b0ba9e94063a" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Dés") ? true : false} />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="Strategy">Plateau</label>
                                <input type="checkbox" id="BoardGame" name="" value="6078cc3549a7b0ba9e94063b" onClick={(e) => getCheck(e.target.value)} defaultChecked={arrayCategorieGame.find(element => element == "Plateau") ? true : false} />
                            </div>
                        </div>
                    </div>
                    <button className="col-span-1 md:col-span-2 my-5 text-xl buttonTest" onSubmit={() => updateGameSelected(modify._id)}>Valider</button>
                </form>
            )
        }
        else {
            return (
                <p>Sélectionner un Jeu</p>
            )
        }
    }

    return (

        <div className="flex justify-center items-center flex-col">

            {/* Formulaire de Recherche */}
            <form action="" className="mt-20 p-4 rounded-3xl formSearch flex justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col md:flex-row items-center">
                    <label htmlFor="searchByName">Rechercher</label>
                    <input
                        type="text"
                        id="searchByName"
                        className="search-ByName ml-6 p-2 rounded"
                        value={searchInputText}
                        onChange={(e) => { setSearchInputText(e.target.value); setTest(false) }}
                    />

                </div>
                <a className="buttonTest px-4 m-4" onClick={() => setTest(true)}>Rechercher</a>
            </form>
            <div className="grid grid-cols-4 p-6">
                {filteredGames.map(game => {
                    return (
                        <div className="gameBlock grid rounded-2xl p-5 m-5">
                            <h4 className="font-semibold text-center">{game.title}</h4>
                            {/* <Link href={`admin/games/${game._id}`}> */}
                            <button className="" onClick={() => modifyGame(game)}>Modifier</button>
                            {/* </Link> */}
                            <a onClick={() => deleteGame(game._id)} href="/admin">Supprimer</a>
                        </div>
                    )
                })}
            </div>
            <div>
                {gameModified()}
            </div>










            {/* Formulaire de Modification */}

        </div>
    )
}

export default UpdateGame
