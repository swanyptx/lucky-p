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
            <div className="review text-white p-3">
                {/* <img className="avatar" src="/assets/img/notes/avatar.svg" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
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