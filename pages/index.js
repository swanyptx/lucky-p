import Head from 'next/head'

import Header from '../components/Header.js'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>La Luck</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header></Header>

    </div>
  )
}
