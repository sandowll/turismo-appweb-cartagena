import React from "react";
import BannerImg from "../../assets/banner/banner.jpg";
import { FaRegLightbulb, FaRegHeart, FaRegClock } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <img src={BannerImg} alt="Banner Turístico" className="w-full" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="container text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Descubre Cartagena</h1>
          <p className="text-lg mb-6">
            Encuentra aventuras inolvidables y momentos extraordinarios en esta hermosa ciudad.
          </p>
          <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center">
              <FaRegLightbulb className="text-5xl mb-2" />
              <p className="text-xl">Descubre</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegHeart className="text-5xl mb-2" />
              <p className="text-xl">Disfruta</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegClock className="text-5xl mb-2" />
              <p className="text-xl">Explora</p>
            </div>
          </div>
          <button className="bg-white text-primary py-3 px-6 rounded-full mt-8 hover:bg-gray-100 transition duration-300 ease-in-out">Explora Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


