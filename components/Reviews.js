import Slider from "react-slick"

export default function Reviews({ data }) {

    var settings = {

        slidesToShow: 1,
        dots: true,
        speed: 600,
        fade: 500,
        // slidesToScroll: 4,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         initialSlide: 2
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
    };

    const reviews = data.map((review) => {

        function getNote(note) {
            let arrayImgNote = [];
            for (let index = 0; index < note; index++) {
                arrayImgNote.push(<img src="/assets/img/notes/star.svg" alt="" />);
            }
            return arrayImgNote;
        }

        return (
            <div className="review text-white p-3">
                <img className="avatar" src="/assets/img/notes/avatar.svg" alt="" />
                <h3>{review.userName}</h3>
                <div className="flex flex-row justify-center">
                    {getNote(review.note)}
                </div>
                <p className="review-p">{review.review}</p>
            </div>
        )

    })


    return (
        <div className="reviews py-10">
            <h2 className="text-center py-5 text-2xl">L'avis de nos clients</h2>
            <Slider {...settings} className="text-center">
                {reviews}
            </Slider>
        </div>
    )
}