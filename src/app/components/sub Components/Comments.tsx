import React from 'react'

const Comments = () => {
  return (
    <div className=' mb-20 
    max-w-[350px] lg:max-w-[750px] mx-auto '>
    <div className='flex flex-col items-start 
    '>
        
        {/* title */}
        <div className='pb-4 md:pb-6 text-grayText font-semibold text-xl  md:text-2xl'>
            <h3>Leave a Reply</h3>
        </div>
        
        {/* comment section  */}
        <div className=' w-full'>

            <textarea className='w-full  lg:w-full  h-60 md:h-40 lg:h-32 
            px-4 py-4 border md:border-2 border-gray-500/75 rounded-md mb-4
        ' placeholder='...' required={true}></textarea>
        </div>

        {/* name  */}
        <div className='w-full mb-2'>
            <input className='
            w-full border md:border-2 px-4 py-1 rounded border-cyanDark/75 '
             type='text' placeholder='Name' required={true} />
        </div>

        {/* email  */}
        <div className='w-full mb-10'>
        <input  className='w-full border md:border-2 px-4 py-1 rounded border-cyanDark/75'
        type='text' placeholder='Email' required={true}/>
        </div>
        <div className='max-w-full mx-auto border-2 border-cyanDark rounded  shadow-lg text-gray-500/75
        text-grayText md:hover:text-white md:hover:bg-cyanLight/80 duration-200'>
            <button className='px-6 md:px-12 py-0.5 md:py-1 font-semibold' 
            type='button'>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Comments