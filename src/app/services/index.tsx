import { client } from '@/app/sanity/lib/client';

const Travel_ID = 'e36f56d4-495d-424e-863f-c746b5d290f2';
const Education_ID = 'c47b6aec-e19d-4af9-a6fc-a1f37c872b05';
const Psychology_ID = 'bdec4054-5940-4c9e-a22f-bc7b5d701ecf';

const ParentingGuide_ID = '5eb20065-4d90-4572-8945-b88fb6495e8b';
const fictional_ID = '49e0198c-ea9b-4203-9570-1108129e8302';
const Lifestyle_ID = '48f73d9d-ba89-4198-a43e-d01f2e655059';
const history_ID = '3725004b-fbd0-4735-8329-ad567478d441';
const beautyAndTips_ID = '1de05ef9-2d06-4073-ac99-eb5e86c1cd0e';
const inspirational_ID = 'c47b6aec-e19d-4af9-a6fc-a1f37c872b05';
const foodBlog_ID = '6c49d766-6ff1-48d5-8366-8ed5d0228555';
const science_ID = 'e5693dc0-8ccb-4890-b982-4f6ec5d08f8d';




interface ICategoriesPost {
  subCategory: string
  shortDescription:string
  categories: {
  title:string
  slug: {
  current: string
  }
  _id: string
}[]
publishedAt: string
_createdAt:string
featuredPost:boolean

  title: string
  _id: string
  slug: {
  current: string
  }
  mainImage: {
  asset:Object
  } 
  }

 



  export const getCategoriesPost = async ()=>{

 

    
    const data:ICategoriesPost[] = await client.fetch(`*[_type == 'post' ] | order(_createdAt desc){
      categories[]->{
      title,
        slug{
      current
          
      },
        _id,  
      },
        
        title,
        _id,
        slug{
          current
        },
        mainImage{
        asset->{
          ...,metadata
        }
        },
      publishedAt,
      _createdAt,
      featuredPost,
      subCategory,
      shortDescription
    }`)


    
    
  

    
    
    const travelAPI = data.filter((item)=> item.categories[0]._id == Travel_ID)
    const beautyAndTipsAPI = data.filter((item)=> item.categories[0]._id == beautyAndTips_ID)
    const fictionalAPI = data.filter((item)=> item.categories[0]._id == fictional_ID)
    const scienceAPI = data.filter((item)=> item.categories[0]._id == science_ID)
    const foodBlogAPI = data.filter((item)=> item.categories[0]._id == foodBlog_ID)
    const InspirationalAPI = data.filter((item)=> item.categories[0]._id == inspirational_ID)
  const psychologyAPI = data.filter((item)=> item.categories[0]._id == Psychology_ID)
  const historyAPI = data.filter((item)=> item.categories[0]._id == history_ID)
  const lifestyleAPI = data.filter((item) => item.categories[0]._id == Lifestyle_ID)
  const parentingGuideAPI = data.filter((item)=> item.categories[0]._id == ParentingGuide_ID)
  
  // featued post 
  const featuredPostAPI= data.filter((item)=> item.featuredPost == true)
  // console.log("featuredPostAPI:",featuredPostAPI);
  
    return {
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
    }
  
  }
  



// get Category page 


export const getCategoryPage = async (ID:string) => {
  //   const { slug } = context.query;
  // const ID = slug![1]
  // console.log("type: ", typeof ID.replace(/['"]+/g, ''));
  // console.log("type: ", ID);
  
  
  
  
    const data =
      await client.fetch(`*[_type == "post" && references('${ID}')] | order(_createdAt desc) {
    
        author->{
          name,
        },
          slug{
          current
          },
        categories[]->{
          title
        },
        _id,
        title,     
      publishedAt,
      subCategory, 
      shortDescription,
      mainImage{
      asset }
      
    }`);
  const latestPost = await client.fetch(`*[_type == 'post'  ] | order(_createdAt desc)[0...14]{
    title,
    _id,
    slug{
      current
    },
    mainImage{
    asset->{
      ...,metadata
    }
    },
  publishedAt,
  subCategory,
  shortDescription
  }
  `)
  
    // console.log("data in categories:",data);
    return {
  
        data,latestPost
   
    };
  };
  


///get ppost data

export const getPostData =async (slug:any)=>{
  

try{
const post =
  await client.fetch(`*[(_type == 'post' && slug.current == '${slug}')] {
categories[]->,
        title,
      
        _id,
        slug,
        mainImage{
          asset->{
            ...,metadata
            
          }
        },
      
        body,
        publishedAt,
        author->{
          name,
          image{
            asset
          }
        },
          _updatedAt,
          subCategory,
          shortDescription,
          
    }
     `)
     const latestPost = await client.fetch(`*[_type == 'post'  ] | order(_createdAt desc)[0...14]{
        title,
        _id,
        slug{
          current
        },
        mainImage{
        asset->{
          ...,metadata
        }
        },
      publishedAt,
      subCategory,
      shortDescription
    }
  `)
  const getId:string = await post[0].categories[0]._id
    
  const relatedPost = await client.fetch(`*[_type == 'post' && references('${getId}')] | order(_createdAt desc)[0..3]{
    title,
            _id,
            slug{
              current
            },
            mainImage{
            asset->{
              ...,metadata
            },
              categories
              
            },
          publishedAt,
          subCategory,
          shortDescription
        }
  `)



return  { post,latestPost,relatedPost}



      }
catch(err){
console.log(err);

}
}
