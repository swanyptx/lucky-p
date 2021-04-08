import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Header from '../components/Header.js'
import Calendar from '../components/Calendar'
import Booking from '../components/Booking.js'
import Footer from "../components/Footer.js"
import BasicSection from '../components/BasicSection.js'
import SocialNetwork from '../components/SocialNetwork.js'
import Reviews from '../components/Reviews.js'
import SilderMain from '../components/SliderMain.js'


const Home = () => {

  const [isAlreadyCame, setIsAlreadyCame] = useState("");
  console.log(isAlreadyCame)
  return (
    <div className="">
      <Head>
        <title>La Luck</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header passChildData={isAlreadyCame}></Header>
{/* 
      if(isAlreadyCame) {} */}
      <BasicSection
        title="Le Concept de La Luck"
        text="La Luck est une brasserie avec mezzanine et velux offrant bières, burgers, poutines, brunches. La force de notre batiment est d’offrir plus de 1000 jeux de société que vous pouvez utilisé. Situé dans le Vieux-Lille., nous sommes ouverts depuis 2016."
        image="../assets/img/bg/background3.jpg"
        reverse={true}
        sectionName="concept"
        button={false}
      />

      {/* <SilderMain /> */}

      <BasicSection
        title="La Brasserie de La Luck"
        text="Côté cuisine, La Luck fait tout maison à partir d'un max de produits locaux. Clin d'oeil à nos racines québécoises, la Poutine revisitée est l'une des stars du menu. Notre brunch s'inspire aussi largement de Montréal. 
        Pis à boire? Des bières crafts, du vin naturel, des cocktails / mocktails création et du cola bio. "
        image="../assets/img/bg/background2.jpg"
        reverse={false}
        sectionName="brasserie"
        button={true}
        buttonContent="Voir la brasserie"
        href="/"
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
        href="/"
      />

      <Reviews />

      {/* <SocialNetwork/> */}

      <Calendar />
      <Booking />
      <Footer />
    </div>
  )
}

export default Home