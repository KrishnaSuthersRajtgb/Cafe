import React, { useContext, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";

const Cofee = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const products = [
    { id: 1, name: "Black Tea", image: "./black tea.avif", price: "₹30", category: "tea" },
    { id: 2, name: "Green Tea", image: "./green tea.avif", price: "₹30", category: "tea" },
    { id: 3, name: "White Tea", image: "./white tea.avif", price: "₹30", category: "tea" },
    { id: 4, name: "Oolong Tea", image: "./Oolong Tea.avif", price: "₹30", category: "tea" },
    { id: 5, name: "Herbal Tea", image: "./Herbal Tea.avif", price: "₹30", category: "tea" },
    { id: 6, name: "Yellow Tea", image: "./Yellow Tea.avif", price: "₹30", category: "tea" },
    { id: 7, name: "Pu-erh Tea", image: "./Pu-erh Tea.avif", price: "₹30", category: "tea" },
    { id: 8, name: "Turkish Coffee", image: "./Turkish Coffee.avif", price: "₹40", category: "coffee" },
    { id: 9, name: "Espresso", image: "./Espresso.avif", price: "₹40", category: "coffee" },
    { id: 10, name: "Cappuccino", image: "./Cappuccino.avif", price: "₹40", category: "coffee" },
    { id: 11, name: "Americano", image: "./Americano.avif", price: "₹40", category: "coffee" },
    { id: 12, name: "Mocha", image: "./Mocha.avif", price: "₹40", category: "coffee" },
  ];

  const isInCart = (productId) => {
     return cartItems.some((item) => item.id === productId);
   };
 
   const handleToggleCart = (product) => {
     const updatedCart = [...cartItems];
     const exists = updatedCart.some((item) => item.id === product.id);
     if (!exists) {
       updatedCart.push({ ...product, quantity: 1 });
       localStorage.setItem("cart", JSON.stringify(updatedCart));
       setCartItems(updatedCart);
     }
     navigate("/gotocard");
   };
 
   const handleBuyNow = (product) => {
     localStorage.setItem("buynow", JSON.stringify({ ...product, quantity: 1 }));
     navigate("/buynow");
   };
 
   return (
     <div className="total-card scroll-bar">
       {products.map((product) => {
         const isWishlisted = wishlist.some((item) => item.id === product.id);
         const inCart = isInCart(product.id);
 
         return (
           <Card key={product.id} className="card1">
             <Card.Img variant="top" src={product.image} />
             <Card.Body>
               <Card.Title>
                 {product.name}
                 <motion.button
                   whileTap={{ scale: 0.8 }}
                   onClick={() => toggleWishlist(product)}
                   className="wishlist-btn"
                   style={{ background: "none", border: "none", cursor: "pointer", float: "right" }}
                 >
                   {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
                 </motion.button>
               </Card.Title>
 
               <Card.Text>{product.price}</Card.Text>
 
               <Button variant="primary" onClick={() => handleToggleCart(product)}>
                 {inCart ? "Go to Cart" : "Add to Cart"}
               </Button>
 
               <Button className="buy-now" variant="primary" onClick={() => handleBuyNow(product)}>
                 Buy Now
               </Button>
             </Card.Body>
           </Card>
         );
       })}
     </div>
   );
 };
 


export default Cofee;
