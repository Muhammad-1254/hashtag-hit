import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage as nextSanityImage } from 'next-sanity-image';
import { client } from '../../sanity/lib/client';
 export const RichTextComponents = {
    types:{
  image: ({ value }: any) => {
    
   
    const imageProps:any = nextSanityImage(client,value)
  
    
          return (
            <div className="relative w-[80vw]  md:w-[30vw]  m-10 mx-auto">
              
           
              <Image 
              className='object-cover object-center  rounded md:hover:scale-105 md:duration-200 
              border-l border-r border-b-2 border-cyanDark shadow-md shadow-cyanLight 
              
              '
         
                src={imageProps.src}
              
                quality={100} 
                loading='lazy'

                width={850}
                height={600}
              alt={value.alt || 'missing alt'}
              
           
            />
           
            </div>
          );
        },
      },
        list: {
          bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
          ),
          number: ({ children }: any) => (
            <ul className="mt-20 list-decimal">{children}</ul>
          ),
        },
        block: {
          h1: ({ children }: any) => (
            <h1 className="text-4xl py-10 font-bold">{children}</h1>
          ),
          h2: ({ children }: any) => (
            <h1 className="text-3xl py-10 font-bold">{children}</h1>
          ),
          h3: ({ children }: any) => (
            <h1 className="text-2xl py-10 font-bold">{children}</h1>
          ),
          h4: ({ children }: any) => (
            <h1 className="text-xl py-10 font-bold">{children}</h1>
          ),
          h5: ({ children }: any) => (
            <h1 className="text-lg py-10 font-blod">{children}</h1>
          ),
          h6: ({ children }: any) => (
            <h1 className="text-base py-10 font-bold">{children}</h1>
          ),
    
          blockquote: ({ children }: any) => (
            
            <blockquote className=" mt-16 pb-4 pl-5
            border-l-cyanLight md:border-l-[3px] border-l-2  ">
             <div> {children}</div>
            </blockquote>
            
          ),
        },
        marks: {
            link: ({ children, value }: any) => {
              const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;
              return (
                <Link
                  href={value.href}
                  rel={rel}
                  className="underline decoration-cyanDark hover:decoration-cyanLight"
                >
                  {children}
                </Link>
              );
            },
          },
        }


 










