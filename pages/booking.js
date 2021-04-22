import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const Booking = () => {

    const navbarBooking = true;

    return (
        <div className="bg-booking">
            <Head >
                <title>La Luck - Réservation</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Navbar displayNavbar={navbarBooking}
                booking={false}
            ></Navbar>
            <div className=" flex flex-col items-center min-h-screen">
                <h2 className="pt-28">Réservation</h2>
                <h4 className="text-white text-center">Une petite table ? Une grand table ? Dites-nous tout !</h4>
                <div className="bg-div ">
                    <form action="" className="flex flex-col">
                        <div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputName">Votre nom :</label>
                                <input type="text"
                                    id="inputName"
                                    placeholder="Entrez votre nom"
                                    className="inputAdd p-2 rounded mt-2" />
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputFirstName">Votre prénom :</label>
                                <input type="text"
                                    id="inputFirstName"
                                    placeholder="Entrez votre prénom"
                                    className="inputAdd p-2 rounded mt-2" />
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputPerson">Combien êtes-vous ?</label>
                                <select name=""
                                    id="inputPerson"
                                    className="booking-list inputAdd p-2 rounded mt-2"
                                    placeholder="Combien êtes vous ?">
                                    {/* <option value="" disabled selected>Combien êtes vous ?</option> */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">+5</option>
                                </select>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputDate">Quand voulez-vousr ?</label>
                                <input type="date"
                                    id="inputDate"
                                    className="inputAdd p-2 rounded mt-2 w-100" />
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputHour">À quelle heure ?</label>
                                <select name=""
                                    id="inputHour"
                                    className="booking-list inputAdd p-2 rounded mt-2">
                                    <option value="1">18:00</option>
                                    <option value="2">18:30</option>
                                    <option value="3">19:00</option>
                                    <option value="4">19:30</option>
                                    <option value="5">20:00</option>
                                    <option value="6">20:30</option>
                                    <option value="7">21:00</option>
                                    <option value="8">21:30</option>
                                    <option value="9">22:00</option>
                                    <option value="10">22:30</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit"
                            className="goldenButton m-auto margin"
                            value="Envoyer le message">
                        </input>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Booking;