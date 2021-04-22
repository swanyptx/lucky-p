import React, { useState } from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Jeu from '../components/Jeu.js'

const Jeux = (props) => {

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
            <section className="jeux">
                <div className="py-20 sm:py-10 flex flex-col items-center justify-center ">
                    <h2 className="pb-10">Nos Jeux</h2>
                    <Jeu data={props.res}></Jeu>

                    <div className="text-center py-5">
                        <p className="py-5">Vous souhaitez voir toute notre Ludothèque ?</p>
                        <a className="rounded py-2 px-4 font-bold" href="/ludotheque">Cliquez ici !</a>
                    </div>
                </div>
            </section>
            <Booking></Booking>
            <Footer />
        </div>
    )
}

export default Jeux


export async function getStaticProps(context) {

    let res;

    try {
        res = await fetch(
            // 'https://luckyp-api.herokuapp.com/games'
            'https://luckyp-api.herokuapp.com/games'
        ).then((res) => res.json());


    } catch (err) {
        console.error(err);
    }


    return {
        props: { res }
    };

}


