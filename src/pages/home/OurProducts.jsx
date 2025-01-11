/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import image1 from "./../../assets/homeProducts/BilfenaLogo.svg"
import image2 from "./../../assets/homeProducts/NewPantriLogo.svg"
import image3 from "./../../assets/homeProducts/OSELTRA75.svg"
import image4 from "./../../assets/homeProducts/PREGABILNT.svg"
import image5 from "./../../assets/homeProducts/ROARVITwithMolecule.svg"
import image6 from "./../../assets/homeProducts/TrilevLogo.svg"
import image7 from "./../../assets/homeProducts/Tritussplusv16.svg"

export default function OurProducts() {
    const images = [image1, image2, image3, image4, image5, image6, image7];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);

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
                            className={`flex-shrink-0 flex justify-center w-full px-6 ${visibleSlides === 2 ? "md:w-1/2" : ""
                                } ${visibleSlides === 3 ? "xl:w-1/3" : ""} `}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`w-60 md:w-80 xl:w-[450px] h-auto  ${index === 1 ? "xl:w-[4]" : ""}`}
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

    const handleNextSlide = () => {
        if (currentIndex < images.length - 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="hidden md:flex xl:hidden relative w-full max-w-5xl mx-auto  items-center space-x-10">
            {/* Previous Button */}
            <button
                onClick={handlePrevSlide}
                className={`absolute md:left-1 xl:left-4 top-1/2 transform -translate-y-1/2 rounded-full z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                disabled={currentIndex === 0}
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
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-96 h-40 rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNextSlide}
                className={`absolute md:right-1 xl:right-4 top-1/2 transform -translate-y-1/2 rounded-full z-10 ${currentIndex >= images.length - 2 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                disabled={currentIndex >= images.length - 2}
            >
                <IoIosArrowForward size={60} />
            </button>
        </div>
    );
};
const ThreeImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="hidden relative w-full max-w-9xl mx-auto xl:flex items-center font-lato">
            {/* Previous Button */}
            <button
                onClick={handlePrevSlide}
                className={`xl:left-0 top-1/2 transform -translate-y-1/2 rounded-full z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                disabled={currentIndex === 0}
            >
                <IoIosArrowBack size={80} />
            </button>

            {/* Slider Container */}
            <div className="flex overflow-hidden relative w-full">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 p-2">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`w-[500px] h-60 rounded-lg `}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={handleNextSlide}
                className={`xl:right-0 top-1/2 transform -translate-y-1/2  rounded-full z-10 ${currentIndex >= images.length - 3 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                disabled={currentIndex >= images.length - 3}
            >
                <IoIosArrowForward size={80} />
            </button>
        </div>
    );
};