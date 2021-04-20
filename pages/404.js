import Head from "next/head";

export default function NotFound() {
    return(
        <div className="bg-notfound h-screen">
        <Head >
            <title>La Luck - Page introuvable</title>
            <link rel="icon" href="/icon.ico" />
        </Head>
            <div className="container flex flex-col items-center justify-center">
                <h1>404</h1>
                <img src="/assets/img/deco/dribbble_1.gif" alt=""/>
                <h2>La page que vous cherchez semble introuvable.</h2>
                <a href="/" className="link-notfound border-solid border-4 border-grey-500 p-4 rounded mt-2">Retour à l'accueil</a>
            </div>
        </div>
    )
}

