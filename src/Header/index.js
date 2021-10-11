import React from 'react'
import "./styles.css"
import  logo from "../assests/logoal.png"
  const  Head =()=>{

    return (
 <div className="Main-head">
           <div className="logo-div"> <img className="img-logo" src={logo} /> </div>
                <div> 
               <div className="btn-div"><button className="btn-artwork"> Art Work </button>
               <button className="btn-home"> Home</button>
                <button className="btn-Creator"> Creator</button>  </div> 
                 
               </div>
               <div className=" div-wallet">
               <button className="btn-connect">  Connect Wallet</button>
               </div>
  </div>         
            
            
    )
}
export default Head;