import React from "react";
export function Mobile({image,brandname, text,brandprice})
{ return(
    <>
<div class="card" >
  <img src={image} alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{brandname}</h5>
    <p class="card-text">{text}</p>
      <p className="price">{brandprice}</p>
    <a href="flipkart.com" class="btn btn-primary">order</a>
  </div>
</div>

    </>);
}


