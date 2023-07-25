'use client'
import {motion} from 'framer-motion'
import { IPsychologyAPI as IParentingGuide } from './interfaces/Psychology';
import Link from 'next/link';
import Img from './sub Components/ImageSanityRenderer';
import moment from 'moment';





const ParentingGuide = ({parentingGuideAPI}:any) => {
  const api :[IParentingGuide] = parentingGuideAPI
  
  return (
    <>
<div

className='w-[100%] mx-auto
 bg-gradient-to-b from-dark/10 via-customBlack to-dark mt-20 relative text-grayText '>
   
<div className='md:max-w-[750px] lg:max-w-[1600px]  max-w-[360px] mx-auto '>
<div className='flex flex-col flex-shrink-0 items-start w-[99%] '>
<div className='lg:p-10 pl-4 lg:pl-60 py-4 lg:-ml-40 flex items-center gap-x-4 md:gap-x-12'>
  <div className=' w-1 h-10 rounded-full  md:w-2 md:h-16
   bg-gradient-to-b from-cyanDark to-cyanLight '/>
  <p className='text-4xl font-Raleway font-semibold tracking-wider'>
  Parenting Guide
    </p>
</div>
      <div 
      // initial="hidden" whileInView="visible" 
      // viewport={{once:true}} 
      // transition={{duration:0.4,type:"tween",ease:'easeIn'}}
      // variants={{
      //   visible:{y:0, opacity:1,scale:1},
      //   hidden:{y:"100%",opacity:0,scale:0.8}
      // }}
      className='grid grid-cols-1 lg:grid-cols-2   gap-x-10 items-center justify-center lg:justify-evenly   max-w-screen-sm md:max-w-screen-xl mx-auto
      mt-10 md:mt-14'>
        <div className='group w-[95&]  mb-10 md:mb-16 relative lg:-ml-10  md:duration-200 md:hover:text-white
        '>

        <div key={api[0]?._id} className='relative'>
              
                <Img className='p-2 pt-0 lg:p-0 w-full lg:h-[500px]
                 rounded-xl  object-cover shadow-md shadow-cyanDark' 
                imageData={api[0]?.mainImage.asset} alt='tectimg'
                 height={250} width={400}priority={false}quality={80} key={api[0]?._id}
                 />
              <div className='md:group-hover:h-[40%] lg:group-hover:h-[40%] h-[35%] md:h-[15%] lg:h-[25%] md:duration-200 absolute z-20   md:bottom-10 md:left-10 bottom-4 left-4  max-w-[90%] '>
                  <h3 className='text-2xl md:text-3xl lg:text-4xl text-center '>
                    {api[0]?.title}
                  </h3>
                  <p className='mt-6  text-base md:text-lg '>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {api[0]?.shortDescription}
                  </p>
                  <p className=' mt-3 mb-2 text-xs md:text-sm lg:text-base text-cyanDark font-bold'>
                    {moment(api[0]?.publishedAt).format("hh:mm a | ddd mm,YYYY")}
                  </p>
                  </div>
              </div>
              <div className='md:group-hover:h-[70%] md:duration-200
              absolute w-full h-[50%] bottom-0 rounded-md
              bg-gradient-to-b from-transparent via-customBlack/50 to-customBlack/75 z-10'/>
        </div>
        
        
        <motion.div
         initial="hidden" whileInView="visible" 
      viewport={{once:true}} 
      transition={{duration:0.4,type:"tween",ease:'easeIn'}}
      variants={{
        visible:{y:0, opacity:1,scale:1},
        hidden:{y:"100%",opacity:0,scale:0.8}
      }}
        className='grid grid-cols-1 lg:grid-cols-2  flex-1 w-full h-full 
        p-4 pt-0 gap-4'>
          {api?.filter((item,id) => id !== 0 && id < 6).map(({_id,title,mainImage,slug,publishedAt})=>(
          <Link key={_id} href={`/post/${slug.current}`}>
          <div  
            className=' max-w-full h-52 flex  
             bg-gradient-to-br from-cyanLight via-cyanLight to-cyanDark
              text-dark rounded-md shadow-md shadow-cyanDark  md:hover:scale-105 md:duration-200 '>

                <Img height={130} width={200}priority={false}quality={65} key={_id} 
                imageData={mainImage.asset} alt='tectimg' className='w-[50%]  h-52 object-cover rounded-l-md'/>
              
                <div className='flex flex-col justify-between items-center py-2'>  
                  <h3 className='text-center font-semibold text-base px-1'>
                    {title}
                  </h3>
                  <p className='text-xs md:text-sm font-bold text-center '>
                    {moment(publishedAt).format("ddd mm,yy")}
                  </p>
                  </div>
              </div>
              </Link>
          ))}
          
          
        </motion.div>

      </div>
     
      </div>

    
    </div>
    </div>
    </>
  )
}

export default ParentingGuide