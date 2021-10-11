import React  ,{useState, useEffect} from 'react'
import Homedata from "../Api"
import { Bothdata } from '../Api'
export const   Secondapi =()=> {
  let retrieve={retrieve}
  useEffect(() => {  
    storedata();
  }, [])
  const [data , setdata] = useState([]);
  const storedata = async()=>{
    const retrieve = await Bothdata()
    setdata(retrieve);
    console.log(retrieve)
  }
   return(
     <div>
        
     </div>
   )
}

  const Apidata = ()=> {
    useEffect(() => {
      catchdata();
    
    }, [])
    const[home , sethome] = useState([]);
    const catchdata = async()=>{
      const get = await Homedata();
      sethome(get);
      console.log(get)
    }
    return (
      <div className="">
        
  
  
      </div>
    );
  

  }
 
export default Apidata ;

