import Slider from "react-slick"

export default function Reviews({ data }) {

    var gamesSettings = {
        dots: false,
        slidesPerRow: 3
    };


    const games = data.map((game) => {

        let arrayCategories = [];
        for (let index = 0; index < game.categories.length; index++) {
            arrayCategories.push(<p>{game.categories[index].categorieName}</p>)
        }

        return (
            <div key={game.title}>
                {arrayCategories}
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

