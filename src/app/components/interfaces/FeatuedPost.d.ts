

export interface IFeaturedPost {
    categories:{
        slug:{
            current:string
        },
        _id,
        title,
    }[],
    title:string,
    _id:string,
    slug:{
    current:string
    },
    mainImage:{
    asset:object
    },
  publishedAt:string,
    
    subCategory:string,
    shortDescription



  
}




export type TFeaturedPost={
    data:IFeaturedPost
  }