import React, { useContext, useState } from "react";
import "./product.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { WishlistContext } from "./WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";



const Icecream = () => {
const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
    const products = [
    //ice-cream
    { id: 13, name: "Vanilla", image: "public/Vanilla.avif", price: "₹45", category: "ice-cream" },
    { id: 14, name: "Strawberry", image: "public/Strawberry.avif", price: "₹60", category: "ice-cream" },
    { id: 15, name: "Mint Chocolate", image: "public/Mint Chocolate Chip.avif", price: "₹50", category: "ice-cream" },
    { id: 16, name: "Mango", image: "public/Mango.avif", price: "₹50", category: "ice-cream" },
    { id: 17, name: "Chocolate", image: "public/Chocolate.avif", price: "₹50", category: "ice-cream" },
    { id: 18, name: "Pistachio", image: "public/Pistachio.avif", price: "₹50", category: "ice-cream" },
    { id: 19, name: "Butterscotch", image: "public/Butterscotch.avif", price: "₹60", category: "ice-cream" },
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



export default Icecream;
