"use client"
import React, { FC } from 'react';
import Link from 'next/link';
import {
  AiOutlineBars,
  AiOutlineFacebook,
  AiOutlineInstagram,

  AiOutlineLine,

  AiOutlineRight,
  AiOutlineShareAlt,
  AiOutlineTwitter,
} from 'react-icons/ai';

import {  PortableText} from '@portabletext/react';
import { RichTextComponents } from './RichTextComponents';

import { Post as IPost } from '../interfaces/Post';
import Img from './ImageSanityRenderer';
import moment from 'moment';
import {motion} from 'framer-motion'
const shareContentStaticData = [
  {
    id: 1,
    title: 'share',
    link: '',
    icon: <AiOutlineShareAlt />,
  },
  {
    id: 2,
    title: 'facebook',
    link: '',
    icon: <AiOutlineFacebook />,
  },
  {
    id: 3,
    title: 'twitter',
    link: '',
    icon: <AiOutlineTwitter />,
  },
];

const Post: FC<IPost> = ({
  _id,
  title,
  body,
  _updatedAt,
  publishedAt,
  mainImage,
  author,
  categories,
  shortDescription,
  slug,
  subCategory,
}) => {




  return (
    <div
      className="flex flex-col items-start justify-normal 
    max-w-[320px] md:max-w-[750px] mx-auto mt-20 md:mt-28"
    >
      {/* roadmap */}
      <div className="text-base text-cyanDark">
        <p className="flex items-center gap-x-3 ">
          <Link
            href={'/'}
            className="md:hover:text-cyanLight font-semibold  cursor-pointer"
          >
            Home
          </Link>
          <AiOutlineLine/>
          <AiOutlineRight className='-ml-4'/>
      {/* subCategory title  */}
    
        <h3 className=" capitalize bg-cyanDark px-2 text-white font-semibold 
 "

        >{subCategory}</h3>
          
        </p>

      </div>
      {/* post title  */}
      <div className="mt-10 md:mt-14">
        <h1
          className="max-w-[85%] text-2xl md:text-4xl text-ellipsis 
        font-semibold "
        >
          {title}
        </h1>
      </div>

      {/* author section  */}
      <div className="flex items-center gap-x-3 mx-auto md:mx-0 pl-4 md:gap-x-5 mt-14 md:mt-20 capitalize">
        <Img
          className=" 
        w-16 h-16 md:w-14 md:h-14  rounded-full object-cover"
         
          quality={50}
          priority={true}
          height={100}
          width={100}
          imageData={author.image.asset}
          alt="authorImage"
        />
        <span className="text-[10px]   "> By </span>
        <h3 className="text-[16px] md:text-lg lg:text-xl font-semibold">{author.name} </h3>
        
        <p className="text-[10px] md:text-base font-semibold text-cyanDark">{moment(publishedAt).format('ddd mm, yy')}</p>
      </div>

      {/* author social sites */}
      <div  className="-ml-2 md:-ml-0 list-none flex  items-center justify-between  gap-x-2 mx-auto mt-4 md:mt-6 mb-10 md:mb-14">
          {shareContentStaticData.map(
            ({ id, link, title, icon }) => (
              <li
                key={id}
                className="md:hover:text-cyanLight/75 md:hover:border-cyanLight/75 
                border md:border-2 border-gray-500/80 rounded  group  "
              >
                <Link
                  className="flex  items-center px-3 py-0.5 gap-x-2 "
                  href={link}
                >
                 <span className='md:group-hover:text-white text-lg '> {icon}</span>
                  {title}
                </Link>
              </li>
            )
          )}

      </div>

      {/* Main Image  */}
      <div
      className="max-w-[95%] my-20 mx-auto md:hover:scale-105 md:duration-200 ease-in">
        <Img
          className="w-[100vw] h-[50vh]  object-cover rounded  "
          imageData={mainImage.asset}
          width={1000} height={750}
          priority={true}
       
          quality={100}
          alt="mainImage"
        />
      </div>

      {/* post des  */}
      {/* <div className="flex flex-col items-start justify-normal gap-y-10 pt-10 px-2 text-ellipsis">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {postAPI[0].postDescription!.des}
        </p>

        <Image
          className="max-w-[60%] w-full mx-auto rounded "
          src={postAPI[0].postDescription!.imageURL}
          alt="postDes"
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {postAPI[0].postDescription!.des}
        </p>
      </div> */}

      <PortableText value={body} components={RichTextComponents}/>

      {/* share post portion  */}

      <div className="mt-16 md:mt-20 mb-16   flex flex-col items-start gap-y-4 md:gap-y-6 max-w-[100%] w-[100%] mx-auto">
        <div className="h-[1px] w-full bg-gray-500/40 " />
        <div className="">
          <ul className="flex items-center    gap-x-2 mx-auto ">
            {shareContentStaticData.map(({ id, title, link, icon }) => (
              <li
                key={id}
                className=" border md:border-2 border-gray-500/80 rounded "
              >
                <Link
                  href={link}
                  className="flex  items-center px-3 py-0.5 gap-x-2  "
                >
                  {icon}
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] w-full bg-gray-500/40 " />
      </div>
    </div>
  );
};

export default Post;
