import Slider from "react-slick"

export default function Reviews({ data }) {

    var settings = {

        slidesToShow: 1,
        dots: true,
        speed: 600,
        fade: 500,
        autoplay: true
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
            <div key={review._id} className="review text-white p-3 flex justify-center">
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" width="40px" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
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