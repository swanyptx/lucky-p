import Slider from "react-slick";
import Image from "next/image";

export default function SliderMain() {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
      };

    return(
<<<<<<< HEAD
        <div className="container-slider w-full h-full overflow-hidden">
            <Slider {...settings}>
                    <div className="w-screen slide w-1/2">
                    {/* <Image 
                        src="/assets/img/bg/background4.jpg"
                        alt=""
                        layout="responsive"
                        width={700}
                        height={475}
                        /> */}
                        <img className="w-full" src="/assets/img/bg/background4.jpg" alt=""/>
                    </div>
                    <div className="slide w-1/2">
                    {/* <Image 
                        src="/assets/img/bg/background5.jpg"
                        alt=""
                        layout="responsive"
                        width={700}
                        height={475}
                        /> */}
                        <img className="w-full" src="/assets/img/bg/background4.jpg" alt=""/>
                    </div>
                    <div className="slide w-1/2">
                    {/* <Image 
                        src="/assets/img/bg/background6.jpg"
                        alt=""
                        layout="responsive"
                        width={700}
                        height={475}
                        /> */}
                        <img className="w-full" src="/assets/img/bg/background6.jpg" alt=""/>
                    </div>
            </Slider>
        </div>
=======
        <section className="container-slider">
            <h2>Slider</h2>
        </section>
>>>>>>> b558f39240d3f80244c2c7790f63c87c269fe215
    )
}

