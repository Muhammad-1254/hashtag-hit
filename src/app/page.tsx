
import {
  LifestyleBeautyIInspiration,
  Fictional,
  FeaturedPost,
  History,
  Psychology,
  ParentingGuide,
  FoodBlogAndTravel,
  Science,
  
 
} from '@/app/components';

import {  getCategoriesPost } from '@/app/services';

export const revalidate = 7200
export default async function Home() {

  const data:any = await getCategoriesPost()


  const {
    travelAPI,
    featuredPostAPI,
    psychologyAPI,
    historyAPI,
    parentingGuideAPI,
    lifestyleAPI,
    beautyAndTipsAPI,
    fictionalAPI,
    scienceAPI,
    foodBlogAPI,
    InspirationalAPI,
  } = data;
// console.log("data: ",data);

   
  return (
    
    <main>
   
      
      {/* <Suspense fallback={<PageLoading styles={""} iconSize={150}/>}> */}
        
      <div className="max-w-[370px]  md:max-w-[750px] lg:max-w-[1800px] mx-auto">
        <FeaturedPost featuredPostAPI={featuredPostAPI}/>
         <Psychology psychologyAPI={psychologyAPI} />
        <History historyAPI={historyAPI} />
        <Science scienceAPI={scienceAPI} /> 

      </div>
       <ParentingGuide parentingGuideAPI={parentingGuideAPI} />
      <div className="md:max-w-5xl lg:max-w-[1920px] mx-auto">
         <LifestyleBeautyIInspiration
         props={{ lifestyleAPI, InspirationalAPI, beautyAndTipsAPI }}/>  
        <Fictional fictionalAPI={fictionalAPI} />
      </div>
      <FoodBlogAndTravel props={{ travelAPI, foodBlogAPI }} />
    
          {/* </Suspense> */}
          
      </main>
  );
}
