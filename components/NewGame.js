import React, { useState } from 'react'


const NewGame = (props) => {

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

    function getCheck(value) {
        categoriesText.push(value)
        console.log(categoriesText)
    }

    const submit = async () => {

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

        await fetch('http://localhost:5500/games', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameSchema),

        }).catch(error => console.log(error))
            .then(res => res.json())
        // .then(json => setGame(json.user))
    }

    return (
        <div className="flex justify-center items-center">
            <form action="" method="post" onSubmit={submit} className="formAdd p-10 rounded-3xl my-20 grid md:grid-cols-2 grid-cols-1 ">
                <h1 className="col-span-1 md:col-span-2 text-center my-5 text-4xl">Ajout de jeu</h1>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameName">Nom du jeu : </label>
                    <input type="text"
                        id="gameName"
                        value={titleText}
                        onChange={(e) => setTitleText(e.target.value)}
                        placeholder="Insérez le nom du jeu"
                        className="inputAdd p-1 rounded mt-2" />
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameDifficulty">Difficulté :</label>
                    <select
                        name=""
                        id="gameDifficulty"
                        className="inputAdd p-1 rounded mt-2"
                        value={difficultyText}
                        onChange={(e) => setDifficultyText(e.target.value)}>
                        <option value="1">Facile</option>
                        <option value="2">Intermédiaire</option>
                        <option value="3">Difficile</option>
                        <option value="4">Varié</option>
                    </select>
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gamePreamble">Préambule :</label>
                    <textarea type="text"
                        id="gamePreamble"
                        placeholder="Insérez un texte accrocheur pour le jeu"
                        className="inputAdd p-1 rounded mt-2"
                        value={preambleText}
                        onChange={(e) => setPreambleText(e.target.value)} />
                </div>


                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameDescription">Description : </label>
                    <textarea type="text"
                        id="gameDescription"
                        placeholder="Insérez la description du jeu"
                        className="inputAdd p-1 rounded mt-2"
                        value={descriptionText}
                        onChange={(e) => setDescriptionText(e.target.value)} />
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameMinPlayer">Nombre minimum de joueurs :</label>
                    <input
                        type="number"
                        id="gameMinPlayer"
                        min="0"
                        value={nbMinPlayerText}
                        onChange={(e) => setNbMinPlayerText(e.target.value)}
                        className="inputAdd p-1 rounded mt-2" />
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameMaxPlayer" >Nombre maximum de joueurs :</label>
                    <input type="number"
                        id="gameMaxPlayer"
                        min="0"
                        value={nbMaxPlayerText}
                        onChange={(e) => setNbMaxPlayerText(e.target.value)}
                        className="inputAdd p-1 rounded mt-2" />
                </div>



                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameTime">Temps de Jeu :</label>
                    <select
                        name=""
                        id="gameTime"
                        className="inputAdd p-1 rounded mt-2"
                        value={gameTimesText}
                        onChange={(e) => setGameTimesText(e.target.value)}>
                        <option value="(-15)">- de 15 minutes</option>
                        <option value="(15 - 30)">15 à 30 minutes</option>
                        <option value="(30 - 60)">30 à 60 minutes</option>
                        <option value="(+60)">+ de 60 minutes</option>
                    </select>
                </div>
                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameQuantity">Quantité de jeu à disposition :</label>
                    <input
                        type="number"
                        id="gameQuantity"
                        min="0"
                        placeholder="0"
                        className="inputAdd p-1 rounded mt-2"
                        value={quantityText}
                        onChange={(e) => setQuantityText(e.target.value)}
                    />
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameName">URL de la video :</label>
                    <input type="text"
                        id="gameName"
                        value={videoURLText}
                        onChange={(e) => setVideoURLText(e.target.value)}
                        placeholder="00000000"
                        className="inputAdd p-1 rounded mt-2" />
                </div>

                <div className="form-group flex flex-col p-1 px-2">
                    <label htmlFor="gameMinAge">Age recommandé :</label>
                    <input
                        type="number"
                        id="minAge"
                        min="0"
                        value={minAgeText}
                        onChange={(e) => setMinAgeText(e.target.value)}
                        className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col px-4 col-span-1 md:col-span-2 bg-red-500 rounded">
                    <label htmlFor="categories" className="pt-4 font-bold">Catégories :</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2" >
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Adult" name="" value="60744fd321882cb44ef430b7" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Adult">Adulte</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Ambiance" name="" value="60744fd321882cb44ef430b4" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Ambiance">Ambiance</label>
                        </div>

                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Bluff" name="" value="6074503521882cb44ef430bc" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Bluff">Bluff</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Cards" name="" value="6074503521882cb44ef430b9" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Cards">Cartes</label>

                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Coop" name="" value="6074503521882cb44ef430bb" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Coop">Coopération</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Draw" name="" value="6074503521882cb44ef430b8" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Draw">Dessin</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Dexterity" name="" value="60744fd321882cb44ef430b5" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Dexterity">Dextérité</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Child" name="" value="60744fd321882cb44ef430b6" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Child">Enfants</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Management" name="" value="6074503521882cb44ef430ba" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Management">Gestion</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Strategy" name="" value="60744fd321882cb44ef430b3" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Strategy">Stratégie</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="Dice" name="" value="6078cc3549a7b0ba9e94063a" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="Dice">Dés</label>
                        </div>
                        <div className="form-group-checkbox flex items-center justify-start">
                            <input type="checkbox" id="BoardGame" name="" value="6078cc3549a7b0ba9e94063b" onClick={(e) => getCheck(e.target.value)} />
                            <label className="pl-2" htmlFor="BoardGame">Plateau</label>
                        </div>
                    </div>
                </div>

                <button onSubmit={() => submit()} className="col-span-1 md:col-span-2 my-5 text-xl buttonTest" type="submit">Valider</button>

            </form>
        </div>
    )
}

export default NewGame
