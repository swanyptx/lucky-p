import React, { useState } from 'react'

const UpdateGame = () => {

    const [divModify, setDivModify] = useState(false)

    return (
        <div className="flex justify-center items-center flex-col">

            {/* Formulaire de Recherche */}
            <form action="" className="mt-20 p-4 rounded-3xl formSearch flex justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col md:flex-row items-center">
                    <label htmlFor="searchGame" className="px-4 m-4">Rechercher</label>
                    <input type="text" id="searchGame" className="px-4 m-4 rounded p-2" placeholder="Insérez le nom du jeu" />
                </div>
                <button type="submit" className="buttonTest px-4 m-4" onClick={() => setDivModify(true)}>Rechercher</button>
            </form>

            {/* Formulaire de Modification */}
            <form action="" className="formAdd p-10 rounded-3xl my-20 grid md:grid-cols-2 grid-cols-1 ">
                <h1 className="col-span-1 md:col-span-2 text-center my-5 text-4xl">Modification de jeu</h1>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameName">Nom du jeu</label>
                    <input type="text" id="gameName" placeholder="Insérez le nom du jeu" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gamePreamble">Préambule</label>
                    <textarea type="text" id="gamePreamble" placeholder="Insérez un texte accrocheur pour le jeu" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameDescription">Description</label>
                    <textarea type="text" id="gameDescription" placeholder="Insérez la description du jeu" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameMinPlayer">Nombre minimum de joueurs</label>
                    <input type="number" id="gameMinPlayer" min="0" placeholder="0" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameMaxPlayer" >Nombre maximum de joueurs</label>
                    <input type="number" id="gameMaxPlayer" min="0" placeholder="0" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameDifficulty">Difficulté</label>
                    <select name="" id="gameDifficulty" className="inputAdd p-1 rounded mt-2">
                        <option value="">Facile</option>
                        <option value="">Moyen</option>
                        <option value="">Difficile</option>
                        <option value="">Varié</option>
                    </select>
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameMinPlayer">Nombre minimum de joueur</label>
                    <input type="number" id="gameMinPlayer" min="0" placeholder="0" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameMinAge" >Age minimum conseillé</label>
                    <input type="number" id="gameMinAge" min="0" placeholder="0" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameQuantity" >Quantité de jeu à disposition</label>
                    <input type="number" id="gameQuantity" min="0" placeholder="0" className="inputAdd p-1 rounded mt-2" />
                </div>
                <div className="form-group flex flex-col p-4">
                    <label htmlFor="gameTime">Temps de Jeu</label>
                    <select name="" id="gameTime" className="inputAdd p-1 rounded mt-2">
                        <option value="">15 à 30 minutes</option>
                        <option value="">30 à 60 minutes</option>
                        <option value="">60 et plus</option>
                    </select>
                </div>
                <div className="form-group flex flex-col p-4 col-span-1 md:col-span-2 py-6">
                    <label htmlFor="categories" className="py-4">Catégories</label>
                    <div className="w-full grid md:grid-cols-3 grid-flow-row gap-4 text-center" >
                        <div className="form-group-checkbox">
                            <label htmlFor="Adult">Adulte</label>
                            <input type="checkbox" id="Adult" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Ambiance">Ambiance</label>
                            <input type="checkbox" id="Ambiance" name="" />
                        </div>

                        <div className="form-group-checkbox">
                            <label htmlFor="Bluff">Bluff</label>
                            <input type="checkbox" id="Bluff" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Cards">Cartes</label>
                            <input type="checkbox" id="Cards" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Coop">Coopération</label>
                            <input type="checkbox" id="Coop" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Draw">Dessin</label>
                            <input type="checkbox" id="Draw" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Dexterity">Dextérité</label>
                            <input type="checkbox" id="Dexterity" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Child">Enfants</label>
                            <input type="checkbox" id="Child" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Management">Gestion</label>
                            <input type="checkbox" id="Management" name="" />
                        </div>
                        <div className="form-group-checkbox">
                            <label htmlFor="Strategy">Stratégie</label>
                            <input type="checkbox" id="Strategy" name="" />
                        </div>
                    </div>
                </div>
                <button className="col-span-1 md:col-span-2 my-5 text-xl buttonTest" type="submit">Valider</button>
                <button type="submit" className="col-span-1 md:col-span-2 my-2 text-xl buttonSupp">Supprimer</button>
            </form>
        </div>
    )
}

export default UpdateGame
