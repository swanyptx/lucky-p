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
            for (const index = 1; index < 4; index + 1) {
                return(
                   console.log(index),
                   console.log(note)
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
