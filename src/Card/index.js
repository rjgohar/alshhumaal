import React from 'react'
import "./styles.css"
import  logo from "../assests/logoal.png"
  const Cardliveauction =()=>{
    return (
        <>
            <div className="card-cont">
                <div className="card-img-container"> 
                <img className="img-logo" src={logo}  alrt="hello this is card"/>       
                </div>
                <div className="card-sndsc">
                    <div className="card-btn-al">
             <button className="btn-ownr-name">als---sirang</button>
                    </div>
                    <div className="card-tite"><h1>hunza</h1></div>
                    <div className="card-text-fex">
                        <div className="">
                        <h2>Reserve Price</h2>

                        <h2> 3.000 ETH</h2>
                        </div>
                        <hr/>
                        <div>

                            <h4> owner  by</h4>
                            <button className="card-btn"> als---sirang</button>
                        </div>

                    </div>
                    <div className="view-div">
                    <button className="btn-view-art">
                        View Art
                    </button>
                </div>
                </div>
                
                  </div>

            </>
    )
  }
export default Cardliveauction;