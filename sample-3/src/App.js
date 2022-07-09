import React from 'react';
import './App.css';
import  {Mobile } from './component/Mobile';
import {useState} from 'react';
function App() {
useState()
  return (
    <div className="App">
   <h1>Mobile brand </h1>
  <Mobile brandname="samsung" brandprice="Rs.10000" image="samsung.jpg" text="model:samsungA34 ram:3gb rom=64gb
  camera:64megapixel display:5.5inches"></Mobile>
  <Mobile brandname="poco" brandprice="Rs.15000" image="poco.png"text="model:poco x3 ram:6gb rom=128gb
  camera:72megapixel display:5.8inches"></Mobile>
  <Mobile brandname="oppo" brandprice="Rs.20000" image="oppo.jpg"text="model:oppo A3 ram:8gb rom=128gb
  camera:64megapixel display:5.5inches"></Mobile>
  <Mobile brandname="1plus" brandprice="Rs.50000" image="1+.jpg"text="model:1plus 9R ram:8gb rom=256gb
  camera:108megapixel display:6.2inches"></Mobile>
    </div>
  );
}

export default App;
