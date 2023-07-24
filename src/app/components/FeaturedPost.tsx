"use client"
import Link from 'next/link';
import { IFeaturedPost } from './interfaces/FeatuedPost';

import Img from './sub Components/ImageSanityRenderer';
import moment from 'moment';
import {motion} from 'framer-motion'



const FeaturedPost = ({ featuredPostAPI }: any) => {

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
  }
    
  const containerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }


  const api: IFeaturedPost[] = featuredPostAPI;

  return (

    <motion.div 
    className=" grid grid-cols-1 flex-row  lg:flex  items-center justify-center max-w-[95%]  mt-20 mx-auto text-grayText gap-4 ">
      
      <>
        <Link
          href={`/post/` + api[0].slug.current}
          className="cursor-pointer w-full ease-in group "
        >
          <div key={api[0]._id} className=" max-w-full lg w-full relative ">
            <Img
              imageData={api[0].mainImage.asset}
              alt="image"
              width={600}
              height={450}
              priority={true}
              quality={90}
              key={api[0]._id}
              className="w-full md:h-[550px] h-[450px] object-cover object-center bg-no-repeat rounded-md lg:rounded-xl"
            />
            <div className="absolute md:group-hover:h-[250px] md:duration-700  text-white z-20 bottom-4 left-2 lg:bottom-12 lg:left-8 max-w-[90%] lg:max-w-[80%] text-xl lg:text-3xl">
              <h2 >{api[0].title}</h2>
              <p className=" lg:text-lg ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {api[0].shortDescription}
              </p>
              <p className="pt-4 text-sm md:text-base lg:md:text-base font-semibold text-cyanDark">
                {moment(api[0].publishedAt).format('h:mm: a | mm dd, YYYY')}
              </p>
            </div>
            <div
              className="md:group-hover:h-[70%] md:duration-[150ms] ease-in absolute bottom-0  w-full h-[50%] z-10 rounded-md lg:rounded-xl
        bg-gradient-to-b from-transparent via-customBlack/75 to-customBlack/75"
            />
          </div>
        </Link>

        <motion.div 
        variants={container}
    initial="hidden"
    animate="visible"
        className="grid grid-cols-2 overflow-hidden items-center  gap-x-2 lg:gap-x-4 w-full ">
          {api
            .filter((item, id) => id !== 0 && id < 5)
            .map((item,id) => (
              <>
                <motion.div
            variants={containerItem}
                  key={item._id}
                  className=" group relative md:hover:scale-105 h-[90%] md:duration-200 w-full ease-in overflow-hidden "
                >
                  <Link
                    href={`/post/${item.slug.current}`}
                    className="cursor-pointer  "
                  >
                    <Img
                      imageData={item.mainImage.asset}
                      alt="image"
                      className={` h-[250px] md:h-[350px] w-[400px] object-center object-cover `}
                      height={250}
                      width={400}
                      priority={true}
                      quality={75}
                      key={item._id}
                    />
                    <div
                      className="md:group-hover:h-[200px]   w-[calc(100% + 20px)] h-[150px] absolute  bottom-0 right-0 -left-1
                     bg-gradient-to-b from-transparent via-customBlack/50 to-customBlack/80"
                    />

                    <div className="text-white/80 absolute  bottom-0   left-1 md:left-3 h-[150px] md:h-[200px] text-ellipsis    mx-auto">
                      <h2 className="text-center  font-semibold mb-2 text-sm md:text-[12px] max-h-[70px]   lg:text-lg">
                        {item.title}
                      </h2>
                      <p className=" text-white/70 absolute bottom-10  text-[12px] md:text-base max-h-[110px] lg:text-lg ">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.shortDescription.length > 100
                          ? item.shortDescription.slice(0, 80) + '...'
                          : item.shortDescription}{' '}
                      </p>
                      <p className="text-cyanDark font-semibold absolute bottom-2   text-[9px] max-h-[20px]   lg:text-base ">
                        {moment(item.publishedAt).format(
                          'h:mm a | ddd mm,yyyy'
                        )}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </>
            ))}
        </motion.div>
      </>
    </motion.div>
    
  );
};

export default FeaturedPost;
