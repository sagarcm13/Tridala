/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import image1 from "./../../assets/homeProducts/img1.svg"
import img2 from "./../../assets/homeProducts/img2B.png"
import image3 from "./../../assets/homeProducts/img3.svg"
import imag from "./../../assets/homeProducts/img.png"
import imagt from "./../../assets/homeProducts/triagel.png"
import image5 from "./../../assets/homeProducts/img5.svg"
import roar from "./../../assets/homeProducts/roar.png"
import image9 from "./../../assets/homeProducts/img9.svg"
import image10 from "./../../assets/homeProducts/img10.svg"
import { useNavigate } from "react-router-dom";

export default function OurProducts() {
    const images = [image5, image9, image3, imag,roar, image1,  imagt, img2, image10];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    let navigate = useNavigate();

    // Update visible slides based on screen size
    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth >= 1280) {
                setVisibleSlides(3); // xl and above
            } else if (window.innerWidth >= 768) {
                setVisibleSlides(2); // md and above
            } else {
                setVisibleSlides(1); // small screens
            }
        };

        updateVisibleSlides(); // Initialize on load
        window.addEventListener("resize", updateVisibleSlides); // Update on resize

        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    // Calculate total slides
    const totalSlides = Math.ceil(images.length / visibleSlides);

    // Handlers for navigation
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <div className=" md:hidden relative w-full overflow-hidden flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={handlePrevSlide}
                    className="absolute left-1 md:left-2 xl:left-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10"
                >
                    <IoIosArrowBack size={30} />
                </button>

                {/* Image Container */}
                <div
                    className="flex transition-transform duration-500 w-full max-w-7xl"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 flex justify-center w-full px-6`}
                        >
                            <img onClick={() => { navigate('Products'); }}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`w-64 h-auto cursor-pointer`}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNextSlide}
                    className="absolute right-1 md:right-4 xl:right-10  top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10"
                >
                    <IoIosArrowForward size={30} />
                </button>
            </div>
            <ImageSlider2 images={images} />
            <ThreeImageSlider images={images} />
        </>
    );
}
const ImageSlider2 = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let navigate = useNavigate();

    const handleNextSlide = () => {
        console.log("hits");
        if (currentIndex < images.length - 2) {
            setCurrentIndex(currentIndex + 1);
        } else {
            let index = (currentIndex + 2) % images.length;
            setCurrentIndex(index);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex((currentIndex - 2 + images.length) % images.length);
        }
    };

    return (
        <div className="hidden md:flex xl:hidden relative w-full max-w-5xl mx-auto  items-center space-x-10">
            {/* Previous Button */}
            <button
                onClick={handlePrevSlide}
                className={`absolute md:left-1 xl:left-4 top-1/2 transform -translate-y-1/2 rounded-full z-10`}
            >
                <IoIosArrowBack size={60} />
            </button>

            {/* Slider Container */}
            <div className="flex overflow-hidden relative w-full">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-1/2 flex-shrink-0 p-2">
                            <img onClick={() => { navigate('Products'); }}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-96 h-44 rounded-lg cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNextSlide}
                className={`absolute md:right-1 xl:right-4 top-1/2 transform -translate-y-1/2 rounded-full z-10`}>
                <IoIosArrowForward size={60} />
            </button>
        </div>
    );
};
const ThreeImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let navigate = useNavigate();

    const handleNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const getVisibleImages = () => {
        const len = images.length;
        const prevIndex = (currentIndex - 1 + len) % len;
        const nextIndex = (currentIndex + 1) % len;

        return [
            images[prevIndex], // Image to the left
            images[currentIndex], // Center image
            images[nextIndex], // Image to the right
        ];
    };

    const visibleImages = getVisibleImages();

    return (
        <div className="hidden relative w-full max-w-9xl mx-auto xl:flex items-center font-lato">
            {/* Previous Button */}
            <button
                onClick={handlePrevSlide}
                className="absolute left-2 color-[#005239] top-1/2 transform -translate-y-1/2 rounded-full z-10"
            >
                <IoIosArrowBack size={80} />
            </button>

            {/* Slider Container */}
            <div className="flex overflow-hidden relative w-full mx-16">
                <div className="flex transition-transform duration-300 w-full justify-center items-center">
                    {visibleImages.map((image, index) => {
                        const isCenter = index === 1; // Middle image
                        return (
                            <div
                                key={index}
                                className={`w-1/3 flex-shrink-0 p-2 transition-all duration-300 ${isCenter ? "scale-125 z-10" : "scale-90"
                                    }`}
                                style={{
                                    transformOrigin: "center center",
                                }}
                            >
                                <img
                                    onClick={() => navigate("Products")}
                                    src={image}
                                    alt={`Slide ${currentIndex + index}`}
                                    className={`rounded-lg cursor-pointer ${isCenter ? "w-[600px] h-56" : "w-[500px] h-52 opacity-70"}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full z-10"
            >
                <IoIosArrowForward size={80} />
            </button>
        </div>
    );
};