import React from 'react'
import "./styles.css"

  const Cardliveauction =()=>{
    return (
        <>
            <div className="card-cont">
                <div className="card-img-container"> 
                <img className="img-pic" src="http://safeart.alshumaal.com/assets/profile/pic/img  (5).jpg"  alrt="hello this is card"/>       
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

                            <h2> owner  by</h2>
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