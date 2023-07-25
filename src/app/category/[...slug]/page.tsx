import { client } from '@/app/sanity/lib/client';
import React from 'react';
import { Category } from '@/app/components';
import { getCategoryPage } from '@/app/services';


export const revalidate = 7200
export async function generateStaticParams(){
  const ids = await client.fetch(`*[_type == 'category']{_id}`)
  const idRoutes = ids.map((id:any)=> id._id)

  // console.log("slugRoutes: ",idRoutes);
  
  return  idRoutes.map((id:any)=>({
    id:id
  }))
}




const Categories = async ( {params:{slug}} :any) => {
  // console.log("id__",slug[1]);
  const id = slug[1]
  
  const  res = await getCategoryPage(id);
  const {data,latestPost} = res
  // console.log("res: ",res);
  
  
  return (
    <div className="max-w-[360px] md:max-w-[750px] lg:max-w-[1600px] mx-auto">
      <Category categories={data} latestPost={latestPost}/>
    </div>
  );
};

export default Categories;


