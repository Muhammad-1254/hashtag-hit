"use client"

import Cards from "./sub Components/LBTCards"






const LifestyleBeautyIInspiration = ({props}:any) => {
  // console.log("enterta props: ",props);
  
  const { lifestyleAPI, InspirationalAPI, beautyAndTipsAPI } = props
  // console.log("props: ",props);
  
 
  return (
    <div className="grid items-baseline grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 ">
   <Cards  key={'cdcdscds'} apis={lifestyleAPI} cardType="Lifestyle"/>
   <Cards key={"cadcsdc"} apis={beautyAndTipsAPI} cardType="Beauty & Tips"/>
   <Cards key={'csdcdvfd'} apis={InspirationalAPI} cardType="Inspirational"/>
    


    </div>
  
  )
}

export default LifestyleBeautyIInspiration