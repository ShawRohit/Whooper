import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Slider from "react-slick";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [
    "https://www.coretech.us/hs-fs/hubfs/Schedule-a-Demo-Banner-LP-TYP_V2.jpg?width=1200&name=Schedule-a-Demo-Banner-LP-TYP_V2.jpg",
    "https://www.mailtastic.com/hubfs/10%20steps%20to%20creating%20professional%20email%20signature%20banners_HubSpot.jpg", // Replace with your second image URL
  ];
  const text = ""; // Replace with your desired text

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Change the duration (in milliseconds) for the slide transition
    }, 5000); // Change the interval (in milliseconds) for image change

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      {/* Banner section  */}
      <div className="banner">
        <div className="flex items-center justify-center">
          {/* <img
            src={images[currentImage]}
            alt="Slider"
            className={`object-cover h-96 w-full transition-opacity duration-1000 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          /> */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/692/266/original/sale-promotion-banner-template-vector.jpg"
            alt="Slider"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center mx-6 text-yellow-600 text-4xl font-serif font-bold z-10 pointer-events-none">
          {text}
        </div>
      </div>
      {/* Category Sections */}
      <div>
        <div className="flex items-center justify-center mt-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-display text-yellow-600 mt-4">
              Category
            </h1>
            <h6 className="text-sm mt-6 text-center mx-28">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h6>
          </div>
        </div>

        {/* Cards Section */}

        <div className="mt-4 pt-4 flex flex-wrap m-4 p-4 text-center justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* Category section */}
    </div>
  );
};

export default Home;
