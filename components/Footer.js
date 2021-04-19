import React from 'react'

const Footer = () => {
    return (
        <footer id="contact">
            <div className="flex justify-center items-center py-8 px-8 ">
                <div className="w-screen flex justify-around justify-items-center grid grid-col-1 gap-8 py-8  md:grid-cols-2 lg:grid-cols-4 ">
                    <div>
                        <h2>Adresse</h2>
                        <div className="mb-3">
                            <p>1 Bis, Rue Princesse,</p>
                            <p>59800 Lille</p>
                        </div>
                        <div>
                            <p>Métro Rihour ou</p>
                            <p>Ligne de Bus 55</p>
                        </div>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <div className="mb-3">
                            <p>Email :</p>
                            <p>lille@la-luck.com</p>
                        </div>
                        <div>
                            <p>Téléphone :</p>
                            <p>07 70 21 57 71</p>
                        </div>
                    </div>
                    <div>
                        <h2>Horaires</h2>
                        <div>
                            <p>Lundi : Fermé</p>
                            <p>Mardi : 19h - 00h</p>
                            <p>Mercredi : 19h - 00h</p>
                            <p>Jeudi : 19h - 00h</p>
                            <p>Vendredi : 19h - 00h</p>
                            <p>Samedi : 11h - 01h</p>
                            <p>Dimanche : 11h - 23h</p>
                        </div>
                    </div>
                    <div>
                        <figure >
                            <img className="w-full h-auto" src="/assets/img/logo/logo-elephant.svg" alt="test" />
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
