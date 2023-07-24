import { FC } from 'react';
import Link from 'next/link';
import Img from './ImageSanityRenderer';
import {IPsychologyAPI as IFT} from '../interfaces/Psychology'
import moment from 'moment'
import {motion} from 'framer-motion'

interface ICard {
  cardType:string,
  api:[IFT]
}
const LICards: FC<ICard> = ({
  cardType,
  api
}) => {

 
  return (
    <div className='flex flex-col items-center gap-y-12 pb-5 md:pb-10'>
      
      {/* title  */}
      <div className=' flex items-center gap-x-6 md:gap-x-10  pt-10 w-full md:pl-10'>
        <div className='h-12 w-1.5 rounded-full 
        bg-gradient-to-t from-cyanDark to-cyanLight ' />
        <h3 className='text-2xl font-Raleway font-semibold'>{cardType}</h3>
      </div>



      <div className='w-[75%] '>

        <div className=''>
          {api?.map(({_id,title,mainImage,slug,shortDescription,publishedAt},id)=>{
            
           
            return(
              <motion.div
              initial="hidden" whileInView="visible" 
              viewport={{once:true}} 
              transition={{delay: id ==0 ? 0.1: id/6,duration:0.2,type:"tween",ease:'easeIn'}}
              variants={{
                hidden:{x: id % 2 == 0 ? "-100%":"100%", opacity:0},
                visible:{x:0,opacity:1}
              }} 
              key={_id}>
              <Link  href={`/post/${slug.current}`}>
            <div 
             className='flex flex-1 items-start divide-x-2 divide-gray-300 
              pb-4 mb-4 
             md:hover:scale-105 md:duration-200
             border-b-2 border-r-2  border-cyanLight 
              rounded-br-[75px]
              rounded cursor-pointer overflow-hidden
             '>
              <div className='flex flex-col items-start gap-y-2  w-[55%]'>
            <Img imageData={mainImage.asset} alt=''
            height={120} width={200}priority={false}quality={80}key={_id}
            className='w-72 h-44 object-cover rounded-tl-md '/>  
            <h2 className='text-[14px] line-clamp-2 md:text-base  text-ellipsis h-16   pl-3 pb-2'>{title}</h2>
            </div>

              
            <div className='flex flex-col items-start pl-2 pt-2 overflow-auto  max-w-[150px] h-52'>
                <h4 className='text-cyanDark text-sm'>{moment(publishedAt).format('h:mm a | ddd mm, YYYY')}</h4>
                <h3 className='text-[12px]  pr-1 max-w-[95%] max-h-[100%]  '>{shortDescription}  </h3>
              </div>

              
            </div>
            </Link>
            </motion.div>
            )
 })}
  
        </div>

      </div>

  
           

          
      

    </div>
  );
};

export default LICards;
