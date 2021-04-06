import Head from 'next/head'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>La Luck</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      
      <div className="container">
          <h1>Bonsoir</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vitae quidem animi ea. Repellendus accusantium ut sed minus ipsam molestiae. Corporis nobis id suscipit consequuntur odit commodi ex adipisci labore!</p>
      </div>
    </div>
  )
}
