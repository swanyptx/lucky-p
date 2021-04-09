import React from 'react';

export default function Calendar() {
    return(
        <section id="events" className="events flex justify-center items-center pt-72 lg:py-20 py-10">
            <div className="container">
                <h2 className="text-center p-10">Nos événements</h2>
                <div className="md:flex justify-center items-center">
                    <div className="calendar m-10 h-48 bg-gray-400">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugit.</p>
                    </div>
                    <div className="text-events">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
