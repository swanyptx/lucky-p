import Slider from "react-slick"

export default function Reviews({ data }) {
    
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
      };


    const reviews = data.map((review) => {

        function getNote(note) {
            console.log(note);
            for (let index = 0; index < note; index++) {
                return(
                    <img src="/assets/img/notes/star.svg" alt=""/>
                )
            }
        }

        return(
            <div key={review.userName}>
                    <div className="avis">
                        <p>{review.userName}</p>
                        <p>{review.review}</p>
                        {getNote(review.note)}
                    </div>
            </div>
        )

    })


    return (
        <div className="reviews">
            <h2 className="text-center p-5">L'avis de nos clients</h2>
            <Slider {...settings}>
                {reviews}
            </Slider>
        </div>
    )
}
