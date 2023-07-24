"use client"

import Link from "next/link"
import Img from "./sub Components/ImageSanityRenderer"
import {IPsychologyAPI as IFictionalAPI} from './interfaces/Psychology'
import moment from "moment"
import {motion} from 'framer-motion'

const Fictional = ({fictionalAPI}:any) => {
  const api:[IFictionalAPI] = fictionalAPI
  // console.log(api);
  
  return (
    <div className="mt-24   mx-auto max-w-[350px] md:max-w-[750px] lg:max-w-[90%] 
    text-grayText">
        {/* title  */}
        <div className="mb-10 flex items-center gap-x-6 md:gap-x-12">
          <div className="h-12 w-1.5 bg-gradient-to-t from-cyanDark to-cyanLight rounded-full "/>
          <h2 className="font-Raleway font-semibold text-3xl">
            Fictional
          </h2>
        </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-x-2 gap-y-4 mb-14">
     {api?.map(({_id,title,mainImage,slug,publishedAt,shortDescription},id)=>(
       <motion.div
       initial="hidden" whileInView="visible" 
       viewport={{once:true}} 
       transition={{delay: id ==0 ? 0.1: id/7,duration:0.2,type:"tween",ease:'easeIn'}}
       variants={{
         hidden:{y:"100%",opacity:0},
         visible:{y:0,opacity:1}
       }} 
         key={_id} className="group flex-1 flex flex-col items-start overflow-hidden
       cursor-pointer  rounded border border-t-0 md:border-2 md:border-t-0 border-cyanDark
       h-[450px]  " >
       <Link href={`/post/${slug.current}`}>
        <Img imageData={mainImage.asset} alt='img'
        height={300} width={420}priority={false} quality={75} key={_id}
        className={`object-cover w-full h-[230px] rounded-t-md md:group-hover:h-[260px] duration-[230ms] 
        `}/>
        <div className="flex flex-col items-start justify-between  max-w-[95%] mx-auto  ">
        <h3 className="text-[10px] md:text-[12px]  text-cyanDark  p-2">{moment(publishedAt).format('hh:mm a | ddd mm,yyyy')}  </h3>
        <h2 className="mx-auto max-w-[90%] text-[20px]  pb-3 text-start text-ellipsis">{title}</h2>
        <p className="inline-block px-3  text-[12px] md:text-sm lg:text-base text-ellipsis">{shortDescription}short description should be greater than 100 and less than 140 words eu qui minim id anim esse reprehenderit consequat dolore sint dolor qui </p>
        </div>
        </Link>
        </motion.div>
     ))} 
     </div>


     
    </div>
  )
}

export default Fictional