'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-gray-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <div className="px-6 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
              
              {/* Text Content */}
              <div className="flex justify-center md:justify-end">
                <div className="max-w-xl space-y-6 text-center md:text-left">
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                      Welcome to <br /> Delicious Coffee
                    </h1>
                    <Image
                      src="/coffee/cafe.png"
                      alt="Cafe Icon"
                      width={80}
                      height={80}
                      className="absolute top-2 right-0 md:right-10 w-14 h-12 md:w-20 md:h-16"
                    />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    A drink from the 'My Alowishus' bottled brews range <br />
                    or grab one of our delicious coffees.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Download App
                    </button>
                    <button className="bg-white text-black px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Shop Coffee
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/coffee/hero1.png"
                  alt="Coffee Hero"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-6 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
              
              {/* Text Content */}
              <div className="flex justify-center md:justify-end">
                <div className="max-w-xl space-y-6 text-center md:text-left">
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                      Welcome to <br /> Delicious Coffee
                    </h1>
                    <Image
                      src="/coffee/cafe.png"
                      alt="Cafe Icon"
                      width={80}
                      height={80}
                      className="absolute top-2 right-0 md:right-10 w-14 h-12 md:w-20 md:h-16"
                      />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    A drink from the 'My Alowishus' bottled brews range <br />
                    or grab one of our delicious coffees.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Download App
                    </button>
                    <button className="bg-white text-black px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Shop Coffee
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="/coffee/coffee-mid.png"
                  alt="Coffee Hero"
                  width={500}
                  height={500}
                  className="max-w-full h-auto"
                />
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-6 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
              
              {/* Text Content */}
              <div className="flex justify-center md:justify-end">
                <div className="max-w-xl space-y-6 text-center md:text-left">
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                      Welcome to <br /> Delicious Coffee
                    </h1>
                    <Image
                      src="/coffee/cafe.png"
                      alt="Cafe Icon"
                      width={80}
                      height={80}
                      className="absolute top-2 right-0 md:right-10 w-14 h-12 md:w-20 md:h-16"
                    />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    A drink from the 'My Alowishus' bottled brews range <br />
                    or grab one of our delicious coffees.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Download App
                    </button>
                    <button className="bg-white text-black px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                      Shop Coffee
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center overflow-hidden">
                <Image
                  src="/coffee/man-holding.png"
                  alt="Coffee Hero"
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
