import * as React from "react";

type HeroBannerProps = {
  name: string;
  description: any;
  logo: any;
};

const HeroBanner: React.FC = ({ name, description, logo } : HeroBannerProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white text-center">
          <img
            src={logo}
            alt="Business Logo"
            className="mx-auto mb-6 w-20 h-20 animate__animated animate__fadeIn group overflow-hidden relative w-48 h-48 rounded-lg p-2 border border-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          />
          <h1 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn">
            {name}
          </h1>
          <p className="text-lg mb-8 animate__animated animate__fadeIn">
            {description}
          </p>
          <p className="text-xl font-light mb-12 animate__animated animate__fadeIn">
            Click one of the tiles below to leave us a review on your preferred site!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
