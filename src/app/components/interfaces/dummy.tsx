import auto from '@/public/auto.jpg'
import sport from '@/public/sports.jpg'
import pkr from '@/public/pkr.jpg'
import { StaticImageData } from 'next/image'
import img from '@/public/latestNews.jpg'
import tectimg from '@/public/tech.jpg';
import internationIMG from '@/public/Emirates.jpg';
import local from '@/public/GCU.jpg';



// latest news
export const PsychologyAPI = [
    {
        id:1,
        title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
        link:'',
        imageURL:img,
        date:'7:08pm',
        time:'jul 3,2023'
    },
    {
      id:2,
      title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
      link:'',
      imageURL:img,
      date:'7:08pm',
      time:'jul 3,2023'
  },
  {
    id:3,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:4,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:5,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:6,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:7,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:8,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:9,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:10,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:11,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:12,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:13,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:14,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  {
    id:15,
    title:'Govt to Collect 3% Advanced Tax on Registration of Electric Vehicles',
    link:'',
    imageURL:img,
    date:'7:08pm',
    time:'jul 3,2023'
  },
  ]
  export interface IPsychologyAPI{
    id:number,
    title:string,
    link:string,
    date:string,
    time:string,
    imageURL:any
  }
  





interface API {
    id:number
    title:string
    imageURL:StaticImageData
    link:string
}
export interface ICardsAPIs {
    cardType:string
    api:API[]
}


export const AutoAPI = [
    {
      id:1,
      title:'CDA aims to complete all major road project before elections',
      imageURL:auto,
      link:''
    },
    {
      id:2,
      title:'CDA aims to complete all major road project before elections',
      imageURL:auto,
      link:''
    },
    {
      id:3,
      title:'CDA aims to complete all major road project before elections',
      imageURL:auto,
      link:''
    },
    {
      id:4,
      title:'CDA aims to complete all major road project before elections',
      imageURL:auto,
      link:''
    },
    {
      id:5,
      title:'CDA aims to complete all major road project before elections',
      imageURL:auto,
      link:''
    },
    
  ]


  export const businessAPI = [
    {
        id:1,
        title:'Rupee Skyrockets to 271 against us dollars within first hours of intrady trade',
        imageURL:pkr,
        link:''
    },
    {
        id:2,
        title:'Rupee Skyrockets to 271 against us dollars within first hours of intrady trade',
        imageURL:pkr,
        link:''
    },
    {
        id:3,
        title:'Rupee Skyrockets to 271 against us dollars within first hours of intrady trade',
        imageURL:pkr,
        link:''
    },
    {
        id:4,
        title:'Rupee Skyrockets to 271 against us dollars within first hours of intrady trade',
        imageURL:pkr,
        link:''
    },
    {
        id:5,
        title:'Rupee Skyrockets to 271 against us dollars within first hours of intrady trade',
        imageURL:pkr,
        link:''
    },
    
  ]


  export const sportsAPI = [
    {
        id:1,
        title:'Polish climber succymbs to altitude sickness after nanga parbat summit',
        imageURL:sport,
        link:''
    },
    {
        id:2,
        title:'Polish climber succymbs to altitude sickness after nanga parbat summit',
        imageURL:sport,
        link:''
    },
    {
        id:3,
        title:'Polish climber succymbs to altitude sickness after nanga parbat summit',
        imageURL:sport,
        link:''
    },
    {
        id:4,
        title:'Polish climber succymbs to altitude sickness after nanga parbat summit',
        imageURL:sport,
        link:''
    },
    {
        id:5,
        title:'Polish climber succymbs to altitude sickness after nanga parbat summit',
        imageURL:sport,
        link:''
    },
     
  ]





  export const technologyAPI = [
    {
      id: 1,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: true,
    },
    {
      id: 2,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
    {
      id: 3,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
    {
      id: 4,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
    {
      id: 5,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
    {
      id: 6,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
    {
      id: 6,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },  {
      id: 6,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },  {
      id: 6,
      title: 'Behind the lack of documentation  in Pakistan IT exports',
      imageURL: tectimg,
      link: '',
      featuredImage: false,
    },
  ];
  







export interface ILocalAndInternationalNews{
     
  
    cardType: string,
    blog: {
      id: number;
      title: string;
      imageURL: StaticImageData;
      link: string;
  }[]
  headlines:{
      id:number,
      title:string,
      time:string,
      date: string
    }[]
  
      
      

    
  
}




  export const LocalAndInternationalNewsAPI = [
    
    {
      cardType: 'Pakistan',
      blog:[
        {
          id:1,
          title:'GCU lahore launches free education program',
          imageURL:local,
          link:''
        },
        {
          id:2,
          title:'GCU lahore launches free education program',
          imageURL:local,
          link:''
        },
        {
          id:3,
          title:'GCU lahore launches free education program',
          imageURL:local,
          link:''
        },
        

      ],
      headlines:[
        {
          id:1,
          title:'karachi police uncover ead cjinkern supplying operation',
          time:"9:22 pm",
          date: "7 July,2023"
        },
        {
          id:2,
          title:'karachi police uncover ead cjinkern supplying operation',
          time:"9:22 pm",
          date: "7 July,2023"
        },
        {
          id:3,
          title:'karachi police uncover ead cjinkern supplying operation',
          time:"9:22 pm",
          date: "7 July,2023"
        },
       
      ]
    },
    {
      cardType: 'International',
      blog:[
        {
          id:1,
          title:'Emirates is Recruiting Hundreds of Pilots, IT Experts, and Cabin Crew From Around the World',
          imageURL:internationIMG,
          link:''
        },
        {
          id:2,
          title:'Emirates is Recruiting Hundreds of Pilots, IT Experts, and Cabin Crew From Around the World',
          imageURL:internationIMG,
          link:''
        },
        {
          id:3,
          title:'Emirates is Recruiting Hundreds of Pilots, IT Experts, and Cabin Crew From Around the World',
          imageURL:internationIMG,
          link:''
        },
        

      ],
      headlines:[
        {
          id:1,
          title:'Group of Friends become instant millionare after winng Rs.1.2 Billion in UAE',
          time:"9:22 pm",
          date: "7 July,2023"
        },
        {
          id:2,
          title:'Group of Friends become instant millionare after winng Rs.1.2 Billion in UAE',
          time:"9:22 pm",
          date: "7 July,2023"
        },
        {
          id:3,
          title:'Group of Friends become instant millionare after winng Rs.1.2 Billion in UAE',
          time:"9:22 pm",
          date: "7 July,2023"
        },
       
      ]
    }

  ]

