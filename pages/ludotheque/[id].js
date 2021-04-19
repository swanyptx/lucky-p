export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5500/games');
    const data = await res.json()

    const paths = data.map(game => {
        return {
            params: { id: game._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:5500/games/' + id);
    const data = await res.json();
    console.log(data)
    return {
        props: { game: data }
    }
}


const Details = ({ game }) => {

    const gameID = game.map( game => {
        return (
            <p>{game.title}</p>
        )
    })

    return (
        <div>
            <h1>Detail</h1>
            <h1>{gameID}</h1>
        </div>
    );
}

export default Details