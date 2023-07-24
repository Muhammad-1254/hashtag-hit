export  interface ICategories{
    author: {
    name: string
    }
    _id :string
    slug: {
      current:string
    }
    categories:{
      title:string
    }[]
  
    subCategory: string
    mainImage: {
    asset: object,
    }
    title:string

    publishedAt:string

    shortDescription:string
    

  }


  export interface ICat {
  
    _id: string

    title: string
    author: {
      name: string
    }
    mainImage: {
      asset:object
    },
    slug: {
      current:string
    },
    publishedAt: string,
  }