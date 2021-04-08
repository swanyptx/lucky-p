import Link from 'next/link'
import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";


const BasicSection = ({ title, text, image, reverse, sectionName, button, buttonContent = "", href = "/" }) => {
    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, []);

    const section = sectionName;

    const buttonLink = () => {
        if (button) {
            return (
                <div className="">
                    <Link href={href}>
                        <a className={`${section}-button rounded py-2 px-4 font-bold`}>{buttonContent}</a>
                    </Link>
                </div>
            );
        }
    };

    return (
        <section className={`${section} flex justify-center items-center lg:py-20 py-10`}>
            <div data-aos="fade-up" className={reverse ? `container lg:flex-row flex-col flex lg:flex-row-reverse justify-between items-center lg:py-8 ` : `container flex justify-center items-center lg:py-8 grid lg:grid-cols-2 sm:grid-cols-1`}>
                <div className={reverse ? `${section}-img flex flex-1 justify-end items-center hidden md:block` : `${section}-img flex flex-1 justify-start items-center hidden md:block`}>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </div>
                <div className={`${section}-infos flex flex-1 justify-center flex-wrap`}>
                    <div className={`${section}-text p-2 lg:p-8 text-center md:text-justify mx-2 xl:mx-20`}>
                        <h2 className="mt-6 py-4 pr-2 lg:pr-8">{title}</h2>
                        <p className="py-4 pr-2 lg:pr-8">{text}</p>
                    </div>
                    {buttonLink()}
                </div>
            </div>
        </section>
    )
}

export default BasicSection
