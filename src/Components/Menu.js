import React from 'react';
import Burger from "../Assets/burger.png";
import Pizza from "../Assets/pizza.png";
import Pasta from "../Assets/pasta.png";

const Menu = ({addToCart}) => {

    const menuData = [
        {
            id: 1,
            name: "Burger",
            price: 120,
            image: Burger
        },
        {
            id: 2,
            name: "Pizza",
            price: 250,
            image: Pizza
        },
        {
            id: 3,
            name: "Pasta",
            price: 180,
            image: Pasta
        }
    ];
    return (
        <div className="menu-section-wrapper" id="menu">
            <div className='menu-section-top'>
                <p className="primary-subheading">Menu</p>
                <h1 className="primary-heading">Our Popular Dishes</h1>
                <p className="primary-text">
                    Discover our most loved meals made with fresh ingredients.
                </p>
            </div>

            <div className="menu-section-bottom">
                {menuData.map((item) => (
                    <div className='menu-card' key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>₹{item.price}</p>
                        <button className="secondary-button" onClick={()=>addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Menu;