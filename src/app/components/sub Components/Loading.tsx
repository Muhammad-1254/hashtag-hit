import { AiOutlineCloudDownload, AiOutlineLoading, AiOutlineLoading3Quarters, AiOutlineUpload } from "react-icons/ai"

 const PageLoading = ({styles,iconSize}:any) => {


   return (
        <div className="bg-gradient-to-r from-customBlack via-dark to-customBlack bg-opacity-5
        w-screen h-screen absolute top-0 right-0 left-0 bottom-0
        flex items-center justify-center">
           
        <div className='text-cyanLight
        relative animate-[spin_1.8s_linear_infinite]'>

        <AiOutlineLoading3Quarters size={iconSize}/>

        <div className='text-cyanLight/75
        absolute w-full h-full top-0 right-0 left-0
        flex items-center justify-center animate-[spin_1.5s_linear_infinite]'>
        <AiOutlineLoading3Quarters size={iconSize/1.3}/>


            <div className='text-cyanLight/60
            animate-[spin_1s_linear_infinite]
            absolute flex items-center justify-center'>
                <AiOutlineLoading3Quarters size={iconSize/1.85}/>
                
            </div>
        </div>
        </div>
        <div className='text-cyanLight/50
        absolute animate-none'>
                    <AiOutlineCloudDownload  size={iconSize/5}/>
                </div>
    </div>
     
  
  )
}


export default PageLoading


