"use client"
import React from 'react'
import RelatedPostIMG from '@/public/Emirates.jpg'
import Image from 'next/image'
import {IPsychologyAPI as IRP} from '@/app/components/interfaces/Psychology'
import Img from './ImageSanityRenderer'
import Link from 'next/link'
import moment from 'moment'

const RelatedPost = ({relatedPost}:any) => {
  const api:IRP[] = relatedPost
 
  return (
    <div className='mt-16 mb-20 className="max-w-[350px] md:max-w-[300px] lg:max-w-[400px] mx-auto'>

    {/* categoryTitle  */}
    <div className='flex items-center justify-normal w-[95%] pb-10 '>
        <div className='w-[35%] text-2xl  font-semibold capitalize'>
          <h2 className='w-full'>Related Article</h2>
        </div>
        <div className='w-[65%] rounded-full h-1 bg-gradient-to-r from-teal-500 to-blue-600'/>

    </div>


    {/* cards  */}
       
      <div className=' grid grid-cols-2 items-start lg:grid-cols-1 gap-2 lg:gap-5 '>
        {api.map(({_id,mainImage,publishedAt,shortDescription,slug,title})=>(
          <Link key={_id} href={`/post/${slug.current}`} className='overflow-hidden'>
          <div  
          className='relative text-white font-semibold
           md:hover:scale-105 md:duration-200 md:ease-out md:hover:shadow 
           
             cursor-pointer '>

            <Img
            height={450} width={350} priority={false} quality={85} key={_id}
          
             className='w-[100%] h-[300px] object-cover rounded lg:rounded-lg md:rounded-md '
             imageData={mainImage.asset} alt={title}/>
            <div className='w-[100%] h-[150px] absolute top-0 bg-gradient-to-b from-transparent to-black/5  '/>

            <div className='w-[100%] h-[150px] absolute bottom-0 bg-gradient-to-b from-black/5 to-black '/>
            <div className='z-20 absolute bottom-2 lg:left-6 lg:bottom-5 left-2 max-w-[95%]'>
              <h3 className='md:text-lg '>{title}</h3>
              <h2 className='text-sm lg:text-base pt-4 max-w-[98%] mx-auto text-white/90'>{shortDescription}</h2>
              <p className='text-[10px] text-cyanDark md:text-sm pt-2'>{moment(publishedAt).format('hh:mm a | ddd mm, yyyy')}</p>
              </div>

            </div>
            </Link>
        ))}
      </div>

    </div>

  )
}

export default RelatedPost