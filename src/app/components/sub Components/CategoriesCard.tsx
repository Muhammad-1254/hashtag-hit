import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { it } from 'node:test'
import React, { FC } from 'react'
import Img from './ImageSanityRenderer'
import moment from 'moment'
import {ICat} from '../interfaces/Categories'



const CategoriesCard:FC<ICat> = ({_id,author,publishedAt,slug,mainImage,title,}) => {
  return (
    <Link href={`/post/${slug.current}`} className='flex flex-col items-start'>
    <div className=' max-w-[340px] lg:w-[360px] h-[450px] my-4 pb-4
     bg-gradient-to-r from-customBlack via-dark to-customBlack hover:scale-105 ease-in-out duration-200 cursor-pointer
 text-grayText hover:text-white rounded-lg
 group overflow-hidden'   
    key={_id}>
      <Img 
      className=' object-cover object-center w-[340px] h-[320px] group-hover:h-[350px] duration-300 ease-out'
       imageData={mainImage.asset} alt='categoryImage'
       height={200} width={330} priority={true} quality={90} key={_id+"img"}/>


      <div className='flex flex-col items-start h-[130px] justify-between    max-w-[95%] group-hover:h-[100px] duration-200 ease-in'>
        <h3 className='text-sm mt-4 md:text-base lg:text-lg text-center px-2 font-semibold'>{title}</h3>
        <p className='text-[10px]  md:text-sm text-cyanDark mb-2 font-semibold mx-auto'>{author.name}
         {' '}{'-'}{' '}{moment(publishedAt).format('ddd mm,yyyy')}</p>
      </div>
    </div>
      </Link>
  )
}

export default CategoriesCard