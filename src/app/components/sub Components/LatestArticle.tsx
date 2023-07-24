"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {IPsychologyAPI as ILA} from '../interfaces/Psychology'
import Img from './ImageSanityRenderer';

import moment from 'moment';
const LatestArticle = ({latestPost}:any) => {
  const api:ILA[] = latestPost

  




  const router = useRouter()
  return (
    <div className="max-w-[350px] md:max-w-[300px] lg:max-w-[400px] mx-auto text-grayText">
      {/* title  */}
      <div
        className="flex items-center gap-x-4 text-2xl font-semibold
       max-w-[95%] mx-auto pb-5"
      >
        <span className="w-[40%] capitalize ">latest article</span>

        <div className="h-1 w-[55%] bg-gradient-to-r from-blue-500 to-teal-500" />
      </div>

      {/* avatar or type  */}
      <div className="flex flex-col justify-normal items-start  gap-y-6">
        {api.filter((item,id) => id <= 5).map(
          ({ _id, title,mainImage,publishedAt,shortDescription,slug }) => (
            
            
            
            <div  onClick={() => router.push(`/post/${slug.current}`)} key={_id}  
              className=" overflow-hidden flex items-center justify-normal gap-x-2  md:gap-x-4
        md:duration-[250ms] ease-linear  md:hover:scale-105 md:hover:translate-y-2  md:hover:bg-cyanLight/75 md:hover:text-white  
        shadow-xl   rounded-lg md:rounded-xl cursor-pointer group h-[250px] w-[335px]  
        bg-gradient-to-r from-customBlack via-dark to-customBlack "
            
            >
                <Img
                  className="w-24 h-[50%] ml-1 md:rounded-xl md:group-hover:h-full  md:group-hover:w-28  md:group-hover:rounded-none
                   border-dark  md:duration-[220ms] ease-in-out object-cover object-center  "
                  imageData={mainImage.asset}
                  alt={title}
                  height={275}
                  width={350}
                  priority={true}
                  quality={100}
                />
                <div className="flex   h-full flex-col items-start justify-between md:gap-y-2 max-w-[90%]">
                  <h3 className="mt-4 mx-w-[97%] mx-auto px-1 text-base text-white  md:text-lg font-bold">
                    {title}
                  </h3>
                  <h4
                    className="mx-w-[97%] mx-auto px-1 text-[10px] md:text-base text-ellipsis  font-semibold pb-2
              "
                  >
                    {shortDescription}
                  </h4>
                  <p className='mx-w-[97%] text-[12px] mx-auto text-cyanDark mb-2'>{moment().format('hh:mm a | ddd mm, yyyy')}</p>
                </div>
            </div>

          )
        )}
      </div>
      <div
        className="flex border   mx-auto w-[40%] max-w-full mt-16
      md:hover:bg-cyanLight/75 md:hover:text-white md:duration-200 ease-in-out rounded-full"
      >
        {/* <button onClick={buttonHandler}
         className=" flex items-center gap-x-4 mx-auto py-1 " type="button">
          See More
          {index == 5 ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </button> */}
      </div>
    </div>
  );
};

export default LatestArticle;
