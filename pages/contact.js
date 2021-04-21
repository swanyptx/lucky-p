import emailjs from "emailjs-com";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";


export default function ContactUs(){

    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   
    const navbarContact = true;

    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;
        
        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation= 'dongle 1s';
            setTimeout(() => {
                mail.style.animation ='none';
            }, 1000);
            return false;
        }
    };

    const failMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'Merci de remplir correctement les champs requis * 😕';
        formMess.style.background = '#893434';
        formMess.style.animation = 'dongle 1s';
        
        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    };

    const succesMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'Message envoyé ! Nous reviendrons vers vous dès que possible. 😊';
        formMess.style.background= '#4BB543';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 4000);
    }


    function sendEmail(e) {
        e.preventDefault();

        if(name && isEmail() && message) { 
        emailjs.sendForm('service_1wk49vw', 'template_pj2fopk', e.target, 'user_FDJOsxHkWluHjYlGwlpqD')
          .then((result) => {
              succesMessage();
              setName("");
              setFirstname("");
              setPhone("");
              setEmail("");
              setMessage("");
          });
        } else {
            failMessage();
        }
    };

    return(
        <div className="bg-booking">
        <Head >
            <title>La Luck - Contact</title>
            <link rel="icon" href="/icon.ico" />
        </Head>
        <Navbar displayNavbar={navbarContact} contact = {false}></Navbar>
        <div className="container flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-center pt-28 ">Contactez-nous</h1>
            <div className="bg-div">
            <form onSubmit={sendEmail} className="flex flex-col">
                    <div className="">
                        <p>* Champs obligatoires</p>
                        <div className="form-group flex flex-col p-2 py-4">
                            <input type="text" 
                            className="p-2 pl-2 rounded-full leading-none pr-2 " 
                            placeholder="Nom *" 
                            name="name"
                            autoComplete="off"
                            id="name"
                            onChange={(e) =>setName(e.target.value)}
                            value={name}
                            />
                        </div>
                        <div className="form-group flex flex-col p-2 py-4">
                            <input type="text" 
                            className="p-2 pl-2 rounded-full" 
                            placeholder="Prénom" 
                            name="firstname"
                            id="firstname"
                            onChange={(e) =>setFirstname(e.target.value)}
                            value={firstname}
                            />
                        </div>
                        <div className="form-group flex flex-col p-2 py-4">
                            <input type="text" 
                            className="p-2 pl-2 rounded-full" 
                            placeholder="Téléphone" 
                            name="phone"
                            id="phone"
                            onChange={(e) =>setPhone(e.target.value)}
                            value={phone}
                            />
                        </div>
                        <div className="form-group flex flex-col p-2 py-4">
                            <label id="not-mail">Email non valide</label>
                            <input type="text" 
                            className="p-2 pl-2 rounded-full" 
                            placeholder="Adresse email *" 
                            name="email"
                            autoComplete="off"
                            id="email"
                            onChange={(e) =>setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <div className="form-group flex flex-col p-2 py-4">
                            <textarea className="inputAdd p-1 pl-2 rounded-2xl"  
                            id="message" 
                            cols="30" 
                            rows="5" 
                            placeholder="Entrez votre message *" 
                            onChange={(e) =>setMessage(e.target.value)}
                            value={message}
                            name="message">
                            </textarea>
                        </div>
                        <div className="btn-submit flex flex-col items-center">
                            <input type="submit" 
                            className="p-2 py-4 m-4 rounded-full" 
                            value="Envoyer le message">
                            </input>
                        </div>
                    </div>
                    <div className="form-message rounded-full m-5 p-4 text-center"></div>
                </form>
            </div>
        </div>
            <Footer />
    </div>
    )
}