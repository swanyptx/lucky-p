import React from 'react'
import Head from 'next/head'
import Booking from '../components/Booking.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const Brasserie = () => {
    return (
        <div>
            <Head>
                <title>La Brasserie</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
            <Header></Header>
            <section className="carte">
                <div className="container h-screen py-20 sm:py-10 flex flex-col items-center justify-center ">
                    <h2>Nos Cartes</h2>
                    <div className="">
                        <div>
                            <img src="https://fakeimg.pl/350x200/" />
                            <img src="https://fakeimg.pl/350x200/" />
                            <img src="https://fakeimg.pl/350x200/" />
                        </div>

                    </div>
                </div>
            </section>
            <Booking></Booking>
            <Footer/>
        </div>
    )
}

export default Brasserie