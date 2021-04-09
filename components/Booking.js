import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";

const Booking = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, []);


    const [scrollBottom, setScrollBottom] = useState(false)
    return (
        <section id="contact" className="reserver fixed bottom-0 lg:static flex justify-center items-center lg:py-20 ">
            <div data-aos="fade-right" className="container flex justify-center items-center lg:py-8">
                <div className="reserve-img hidden lg:block">
                    <figure>
                        <img src="../assets/img/deco/fun-1.jpg" alt="test" />
                    </figure>
                </div>
                <div className="reserve-infos flex justify-center flex-wrap m-3 lg:p-8 lg:ml-6">
                    <div className="reserve-text my-6 hidden lg:block">
                        <h3>Je souhaite réserver !</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur, dolorem odio doloremque numquam provident. Placeat explicabo dolor voluptatum neque.</p>
                    </div>
                        <Link href="/">
                            <a className="reserve-button rounded py-2 px-4 font-bold">Réserver</a>
                        </Link>
                </div>
            </div>
        </section>
    )
}

export default Booking
