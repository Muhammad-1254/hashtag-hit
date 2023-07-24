import React, { FC } from 'react'
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../sanity/lib/client';

interface ISanityImage {
  imageData:object 
  priority:boolean,
  alt:string,
  quality:number,
  width: number | undefined,
  height:number | undefined,
  className:string,
  
  
}
1
const Img:FC<ISanityImage> = ({className,imageData,alt,priority,quality,height,width}) => {
  const imageProps = useNextSanityImage(client, imageData);


  

	return (
		<Image className={className}
			src={imageProps.src}
    
 
		alt={alt}
     priority={priority}
     quality={quality}
     width={width}
     height={height}

     

/>
	);
}
export default Img