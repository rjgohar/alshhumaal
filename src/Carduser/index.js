import React from 'react'
import "./styles.css"
 const Carduser =(props) =>{
    return (<>
        <div  className="main-cont">
            <div className="img-cont">
                <img className="img-card" src="http://safeart.alshumaal.com/assets/profile/pic/img  (5).jpg"/>
            </div>
            <div className="card-title">
                <h3> title</h3>
            </div>
            <div>
                <img src=""/>
                <h4>@alsiraang</h4>
            </div>
            <div className="card-end-body">
            <div className="card-text">
            <h2>Reserve Price</h2>
            <h2> 3.000 ETH  </h2>
           
            </div>
            <div> <h2> Auction Ended</h2></div>
        </div>
            </div>
        </>
    )
}
export default Carduser;
