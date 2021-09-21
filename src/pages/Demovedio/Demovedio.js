import Vediocard from "./Demo1"
import videolc from "./Videoarry"


const Demovedio = () => {
   return (
      <>
         
               <Vediocard
                  key={videolc.id}
                  src={videolc.src}
                  pos={videolc.pos}
                  heading={videolc.heading}
               />
</>
            

           
         )
         }



         


      
   


export default Demovedio