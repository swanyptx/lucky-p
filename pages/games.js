import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import Booking from '../components/Booking.js'
import Link from 'next/link'

export const getStaticProps = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5500/games');
    const data = await res.json()

    return {
        props: { data }
    }
}

const Games = ({ data }) => {

    const [slider, setSlider] = useState(0)
    const [slideSwipe, setSlideSwipe] = useState(4)

    const navbarBooking = true

    function sliderLeft() {
        while (slider >= 4) {
            return (
                setSlider(slider - 4),
                setSlideSwipe(slideSwipe - 4)
            )
        }
    }

    function sliderRight() {
        while (slider <= 4) {
            return (
                setSlider(slider + 4),
                setSlideSwipe(slideSwipe + 4)
            )
        }
    }



    const gameCards = data.map(game => {

        let maxLength = 140;
        let desc = game.preamble.substring(0, maxLength) + '...';

        let arrayCategories = [];
        for (let index = 0; index < game.categories.length; index++) {
            arrayCategories.push(
                <div className="gameBlockCategorie text-white rounded-sm p-1 m-1">{game.categories[index].categorieName}</div>
            )
        }

        return (
            <Link key={game._id} href={'/ludotheque/' + game._id} >
                <div className="gameBlock flex flex-col rounded-2xl m-3 p-5 cursor-pointer transform hover:scale-105">
                    <div className="fakeBlock self-center"> </div>
                    <h4 className="font-semibold text-center">{game.title}</h4>
                    <h4 className="desc">{desc}</h4>
                    <div>
                        <div className="flex flex-row justify-start ">{arrayCategories}</div>
                    </div>
                </div>
            </Link>
        )
    }).slice(slider, slideSwipe)

    return (
        <div>
            <Head>
                <title>La Ludothèque</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar displayNavbar={navbarBooking} booking={false} />

            <section className="pt-28 games flex flex-col items-center justify-center text-white">
                <h2 className="">Sélection de nos jeux</h2>
                <h4 className="text-white">Un avant-goût de tous nos jeux</h4>
                <div className="flex flex-row justify-center items-center">
                    <p onClick={() => sliderLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 transform hover:scale-110 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                        </svg>
                    </p>
                    <div className="containerWithoutMargin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 text-black">
                        {gameCards}
                    </div>
                    <p onClick={() => sliderRight()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 transform hover:scale-110 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center py-10">
                    <h3 className="text-center text-2xl py-2">Vous souhaitez voir d'autres jeux ? Ou faire une recherche plus poussée selon vos goûts ?</h3>
                    <a className="goldenButton" href="/ludotheque">Voir la ludothèque</a>
                </div>
            </section>
            <Booking />
            <Footer />
        </div >
    )
}

export default Games

