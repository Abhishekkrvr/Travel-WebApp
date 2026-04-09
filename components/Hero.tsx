"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Background */}
      <div className="hero-map" />

      {/* Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          className="absolute -left-2 -top-10 w-10 lg:w-12"
          src="/camp.svg"
          alt="Camp logo "
          width={74}
          height={29}
        />

        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-5xl lg:text-6xl leading-tight">
          Putuk Truno Camp Area
        </h1>

        <p className="mt-6 text-sm text-gray-600 sm:text-sm md:text-lg lg:text-lg">
          Putuk Truno Camp Area is a camping ground located in the heart of
          nature, offering a serene and peaceful environment.
        </p>

        {/* Rating */}
        <div className="my-5 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                alt="Star"
                width={17}
                height={17}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">173k+ (Users Reviews)</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col font-medium gap-2 sm:flex-row md:flex-row w-full">
          <button className="group flexCenter gap-2 rounded-full  bg-green-500 py-3 px-6 text-white transition-colors duration-300 hover:bg-orange-600 overflow-hidden">
            <span className="font-medium hover:font-bold">Book Now</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-0 -translate-x-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="group flexCenter gap-2 rounded-full border border-gray-300 bg-white py-3 px-6 text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white overflow-hidden">
            <span className="font-medium hover:font-bold">Details</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h6a2 2 0 012 2v12H5a2 2 0 01-2-2V5zm18 0h-6a2 2 0 00-2 2v12h6a2 2 0 002-2V5z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start mt-1 xl:mt-0">
        <div className="relative z-20 w-50 flex flex-col gap-4 rounded-2xl bg-gray-900 py-4 px-5 shadow-lg">
          <div className="flexBetween">
            <p className="regular-16 text-gray-400">Location</p>
            <Image src="/close.svg" alt="Close" width={20} height={20} />
          </div>
          <p className="bold-18 text-white">Putuk Truno</p>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-400">Distance</p>
              <p className="bold-18 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
