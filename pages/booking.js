import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking =  () => {

    const navbarBooking = true;

    return(
        <div className="bg-booking">
            <Navbar displayNavbar={navbarBooking} 
            booking = {false}
            ></Navbar>
            <div className="container flex flex-col items-center justify-center">
                <h1 className="text-center p-12">Réservation</h1>
                <div className="bg-div">
                    <form action="" className="flex flex-col">
                        <div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="gameName">Votre nom :</label>
                                <input type="text" id="gameName" placeholder="Entrez votre nom" className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="gameName">Votre prénom :</label>
                                <input type="text" id="gameName" placeholder="Entrez votre prénom" className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="gameName">Combien êtes-vous ? </label>
                                <input type="number" id="gameName" placeholder="Entrez le nombre de personnes" className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="gameName">Quand voulez-vous venir ?</label>
                                <input type="date" id="gameName" placeholder="Entrez votre prénom" className="inputAdd p-1 rounded mt-2"/>
                            </div>
                            <div className="form-group flex flex-col p-2">
                                <label htmlFor="gameDifficulty">À quelle heure ?</label>
                                <select name="" id="gameDifficulty" className="inputAdd p-1 rounded mt-2">
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
                    <button type="submit" className="test-btn py-6">Réserver</button>
                    </form>
                </div>
            </div>
                <Footer />
        </div>

    )
}

export default Booking;