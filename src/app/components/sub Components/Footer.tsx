import Image from 'next/image';
import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import logo from '../../../../public/hashtag-hit-website-favicon-white.png';

const Footer = () => {
  return (
    <div
      className="w-full md:h-auto   text-grayText/90 border-t-2 border-cyanDark 
    bg-gradient-to-b from-dark via-customBlack to-black  "
    >
      <div
        className="
      max-w-[380px] md:max-w-[800px] lg:max-w-[1500px] mx-auto"
      >
        <div className="w-full h-[50%] md:pt-16 flex  flex-wrap items-center  justify-evenly">
          <Image
            src={logo}
            alt="logo"
            className="
          object-cover md:w-80 md:h-80 hidden md:flex  -ml-10 md:-ml-0 lg:-ml-10"
          />
          <div className="flex flex-col  flex-wrap max-w-[350px] md:max-w-[500px]  md:gap-y-10 pt-5 ">
            <div className="flex md:hidden items-center gap-x-4 pb-4">
              <Image
              
                src={logo}
                alt="logo"
                className="
          object-cover w-20 h-20 rounded-full "
              />
              <h1 className="font-Raleway text-cyanLight  text-3xl md:text-5xl ">
                Hashtag Hit
              </h1>
            </div>

            <h1 className="font-Raleway text-cyanLight md:ml-14 text-center hidden md:flex text-3xl md:text-5xl ">
            Hashtag Hit
            </h1>

            <p className="text-ellipsis md:mx-10 lg:mx-0 text-sm pb-4">
              At HashtagHit, we believe that life is a tapestry of experiences
              waiting to be unraveled. We are passionate explorers,
              storytellers, and seekers of the extraordinary. Our blog is a
              digital sanctuary, a place where you can escape the ordinary and
              immerse yourself in the captivating realms of travel, cultur, and
              discovery.
            </p>
            <p className="text-ellipsis text-sm md:mx-10 lg:mx-0 pb-4">
              Our mission is to ignite your wanderlust and inspire you to
              embrace the unknown. Through vivid narratives, captivating
              photographs, and insightful reflections, we bring you closer to
              the heart of each destination, unraveling its essence and inviting
              you to see the world through a new lens.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5 md:gap-y-10">
            <h1 className="text-4xl text-cyanDark md:mt-10">Follow Us</h1>
            <div className="bg-dark  rounded  ">
              <input
                placeholder="enter your email address"
                className="ring ring-cyanLight  "
              />
              <button
                className="text-cyanDark text-ellipsis px-4 md:hover:animate-pulse
               md:hover:scale-105"
              >
                Susbscribe
              </button>
            </div>
            <div className="flex   items-center gap-x-5 md:gap-x-20 lg:gap-x-5 ">
              <AiOutlineFacebook
                size={50}
                className="cursor-pointer md:hover:scale-125 duration-200 text-cyanDark md:hover:text-teal-400"
              />
              <AiOutlineTwitter
                size={50}
                className="cursor-pointer  md:hover:scale-125 duration-200 text-cyanDark md:hover:text-teal-400"
              />
              <AiOutlineLinkedin
                size={50}
                className="cursor-pointer  md:hover:scale-125 duration-200 text-cyanDark md:hover:text-teal-400"
              />
              <AiOutlineYoutube
                size={50}
                className="cursor-pointer md:hover:scale-125 duration-200 text-cyanDark md:hover:text-teal-400"
              />
            </div>
          </div>

          <div className="flex flex-col items-start mt-10 md:mt-20  mb-10 gap-y-8 ml-4 w-[90%]  text-sm">
            <div className="md:max-w-[60%]  text-start">
              <p>
                So, welcome aboard. Get ready to dive deep into the wonders of
                our world, ignite your wanderlust, and uncover the magic that
                lies just beyond the horizon. The adventure begins now.
              </p>
            </div>
            <div>
              <p>About-Contact Us-Privacy-Policy-Careers</p>
            </div>
            <div>
              <p>
              © 2023 HashtagHit.PK - All rights reserved </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
