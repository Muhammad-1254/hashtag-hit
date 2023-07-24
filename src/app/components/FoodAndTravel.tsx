"use client"
import React from 'react'
import LICards from './sub Components/HFCards'
const FictionalAndTravel = ({props}:any) => {
  const {foodBlogAPI,travelAPI}  = props

 
    
  return (
    <div className='w-full bg-gradient-to-b from-dark via-black to-dark
     mt-20  text-white  mb-20 flex  ' >
        
       <div className='max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center text-grayText'>
            <LICards key={"travel"} cardType='Travel' api={travelAPI}/>
            <LICards key={'foodBlog'} cardType='Food Blog' api={foodBlogAPI}/>
            </div>
            </div>
    </div>
  )
}

export default FictionalAndTravel