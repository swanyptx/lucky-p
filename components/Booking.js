import React, {useState} from 'react'
import Link from 'next/link'

const Booking = () => {
    const [scrollBottom, setScrollBottom] = useState(false)
    return (
        <section className="reserver fixed bottom-0 w-screen lg:static ">
            <div className="container flex justify-center items-center  lg:py-8">
                <div className="reserve-img hidden lg:block">
                    <figure>
                        <img src="../assets/img/deco/fun-1.jpg" alt="test" />
                    </figure>
                </div>
                <div className="reserve-infos flex justify-center flex-wrap lg:p-8 lg:ml-6">
                    <div className="reserve-text my-6 hidden lg:block">
                        <h2>Je souhaite réserver !</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit consectetur, dolorem odio doloremque numquam provident. Placeat explicabo dolor voluptatum neque.</p>
                    </div>
                    <div className="m-8">
                        <Link href="/">
                            <a className="reserve-button rounded py-2 px-4 font-bold">Réserver</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking
