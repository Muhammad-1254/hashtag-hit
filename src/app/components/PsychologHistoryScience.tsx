"use client"
import { FC } from "react"
import Link from "next/link"
import {IPsychologyAPI} from './interfaces/Psychology'
import Img from "./sub Components/ImageSanityRenderer"
import moment from "moment"
import {motion} from 'framer-motion'


 const Card:FC<IPsychologyAPI> = ({_id,mainImage,publishedAt,slug,title,shortDescription})=>{
 
// console.log("slug :",slug);

//  console.log(typeof shortDescription);
 
  return(
    <div className="max-w-[350px]   flex flex-col flex-shrink-0 text-grayText pb-3 mb-4
     rounded-md border-b-[3px] md:border-b-[5px]  border-cyanDark/90 
     border-r-1 border-l-1 md:border-r-2 md:border-l-2  
    md:hover:scale-105 md:hover:border-cyanLight md:duration-200 md:ease-in">
      <Link href={`/post/${slug.current}`} >
      
      <Img className={`object-cover w-full h-60 md:rounded-tr-none md:rounded-tl-none`}
      height={150} width={200} priority={false} quality={60} key={_id} 
      imageData={mainImage} alt='latestNews'/>

      <div className="flex flex-col items-start  max-w-[90%] mx-auto">
        <p className="text-cyanDark text-sm  mt-2 mx-auto md:text-base"
        >{moment(publishedAt).format(' h:mm a | MMM DD, YYYY')} 
        </p>
        <h3 className=" pt-4 text-md md:text-xl"
        >{title}
      
        </h3>
        {/* <p className="text-[12px] md:text-base ">{}</p> */}

      </div>
      </Link>
    </div>
  )
}

const Psychology = ({psychologyAPI}:any) => {
  const api:[IPsychologyAPI] = psychologyAPI

 
  
  return (
    <div
     className="max-w-[98%] md:max-w-[95%]  mx-auto mt-20 ">
    <div className="flex items-center  gap-x-4 text-grayText">
   
    <div className="w-1 md:w-2 h-10 md:h-16 rounded-full ml-4
    bg-gradient-to-b from-cyanDark to-cyanLight" />
    <h2 className="text-3xl md:text-4xl 
      font-semibold md:font-bold md:tracking-wider ">
      Psychology
      </h2>
    </div>


    <motion.div
     initial="hidden" whileInView="visible" 
     viewport={{once:true}} 
     transition={{duration:0.3,type:"tween",ease:'easeIn'}}
     variants={{
       visible:{x:0, opacity:1,scale:1},
       hidden:{x:"-50%",opacity:0,scale:0.8}
     }}
     className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    mx-auto gap-x-1 mt-10  md:px-4 md:pl-8 ">

      {api?.map(({_id,title,slug,mainImage,publishedAt,shortDescription,})=>(
        <Card _id={_id} key={_id} title={title} slug={slug} shortDescription={shortDescription} mainImage={mainImage} publishedAt={publishedAt}/>
      ))}
    </motion.div>

   
    </div>
    )
}

export default Psychology




export const History = ({historyAPI}:any) => {
  const  api:[IPsychologyAPI] =historyAPI
  
    
  return (
    <div
     className="max-w-[98%] md:max-w-[95%]  mx-auto mt-20 ">
    <div className="flex items-center  gap-x-4 text-grayText">
   
    <div className="w-1 md:w-2 h-10 md:h-16 rounded-full ml-4
    bg-gradient-to-b from-cyanDark to-cyanLight" />
    <h2 className="text-3xl md:text-4xl 
      font-semibold md:font-bold md:tracking-wider ">
      History
      </h2>
    </div>


    <div
     className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    mx-auto gap-x-1 mt-10  md:px-4 md:pl-8 ">

      {api?.map(({_id,title,slug,mainImage,publishedAt,shortDescription,})=>(
        <Card _id={_id} key={_id} title={title} slug={slug} shortDescription={shortDescription} mainImage={mainImage} publishedAt={publishedAt}/>
      ))}
    </div>

   
    </div>
    )
}



export const Science = ({scienceAPI}:any) => {
  const  api:[IPsychologyAPI] =scienceAPI

    
  return (
    <div
    className="max-w-[98%] md:max-w-[95%]  mx-auto mt-20 ">
   <div className="flex items-center  gap-x-4 text-grayText">
  
   <div className="w-1 md:w-2 h-10 md:h-16 rounded-full ml-4
   bg-gradient-to-b from-cyanDark to-cyanLight" />
   <h2 className="text-3xl md:text-4xl 
     font-semibold md:font-bold md:tracking-wider ">
     Science
     </h2>
   </div>


   <div
    className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
   mx-auto gap-x-1 mt-10  md:px-4 md:pl-8 ">

     {api?.map(({_id,title,slug,mainImage,publishedAt,shortDescription,})=>(
       <Card _id={_id} key={_id} title={title} slug={slug} shortDescription={shortDescription} mainImage={mainImage} publishedAt={publishedAt}/>
     ))}
   </div>

  
   </div>
   )
}

