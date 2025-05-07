import React, { useContext, useState } from "react";
import "./product.css"
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";
const Freshjuice = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const products = [
    { id: 27, name: "Watermelon Juice", image: "public/Watermelon Juice.avif", price: "₹30", category: "juice" },
    { id: 28, name: "Pineapple Juice", image: "public/Pineapple Juice.avif", price: "₹40", category: "juice" },
    { id: 29, name: "Orange Juice", image: "public/Orange Juice.avif", price: "₹20", category: "juice" },
    { id: 30, name: "Lemon Juice", image: "public/Lemon Juice.avif", price: "₹10", category: "juice" },
    { id: 31, name: " Mango Juice", image: "public/juice.avif", price: "₹20", category: "juice" },
    { id: 32, name: "Carrot Juice", image: "public/Carrot Juice.avif", price: "₹30", category: "juice" },
    { id: 33, name: "Beetroot Juice", image: "public/Beetroot Juice.avif", price: "₹40", category: "juice" },
    { id: 34, name: "Apple Juice", image: "public/Apple Juice.avif", price: "₹30", category: "juice" },
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

export default Freshjuice;
