import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const Cart = () => {

    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Long Sleeve Graphic T-Shirt",
        desc: "Long Sleeve Graphic T-Shirt",
        isNew: true,
        oldPrice: 200,
        price: 180,
      },
      {
        id: 2,
        img: "https://m.media-amazon.com/images/I/51-d3Fw-FiS._UY741_.jpg",
        title: "Coat",
        desc: "Coat",
        isNew: true,
        oldPrice: 2000,
        price: 1500,
      },
    ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price"> 1 X ₹{item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹500</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}
