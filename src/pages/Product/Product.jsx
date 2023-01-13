import React from 'react'
import "./Product.scss"
import { useState } from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
             
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">₹199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sunt,
          tempore est iusto magnam commodi non cumque incidunt voluptatem quis
          facere quos reiciendis mollitia placeat. Mollitia, maxime. Libero quia
          quo, dignissimos quis, in corporis aperiam quam rerum incidunt sint
          facere recusandae est. Dignissimos, magni minima!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
