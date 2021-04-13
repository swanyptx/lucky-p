import React from 'react'
import Head from 'next/head'

const Admin = () => {
    return (
        <div>
            <Head>
                <title>Espace Admin</title>
                <link rel="icon" href="/icon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <div className="flex justify-center items-center py-10 admin">
                <div className="container admin-panel">
                    <nav>
                        <ul className="flex flex-col items-center">
                            <li className="p-2 m-2">La Luck</li>
                            <li className="p-2 m-2">Reservation</li>
                            <li className="p-2 m-2">Ajout de jeux</li>
                        </ul>
                    </nav>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="gameName">Nom du jeu</label>
                            <input type="text" id="gameName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="UrlImage">Url de l'image</label>
                            <input type="text" id="UrlImage"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descriptionGame">Description</label>
                            <input type="text" id="descriptionGame"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin