'use client'
import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineLeft,
  AiOutlineLine,
  AiOutlineRight,
  AiOutlineShareAlt,
  AiOutlineTwitter,
} from 'react-icons/ai';
import  CategoriesCard  from './CategoriesCard';
import LatestArticle from './LatestArticle';
import Link from 'next/link';
import { ICategories } from '../interfaces/Categories';
import Img from './ImageSanityRenderer';
import moment from 'moment';
import {useState} from 'react'
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

const Categories = ({categories,latestPost}:any) => {
  
  const api:ICategories[] = categories



  const [seeMore,setSeeMore] = useState(0)

//   const buttonHandlerLeft = ()=>{
//     if(seeMore <= 0){
//       setSeeMore(0);
//     }
//   }

// const buttonHandlerRight = ()=>{
//   if(seeMore )

// }


  return (
    
    <div className='max-w-[360px] md:max-w-[750px] lg:max-w-[1500px] mx-auto
flex flex-col items-center text-grayText mt-20
'>
  <div className='flex flex-col items-start   '>
      {/* title  */}
   <div className=' flex items-center justify-normal gap-x-3'>
      
        <Link  className=' px-2 text-cyanDark rounded  
        bg-customBlack'
        href={'/'}>Home</Link> 
        <span className=' text-cyanDark flex items-center mr-3'>
          <AiOutlineLine/>
          <AiOutlineRight/> 
          </span>
      
      <div className='text-xl md:text-2xl capitalize  tracking-wide font-bold'>
        <h1 className=''>{api[0]?.categories[0].title}</h1>
      </div>
      </div>
    
      

      {/* featured post  */}
      <motion.div
      viewport={{once:true}}
      initial={{x:"-100%",opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.2,type:"tween",ease:"easeIn"}}
       className=' grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3 lg:gap-1 lg:bg-gradient-to-br from-cyanLight via-cyanDark to-cyanLight rounded-3xl
      max-w-[350px] md:max-w-[750px] lg:max-w-[1600px]  mt-10   mx-auto'>
        {api?.filter((item,id) => id < 4 ).map(({_id,author,slug,categories,mainImage,subCategory,title,publishedAt,shortDescription},id)=>(
            <div key={_id}  
            className={` ${id == 0 && 'lg:rounded-tl-2xl'} ${id == 1 && 'lg:rounded-tr-2xl'} ${id == 2 && 'lg:rounded-bl-2xl'} ${id == 3 && 'lg:rounded-br-2xl'}
           group w-[335px] h-[335px] lg:w-[700px] lg:h-[350px]  relative mx-auto text-white overflow-hidden rounded-md`} >
              <Link href={`/post/${slug.current}`}>

                <Img className='w-[335px] h-[335px] lg:w-[700px] lg:h-[350px] object-cover object-center'
                 imageData={mainImage.asset} alt='post'
                 height={320} width={420} priority={true} 
                 quality={100} key={_id +'img'} />


                <div className=' flex flex-col items-start lg:group-hover:mb-10 lg:group-hover:gap-y-2 
                   duration-200 z-20 font-semibold
                absolute bottom-4  max-w-[95%] mx-auto'>
                    <h3 className='text-base md:text-lg lg:text-3xl  text-center lg:mb-8 mb-3 mx-auto '>{title}</h3>
                    <h4 className='pl-2  lg:pl-5 lg:pr-5 lg:text-center  w-[98%] mx-auto text-sm md:text-base mb-2'>{shortDescription}</h4>
                    <div className=' lg:pl-5 lg:pr-5   flex capitalize items-center lg:justify-between lg:w-[700px] mx-auto  text-cyanLight justify-normal gap-x-2 text-xs md:text-sm  '>
                       <p>{author.name} 
                       </p>
                       <p className='lg:hidden block'>
                       <AiOutlineLine size={20}/> </p>
                       <div className='lg:flex  items-center hidden'>
                        <AiOutlineLeft/>
                       <div className='h-[1px] w-[200px] bg-cyanDark '/>
                       <AiOutlineRight/>
                       </div>
                  <p className='bg-cyanDark px-1 text-white/90 rounded '>  {moment(publishedAt).format('hh:mm a | ddd mm,yy')}
                  </p>
                  </div>
                    </div>
                    <div className=' bg-gradient-to-b from-transparent via-black/30  to-black w-full h-[70%]
                    absolute bottom-0 z-10 lg:group-hover:h-[350px] duration-200
                    '/>
</Link>
                </div>
        ))}
      </motion.div>
      <div className='max-w-[360px] md:max-w-[750px] lg:max-w-[1400px] mx-auto mt-20 md:px-10
      flex items-start md:flex-row flex-col justify-normal  md:gap-x-16'>
      <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-2 lg:gap-x-4 max-w-[360px] md:max-w-[750px] lg:max-w-[800px] w-[98%] mx-auto'>
      {/* morePost   */}
           {api?.filter((item,id) => id >= 4  ).map(({_id,author,title,categories,mainImage,publishedAt,shortDescription,subCategory,slug})=>(
          <CategoriesCard key={_id+"123"}  _id={_id} author={author} publishedAt={publishedAt} slug={slug} mainImage={mainImage} title={title}/>
        ))}
      
      </div>
          {/* see mpre  */}

            {/* <div className='flex items-center justify-normal gap-x-10 mx-auto mt-10
        text-xl lg:text-2xl' */}
          {/* > */}
          {/* <span 
          onClick={buttonHandlerLeft} 
           className='bg-customBlack px-4 py-1 rounded hover:text-cyanDark'>
          <AiOutlineLeft/>
          </span >
          <span onClick={buttonHandlerRight}
          className='bg-customBlack px-4 py-1 rounded hover:text-cyanDark'>
          <AiOutlineRight/>
          </span> */}
        {/* </div> */}
      <motion.div
      
      initial="hidden"
      animate="visible"
      viewport={{once:true}}
      variants={{
        hidden:{y:"100%",opacity:0,scale:0.85},
        visible:{y:0,opacity:1,scale:1}
      }}
      className=' mx-auto mt-16 md:mt-0'>
      <LatestArticle latestPost={latestPost}/> 
      </motion.div>


      

      </div>

      {/* share page portions  */}
      <div className='max-w-[360px] md:max-w-[750px] lg:max-w-[1500px] mx-auto'>
      <div className='mt-16 md:mt-20 mb-16   flex flex-col items-start gap-y-4 md:gap-y-6  w-[100%] mx-auto'>
            <div className='h-[1px] w-full bg-gray-500/40 ' />
                <div className=''>
                    <ul className='flex items-center    gap-x-2 mx-auto '>
                        {shareContentStaticData.map(({id,title,link,icon})=>(
                            <li key={id} className=' border md:border-2 border-gray-500/80 rounded '>
                                <Link href={link} 
                                className='flex  items-center px-3 py-0.5 gap-x-2  '>
                                    {icon}
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            <div className='h-[1px] w-full bg-gray-500/40 '/>
        </div>
        </div>
        


    </div>
    </div>

  );
};

export default Categories;
