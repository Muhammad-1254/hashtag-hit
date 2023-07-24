
import React from 'react';
import { Post as IPost } from '@/app/components/interfaces/Post';

import { Post, LatestArticle, RelatedPost, Comments } from '@/app/components';
import { getPostData } from '@/app/services';
import { client } from '@/app/sanity/lib/client';



export const revalidate = 3600
export async function generateStaticParams(){
  const slugs = await client.fetch(`*[_type == 'post']{slug}`)
  const slugRoutes = slugs.map((slug:any)=> slug.slug.current)

  // console.log("slugRoutes: ",slugRoutes);
  
  return  slugRoutes.map((slug:any)=>({
    slug:slug
  }))
}
const BlogDetails =async ({ params:{slug} }:any) => {
  

  const { post,latestPost,relatedPost} :any=  await getPostData(slug)
  const data:IPost = post[0]    
  




  return (
    <div  className="relative max-w-[360px] md:max-w-[750px] lg:max-w-[1600px] mx-auto text-grayText">

      <div className="flex items-start  flex-wrap  w-[99%] ">
        <Post
          key={data._id}
          _id={data._id}
          body={data.body}
          _updatedAt={data._updatedAt}
          mainImage={data.mainImage}
          title={data.title}
          publishedAt={data.publishedAt}
          author={data.author}
          categories={data.categories}
          shortDescription={data.shortDescription}
          slug={data.slug}
          subCategory={data.subCategory} 
          
         />
        <div className="grid grid-cols-1 md:grid-cols-2  items-baseline md:gap-x-10 lg:gap-x-0 lg:grid-cols-1 mt-44 mb-20 lg:mr-16 mx-auto">
          <div>
          <LatestArticle latestPost={latestPost}/>

          </div>
          <RelatedPost relatedPost={relatedPost}/>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default BlogDetails;






