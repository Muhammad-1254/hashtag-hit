// interface Block {
//     children: {
//       _key: string;
//       _type: string;
//       marks: string[];
//       text: string;
//     }[];
//     _type: string;
//     style: string;
//     _key: string;
//     markDefs?: any[];
//     listItem?: string;
//     level?: number;
//     alt?: string;
//     asset?: {
//       _type: string;
//       _ref: string;
//     };
//   }

import { TypedObject } from "sanity";

  
 export interface Post {
    publishedAt:string
    _id: string;
    body: TypedObject[];
    _updatedAt: string;
    title: string;
    mainImage:{
      asset:object
    },
      author:{
        name:string,
        image:{
          asset:object
        },
      },
      subCategory:string,
      shortDescription:string,
      slug:{
        current:string
      },
      _updatedAt:string,
      categories:{
        title:string
      }[]



  }



 

  