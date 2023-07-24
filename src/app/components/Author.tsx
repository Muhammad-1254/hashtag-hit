// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import {
//   AiOutlineFacebook,
//   AiOutlineInstagram,
//   AiOutlineMail,
//   AiOutlineTwitter,
//   AiOutlineWhatsApp,
// } from 'react-icons/ai';
// const AuthorAPI = [
//   {
//     id: 1,
//     name: 'usman',
//     bio: "I'm a web developer voluptate culpa dolor ipsum laborum irure aliquip aute officia adipiscing cillum adipiscing ullamco consectetur qui magna sit occaecat commodo. voluptate cupidatat aute quis culpa cupidatat Duis cupidatat voluptate nulla voluptate non fugiat sint proident in magna mollit deserunt. qui in proident anim Excepteur deserunt irure velit ad consequat sunt quis do ad id ullamco nulla nulla id. anim pariatur pariatur lorem tempor minim adipiscing anim magna cillum culpa incididunt nulla fugiat deserunt tempor consectetur ad. labore laborum exercitation do laborum laboris eiusmod reprehenderit minim cupidatat ex laborum ullamco consequat pariatur ullamco exercitation. do cillum enim est commodo eu exercitation officia pariatur magna consequat labore proident eiusmod incididunt nostrud velit. consequat reprehenderit amet occaecat anim sint voluptate lorem ad reprehenderit laborum minim adipiscing labore laborum qui reprehenderit et.",
//     imageURL: authorImg,
//     socialIcons: [
//       {
//         id: 1,
//         link: '',
//         icon: <AiOutlineFacebook />,
//       },
//       {
//         id: 2,
//         link: '',
//         icon: <AiOutlineTwitter />,
//       },
//       {
//         id: 3,
//         link: '',
//         icon: <AiOutlineInstagram />,
//       },

//       {
//         id: 4,
//         link: '',
//         icon: <AiOutlineWhatsApp />,
//       },
//       {
//         id: 5,
//         link: '',
//         icon: <AiOutlineMail />,
//       },
//     ],
//   },
// ];


// const Author = () => {
//   return (
//     <div className='max-w-[360px] md:max-w-[750px] mx-auto mt-20'>

// <div className='flex md:flex-row flex-col-reverse items-center md:items-start text-grayText'>
//       {/* left side  */}
//       <div className="max-w-[360px]  mx-auto mt-20 md:mt-0 ">
//         {/* name  */}
//         <h2 className='w-min mx-auto mb-10 md:mb-14 text-4xl md:text-7xl font-semibold  decoration-cyanLight/95 
        
//         '>{AuthorAPI[0].name}
//         </h2>

//         {/* bio  */}
//         <p className=' max-w-[90%] mx-auto text-sm md:text-base text-start text-ellipsis  font-medium'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AuthorAPI[0].bio}</p>
//         <div className=' text-3xl md:text-4xl max-w-[98%] mx-auto mt-32 mb-10
//          text-cyanDark hover:text-cyanLight duration-200 ease-out hover:scale105'>
           
//            <div className='pl-4 md:pl-0 flex  items-center justify-normal gap-x-4 '> 
//             <Link key={AuthorAPI[0].socialIcons[0].id} href={AuthorAPI[0].socialIcons[0].link}>{AuthorAPI[0].socialIcons[0].icon}</Link>
//             <Link key={AuthorAPI[0].socialIcons[1].id} href={AuthorAPI[0].socialIcons[1].link}>{AuthorAPI[0].socialIcons[1].icon}</Link>
//             <Link key={AuthorAPI[0].socialIcons[2].id} href={AuthorAPI[0].socialIcons[2].link}>{AuthorAPI[0].socialIcons[2].icon}</Link>
//             <Link key={AuthorAPI[0].socialIcons[3].id} href={AuthorAPI[0].socialIcons[3].link}>{AuthorAPI[0].socialIcons[3].icon}</Link>
//             <Link key={AuthorAPI[0].socialIcons[4].id} href={AuthorAPI[0].socialIcons[4].link}>{AuthorAPI[0].socialIcons[4].icon}</Link>
//             </div>
//         </div>

//       </div>

//       {/* right side  */}
//       <div className='max-w-[360px] mx-auto md:mt-28 '>
//             <Image className='w-[99%] h-[480px] object-cover rounded-md border-[3px] border-cyanLight/95 border-t-0 shadow-md shadow-cyanDark/80' 
//             src={AuthorAPI[0].imageURL} alt='author image'/>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Author;


import React from 'react'

const Author = () => {
  return (
    <div>Author</div>
  )
}

export default Author