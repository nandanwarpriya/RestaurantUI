import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from 'react-icons/hi2';
import Logo from "../Assets/Logo.svg";
// import { List } from '@mui/icons-material';

const Navbar = ({ cartCount, cartItems, removeFromCart, increaseQty, decreaseQty, totalPrice }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        { text: "Home", icon: <HomeIcon /> },
        { text: "About", icon: <InfoIcon /> },
        {text:"Menu", icon: <RestaurantMenuIcon />},
        { text: "Testimonials", icon: <CommentRoundedIcon /> },
        { text: "Contact", icon: <PhoneRoundedIcon /> },
        { text: `Cart(${cartCount})`, icon: <ShoppingCartRoundedIcon /> },
    ];

    const [openCart, setOpenCart] = useState(false);
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
                <div className="navbar-cart-container"
                    onClick={() => { setOpenCart(true) }}
                >
                    <BsCart2 className="navbar-cart-icon" />
                    <span className="cart-count">{cartCount}</span>
                </div>
                <button className="primary-button"> Bookings now </button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
                anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {cartItems && cartItems.length > 0 && (
                            <>
                                <ListItem>
                                    <ListItemText primary="Cart Items:" />
                                </ListItem>
                                {cartItems.map((item, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>

                                        <button
                                            className='removeFromCartButton'
                                            onClick={(e) => {
                                                e.stopPropagation(); //prevents drawer from closing when clicking remove button
                                                removeFromCart(index);
                                            }}
                                        >❌
                                        </button>
                                    </ListItem>
                                ))

                                }
                            </>
                        )}
                        {
                            cartItems && cartItems.length === 0 && (
                                <ListItem>
                                    <ListItemText primary="Your cart is empty" />
                                </ListItem>
                            )
                        }
                    </List>
                </Box>

            </Drawer>

            {/*new drawer for cart items*/}
            <Drawer open={openCart} onClose={() => setOpenCart(false)}
                anchor="right">
                <Box className="cart-drawer">
                    <List>
                        <ListItem className="cart-header">
                            <ListItemText primary="Your Cart" />
                        </ListItem>
                        {cartItems.map((item, index) => (
                            <ListItem key={index} className="cart-item">
                                <ListItemText
                                    primary={item.name}
                                    secondary={`₹${item.price * item.quantity}`}
                                />

                                <div className="qty-controls">
                                    <button onClick={() => decreaseQty(index)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(index)}>+ </button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(index)}> ❌ </button>
                            </ListItem>
                        ))}
                        {
                            cartItems && cartItems.length === 0 && (
                                <ListItem className='empty-cart'>
                                    <ListItemText primary="Your cart is empty" />
                                </ListItem>
                            )
                        }
                    </List>
                    <div className="cart-footer">
                        <div className='total-price'>
                            Total: ₹{totalPrice}
                        </div>
                        <button className="checkout-btn">Checkout</button>

                        <button
                            className="clear-cart-btn"
                            onClick={() => {
                                if(window.confirm("Are you sure you want to clear the cart?")){
                                    setOpenCart([]);    
                                }
                                }}>
                            Clear Cart
                        </button>
                    </div>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
