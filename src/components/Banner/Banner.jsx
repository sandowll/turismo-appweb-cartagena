import React from "react";
import BannerImg from "../../assets/banner/banner.jpg";

const Banner = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8 text-red-500">Portales de negocios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <img src={BannerImg} alt="Fábricas de Internacionalización de Turismo" className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-brightness duration-300" />
            <div className="absolute inset-0 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Fábricas de Internacionalización de Turismo</h3>
              
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <img src={BannerImg} alt="Premios Nacionales de Turismo" className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-brightness duration-300" />
            <div className="absolute inset-0 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Premios Nacionales de Turismo</h3>
              
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <img src={BannerImg} alt="Colombia para empresarios" className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-brightness duration-300" />
            <div className="absolute inset-0 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Colombia para empresarios</h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

