import Slider from "react-slick"

export default function Reviews({ data }) {

    var gamesSettings = {
        dots: false,
        infinite: true,
        speed: 4000,
    };


    const games = data.map((game) => {


        return (
            <div key={game.title}>
                {game.title}
            </div>
        )

    })


    return (

        <div className="games">
            <h2 className="text-center p-5">L'avis de nos clients</h2>
            <Slider {...gamesSettings}>
                {games}
            </Slider>
        </div>
    )
}

