import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";

const Booking = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, []);


    return (
        <section id="contact" className="reserver  flex justify-center items-center lg:py-20 ">
            <div data-aos="fade-up" className="container flex justify-center items-center lg:py-8">
                <div className="reserve-img hidden lg:block">
                    <figure>
                        <img src="../assets/img/deco/fun-1.jpg" alt="test" />
                    </figure>
                </div>
                <div className="reserve-infos flex flex-col justify-center m-3 lg:p-8 lg:ml-6">
                    <div className="reserve-text my-6 hidden lg:block">
                        <h3>Je souhaite réserver !</h3>
                        <p>Vous êtes plusieurs et vous souhaitez réserver une table ? Ou faire votre demande de mariage ? La Luck est l'endroit rêvé ! N'attendez plus !</p>
                    </div>
                    <Link href="/booking">
                        <a className="reserve-button m-auto ">Réserver</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Booking
