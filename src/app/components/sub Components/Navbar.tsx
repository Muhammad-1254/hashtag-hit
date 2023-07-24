"use client"
import Link from 'next/link';
import React,{ useEffect, useState} from 'react';
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from 'react-icons/ai'

import { client } from '@/app/sanity/lib/client';


import {motion, useScroll, useSpring} from 'framer-motion'
import logo from '../../../../public/hashtag-hit-website-favicon-white.png'
import Image from 'next/image';



  interface ICategories{
    _id:string
    slug:{
    current:string
  }
  title:string
      
    }





const Navbar =  () => {

const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress)
  const [nav,setNav] = useState(false);
  
  const [categories,setCategories]  = useState<[]|ICategories[]>([]);
  useEffect( ()=>{
    
    const getCategories = async () =>{
      const navLinks = await client.fetch(`*[_type == 'category']{
        _id,
        slug{
          current
        },
        title,   
      }
      `)
      setCategories(navLinks)
      
      
    }
    
    
    getCategories()
    console.log("call to server from navbar");
},[])


  

  return (
    <>
    <motion.div 
    className='h-20 w-[100%]  sticky  z-50 top-0 lg:max-w-[1620px] xl:max-w-[1920px] mx-auto'>
      <motion.header 

       className='hidden z-20  lg:flex items-center justify-between  w-full px-5 h-20 bg-transparent 
       bg-gradient-to-r from-customBlack via-dark to-customBlack
       text-grayText  rounded-b-sm  '>
        
        <motion.h1 initial={{x:'-100vw',scale:0.5}}  animate={{x:0,scale:1}} transition={{delay:0.25,duration:1.5,type:'spring',stiffness:35}} 
          className='cursor-pointer text-cyanLight/90 hover:text-cyanLight hover:scale-105 duration-300 ease-linear text-3xl md:text-4xl font-Raleway font-semibold tracking-wide'>
        <Link href={'/'}>
          <div className='flex items-center justify-normal gap-x-4'>
          <Image width={75} height={75} 
          src={logo} alt="logo" />
          <span>HashtagHit</span>
          </div>
          </Link>
        </motion.h1>
        <nav>
          <motion.ul initial={{y:'-100vh'}} animate={{y:0}} transition={{delay:0.25,duration:1.5,type:'spring',stiffness:18}} 
           className='flex items-center justify-between gap-x-4'>
            
            {categories?.map(({_id,title,slug},id)=>{
            
            
            return(

              <li className={`hover:text-cyanLight hover:scale-105 duration-200 ease-in
              cursor-pointer text-lg capitalize  font-medium `}
               key={_id}>
                  <Link 
                  href={`${'/category/'+slug.current+'/'+_id}`}>
                    {title}
                  </Link>
              </li>

            )}
            )}
          </motion.ul>
        </nav>
      </motion.header>
      <header className={`
      lg:hidden flex items-center justify-between w-full h-20  px-4 duration-500 text-grayText bg-gradient-to-r from-customBlack via-dark to-customBlack`}>
        <h1  className='cursor-pointer text-2xl font-Raleway font-semibold text-cyanLight'>
          <Link href={'/'}>HashtagHit</Link>
        </h1>
              <nav >
                <div className='text-3xl  text-cyanLight' 
                onClick={() =>setNav(!nav)}>
                  {nav ? <AiOutlineMenuFold />: <AiOutlineMenuUnfold/>}
                </div>
                <ul className={`absolute z-50 flex flex-col items-start justify-normal  left-0 top-16
                 bg-gradient-to-r from-dark/40 via-dark/25 to-dark/10 w-full h-screen pt-6 overflow-auto duration-[250ms] gap-y-6 
                  ${nav ? "max-w-[100vw]": "max-w-0 "}`}>

                  {nav && categories?.map(({_id,title,slug})=>(
                    <li onClick={() => setNav(!nav)}
                     key={_id} className={`text-xl  mt-1 mx-auto  font-medium bg-gradient-to-l from-black text-cyanDark  to-customBlack   px-5 py-[2px] backdrop-blur-xl rounded-full `}>
                      <Link href={`${'/category/'+slug.current+'/'+_id}`}>
                        {title}
                      </Link>
                    </li>
                  ))}

                </ul>
              </nav>
      </header>
      
    <motion.div  className=' absolute z-50 top-0 left-0 right-0 w-full rounded-full   h-1 md:h-1.5
     bg-gradient-to-l from-cyanLight via-cyanDark/80 to-cyanLight '
    style={{scaleX}}/>
    </motion.div>


</>

  )
}

export default Navbar


