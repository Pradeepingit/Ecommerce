import React from 'react'
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Acessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ut qui omnis esse, explicabo quas, 
                    dolore voluptates corrupti, itaque laboriosam ea maiores voluptatum officia debitis ipsum molestiae. 
                    At autem earum natus dolore ab dolorem perferendis, facere voluptas neque ullam. A eligendi qui, similique odit id esse.
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ut qui omnis esse, explicabo quas, 
                    dolore voluptates corrupti, itaque laboriosam ea maiores voluptatum officia debitis ipsum molestiae. 
                    At autem earum natus dolore ab dolorem perferendis, facere voluptas neque ullam. A eligendi qui, similique odit id esse.
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">ECS</span>
                <span className="copyright">Ⓒ Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}
