import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full`}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        >
            &#8250;
        </button>
    );
}


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full`}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        >
            &#8249;
        </button>
    );
}

function HomeMovieRow({ title }) {
    const movies = [
        { title: "Kanguva", img: "https://wallpapercave.com/wp/wp8872777.jpg" },
        { title: "Batman", img: "https://static.moviecrow.com/gallery/20240319/227335-Kanguva.jpeg" },
        { title: "Deadpool 3", img: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
        { title: "Kanguva", img: "https://wallpapercave.com/wp/wp8872777.jpg" },
        { title: "Batman", img: "https://static.moviecrow.com/gallery/20240319/227335-Kanguva.jpeg" },
        { title: "Deadpool 3", img: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
        { title: "Kanguva", img: "https://wallpapercave.com/wp/wp8872777.jpg" },
        { title: "Batman", img: "https://static.moviecrow.com/gallery/20240319/227335-Kanguva.jpeg" },
        { title: "Deadpool 3", img: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
        { title: "Kanguva", img: "https://wallpapercave.com/wp/wp8872777.jpg" },
        { title: "Batman", img: "https://static.moviecrow.com/gallery/20240319/227335-Kanguva.jpeg" },
        { title: "Deadpool 3", img: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
        { title: "Kanguva", img: "https://wallpapercave.com/wp/wp8872777.jpg" },
        { title: "Batman", img: "https://static.moviecrow.com/gallery/20240319/227335-Kanguva.jpeg" },
        { title: "Deadpool 3", img: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
    ];

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="movie-row mb-8 px-4 md:px-8 bg-black h-screen">
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <Slider {...settings} className="movie-slider">
                {movies.map((movie, index) => (
                    <div key={index} className="p-2">
                        <img src={movie.img} alt={movie.title} className="rounded-lg w-full h-64 object-cover" />
                        <h1 className="text-red-700 font-sans font-black text-xl">{movie.title}</h1>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeMovieRow;
