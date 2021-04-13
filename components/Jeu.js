import Slider from "react-slick"

export default function Reviews({ data }) {

    var gamesSettings = {
        dots: false,
        infinite: true,
        speed: 4000,
    };


    const games = data.map((game) => {

        const categories = game.categories
        console.log(categories)
        return (
            <div key={game.title}>
                {game.title}

                {game.categories}
            </div>
        )

    })

        return (

            <div className="games">
                <h2 className="text-center p-5">L'avis de nos clients</h2>
                {games}
            </div>
        )
}

