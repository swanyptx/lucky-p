import React, { useState } from "react";
import Head from 'next/head'
import Calendar from '../components/Calendar'
import Booking from '../components/Booking.js'
import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js"
import BasicSection from '../components/BasicSection.js'
import SocialNetwork from '../components/SocialNetwork.js'
import Reviews from '../components/Reviews.js'
import SliderMain from '../components/SliderMain.js'
// import Image from "next/image";


const Home = (props) => {

  const [isAlreadyCame, setIsAlreadyCame] = useState("Waiting");
  const [hasNavbar, setHasNavbar] = useState(false);

  const userAlreadyCame = () => {
    if (isAlreadyCame == "Customer") {
      return (
        <div>
          <SocialNetwork />
          <Calendar />
          <Booking />
          <Footer />
        </div>
      )
    }
    if (isAlreadyCame == "NewCustomer") {
      return (
        <div>
          <BasicSection
            title="Le Concept de La Luck"
            text="La Luck est une brasserie avec mezzanine et velux offrant bières, burgers, poutines, brunches. La force de notre batiment est d’offrir plus de 1000 jeux de société que vous pouvez utilisé. Situé dans le Vieux-Lille., nous sommes ouverts depuis 2016."
            image="../assets/img/bg/background3.jpg"
            reverse={true}
            sectionName="concept"
            button={false}
            fade="up"
          />
          <div className="w-screen">
            <SliderMain />
          </div>
          <BasicSection
            title="La Brasserie de La Luck"
            text="Côté cuisine, La Luck fait tout maison à partir d'un max de produits locaux. Clin d'oeil à nos racines québécoises, la Poutine revisitée est l'une des stars du menu. Notre brunch s'inspire aussi largement de Montréal."
            image="../assets/img/bg/background2.jpg"
            reverse={false}
            sectionName="brasserie"
            button={true}
            buttonContent="Voir la brasserie"
            fade="up"
            href="/brasserie"
          />
          <BasicSection
            title="Les Jeux de La Luck"
            text="La Luck vous offre un choix de  plus de 1000 jeux de société à jouer seul ou entres amis. 
        Jeux de réflexe, de dextérité, d'équilibre, de bluff, de mimes, de stratégie, d'improvisation, de chant, de coopération... Les possibilités des jeux de société modernes sont illimitées !"
            image="../assets/img/bg/background4.jpg"
            reverse={true}
            sectionName="ludotheque"
            button={true}
            buttonContent="Voir la ludothèque"
<<<<<<< HEAD
            fade="top"
            href="/jeux"
=======
            fade="up"
            href="/games"
>>>>>>> edc30f7eff0fcae4f828822ca89423cc5fec0fe6
          />
            <Reviews data={props.res} />
         
          <Calendar />
          <Booking />
          <Footer />
          </div>
      )
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }

  return (
    <div className="">
      <Head>
        <title>La Luck</title>
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <div className="header flex flex-col justify-center items-center h-screen">

        <Navbar displayNavbar={hasNavbar} alreadyCame={isAlreadyCame}></Navbar>
        <div className="headerTitle text-center">
          <h1>Bienvenue à</h1>
          <img className="p-3" src="/assets/img/logo/logo_laluck.svg" alt="La Luck" />
        </div>
        <div className="choiceDisplay flex flex-col justify-center items-center mt-4 p-4 text-center">
          <p> Êtes-vous déjà venu à La Luck ?</p>
          <div className="buttons flex felx-row justify-around mt-2">
            <a className="text-white font-bold mx-1 md:mx-3 lg:mx-5" href="/#socialNetwork" onClick={() => { setIsAlreadyCame("Customer"); setHasNavbar(true) }}>
              Oui
                    </a>

            <a className="text-white font-bold mx-1 md:mx-3 lg:mx-5" href="#concept" onClick={() => { setIsAlreadyCame("NewCustomer"); setHasNavbar(true) }}>
              Non
                    </a>

          </div>
        </div>
      </div>

      { userAlreadyCame()}
      
    </div >
  )
}

export default Home


export async function getStaticProps(context) {

  let res;

  try {
    res = await fetch(
      'http://localhost:5500/reviews'
    ).then((res) => res.json());


  } catch (err) {
    console.error(err);
  }

  return {
    props: { res }
  };

}


