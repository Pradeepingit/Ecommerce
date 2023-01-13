import React from 'react'
import { Card } from '../Card/Card';
import "./FeaturedProducts.scss"

export const FeaturedProducts = ({type}) => {

    const data =[
        {
            id: 1,
            img:"https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-Shirt",
            isNew: true,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 2,
            img:"https://m.media-amazon.com/images/I/51-d3Fw-FiS._UY741_.jpg",
            title: "Coat",
            isNew: true,
            oldPrice: 2000,
            price: 1500,
        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Skirt",
            oldPrice: 2000,
            price: 1200,
        },
        {
            id: 4,
            img:"https://m.media-amazon.com/images/I/61m4wKTAYsS._UX679_.jpg",
            title: "Hat",
            oldPrice: 250,
            price: 190,
        },
    ];

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, itaque. 
                    Quam libero, numquam, deserunt reiciendis quo magnam odit iste ipsum consequatur
                    mollitia quod velit quos repellendus non cumque atque earum veritatis aut accusamus
                    ea provident enim aspernatur fugit? Neque quo amet laboriosam vitae tempore eius vero 
                    ad illum ea reiciendis? Perferendis expedita sed quasi sequi repellat sunt nostrum 
                    doloremque quisquam dolorum, facilis repellendus molestiae mollitia aliquid commodi 
                    impedit. Quam harum ab molestias sequi vitae. Id expedita porro saepe sunt dolor.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item= {item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}
