import Img from './ImageSanityRenderer';
import {IPsychologyAPI as ICard} from '../interfaces/Psychology'
import Link from 'next/link';
import moment from 'moment';
import {motion} from 'framer-motion'



const Cards = ({apis,cardType}:any) => {
  const api:[ICard] = apis
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const containerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



  return (
      <motion.div
     
        className="max-w-[350px] md:max-w-sm  mx-auto items-start
    flex flex-col mb-10  text-grayText"
      >
        {/* title */}
        <div className="flex items-center gap-x-8 pb-8 ">
          <div className="h-10 w-1.5 bg-gradient-to-t from-cyanDark to-cyanLight rounded-full" />
          <div className="text-3xl font-Raleway font-semibold tracking-wider">
            {cardType}
          </div>
        </div>

        <motion.div
       

        initial="hidden" whileInView="visible" 
        viewport={{once:true}} 
        transition={{duration:0.3,type:"tween",ease:'easeIn'}}
        variants={{
          hidden:{x:"-100%",opacity:0.8},
          visible:{x:0,opacity:1}
        }} 
         className="mb-10 mt-4 w-full max-w-[350px]
        md:hover:scale-105 md:duration-200 md:ease-in
        bg-gradient-to-r from-customBlack via-dark to-customBlack
         border-l border-r border-b-4 rounded shadow shadow-cyanDark border-cyanDark">
          <div key={api[0]?._id} className=' '>
            <Link href={`{/post/${api[0]?.slug.current}`}>
            <Img imageData={api[0]?.mainImage.asset} alt="img" 
            className='w-full object-cover rounded mb-2 h-[400px] md:h-[500px]'
            height={400} width={400}priority={false} quality={75} key={api[0]?._id}
            />
            <div className='flex  flex-col items-start justify-between '>
            <p className='p-2 text-cyanDark text-[12px] md:text-[15px] '>{moment(api[0]?.publishedAt).format('hh:mm a | ddd mm,yyyy')}</p>
            <h3 className=' w-[95%] text-center max-w-[98%] px-2 pb-4 mt-1 text-base md:text-lg '>{api[0]?.title}</h3>
            <h4 className='text-xs md:text-sm mb-2 px-4 '>{api[0]?.shortDescription}</h4>
          </div>
          </Link>
          </div>
        </motion.div>

        <motion.div
     
         className="flex flex-col w-[330px] ">
          {api.filter((item,id) => id !== 0).map(
            ({ _id, title, mainImage, slug ,publishedAt,shortDescription},id) => (
              <motion.div   
               initial="hidden" whileInView="visible" 
              viewport={{once:true}} 
              transition={{ delay:id ==0 ? 0.2: id/4,duration:0.1,type:"tween",ease:'easeIn'}}
              variants={{
                hidden:{y:"100%",opacity:0},
                visible:{y:0,opacity:1}
              }} 
              
               key={_id} >
                  <Link href={`/post/${slug.current}`}
                  className='overflow-hidden'>
                    <div
                  
                  className="flex   w-full gap-x-1 h-[250px]
                  rounded-md duration-200 ease-in
                  border-l border-r border-b-2 shadow border-cyanDark 
                  shadow-cyanLight
                  bg-gradient-to-r from-customBlack via-dark to-customBlack
                  cursor-pointer
                  text-grayText
                  md:hover:scale-105
                  mb-4 overflow-hidden
                  group
                  "
                  >
                  <Img
                    imageData={mainImage.asset}
                    alt="img"
                    height={150} width={220} priority={false} quality={60}
                    className=" md:group-hover:h-[250px] md:group-hover:rounded-none duration-300 rounded-md
                    w-[170px] -ml-1 h-40 object-cover  my-auto"
                  />
                  <div className='h-[250px] w-[1px]  bg-black '/>
                  <div className=' ml-1 flex flex-col items-start justify-start mx-auto '>
                  <p className='mt-3 ml-1  text-[10px] text-cyanDark md:text-xs tracking-wider'>{moment(publishedAt).format('ddd mm,yyyy')}</p>
                  <h3 className=" mb-3 md:text-lg  w-[98%] text-start">{title}</h3>
                  <h4 className='text-xs  pr-4 '>{shortDescription}</h4>
                  </div>
                </div>
                </Link>
                {/* <div className="w-[98%] h-[2px] bg-gray-800 mb-1 mt-[1px]" /> */}
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
  );
};

export default Cards;
