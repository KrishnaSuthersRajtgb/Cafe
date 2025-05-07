import React, { useContext, useState } from "react";
import "./product.css"
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";




const Dessert = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );  
  const products = [
    { id: 35, name: "Tiramisu", image: "public/Tiramisu.avif", price: "₹300", category: "dessert" },
    { id: 36, name: "Panna Cotta", image: "public/Panna Cotta.avif", price: "₹350", category: "dessert" },
    { id: 37, name: "Mousse", image: "public/Mousse.avif", price: "₹300", category: "dessert" },
    { id: 38, name: "Macarons", image: "public/Macarons.avif", price: "₹300", category: "dessert" },
    { id: 39, name: "Gulab Jamun", image: "public/Gulab Jamun.avif", price: "₹200", category: "dessert" },
    { id: 40, name: "Chocolate Brownie", image: "public/Chocolate Brownie.avif", price: "₹300", category: "dessert" },
    { id: 41, name: "Apple Pie", image: "public/Apple Pie.avif", price: "₹350", category: "dessert" },
    { id: 42, name: "Cheesecake", image: "public/Cheesecake.avif", price: "₹400", category: "dessert" },
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
export default Dessert;
