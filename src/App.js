import React from 'react'
import Head from './Header'
import  Cardliveauction from "./Card"
import Carduser from "./Carduser"
import Apidata from "./fatchedapi"
import {Secondapi} from "./fatchedapi"
import './App.css';
export default function App() {
  return (
    <div>
      <Head/>
      <Cardliveauction/>
      <div>
        <div className=" divider-campo"> 
          <h5> Live Auction</h5>
          <h5> View All live Auction</h5>
        </div>
        <hr/>
      </div>
      <Carduser/>
      <Apidata/>
      <Secondapi/>
    </div>
  )
}
