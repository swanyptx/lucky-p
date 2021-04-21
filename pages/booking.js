import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const Booking =  () => {

    const navbarBooking = true;

    return(
        <div className="bg-booking">
            <Head >
                <title>La Luck - Réservation</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Navbar displayNavbar={navbarBooking} 
            booking = {false}
            ></Navbar>
            <div className="container flex flex-col items-center justify-center">
                <h1 className="text-center pt-16">Réservation</h1>
                <div className="bg-div">
                    <form action="" className="flex flex-col">
                        <div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputName">Votre nom :</label>
                                <input type="text" 
                                id="inputName" 
                                placeholder="Entrez votre nom"
                                className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputFirstName">Votre prénom :</label>
                                <input type="text" 
                                id="inputFirstName" 
                                placeholder="Entrez votre prénom" 
                                className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputPerson">Combien êtes-vous ?</label>
                                <select name="" 
                                id="inputPerson" 
                                className="booking-list inputAdd p-1 rounded mt-2"
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
                                <label htmlFor="inputDate">Quand voulez-vous venir ?</label>
                                <input type="date" 
                                id="inputDate" 
                                className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="inputHour">À quelle heure ?</label>
                                <select name="" 
                                id="inputHour" 
                                className="booking-list inputAdd p-1 rounded mt-2">
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
                        <div className="btn-submit flex flex-col items-center">
                            <input type="submit" 
                            className="p-2 m-4 rounded mt-2" 
                            value="Réserver">
                            </input>
                        </div>
                    </form>
                </div>
            </div>
                <Footer />
        </div>

    )
}

export default Booking;