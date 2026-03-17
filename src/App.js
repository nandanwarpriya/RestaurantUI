import { useState, useEffect } from 'react';
import './App.css';

import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import Work from './Components/Work';

function App() {

  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart):[];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.name === item.name);

    if (existingItem) {
      const updatedCart = cart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 }
          : i
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQty = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item);
    setCart(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const totalCartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={totalCartCount}
        cartItems={cart}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        totalPrice={totalPrice}
      />
      <div className="App">
        <Home />
        <About />

        {/*Pass function to menu component*/}
        <Menu addToCart={addToCart} />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
