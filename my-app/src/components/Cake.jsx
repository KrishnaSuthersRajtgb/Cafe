import React, { useContext, useState } from "react";
import "./product.css"
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";


const Cake = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const products = [
    { id: 20, name: "Sponge Cake", image: "public/Sponge Cake.avif", price: "₹250", category: "cake" },
    { id: 21, name: "Red Velvet", image: "public/Red Velvet Cake.avif", price: "₹250", category: "cake" },
    { id: 22, name: "Pound", image: "public/Molten Lava Cake.avif", price: "₹300", category: "cake" },
    { id: 23, name: "Molten Lava", image: "public/Fruit Cake.avif", price: "₹200", category: "cake" },
    { id: 24, name: "Chiffon Cake", image: "public/Chiffon Cake.avif", price: "₹200", category: "cake" },
    { id: 25, name: "Butter Cake", image: "public/Butter Cake.avif", price: "₹200", category: "cake" },
    { id: 26, name: "Black Forest Cake", image: "public/Black Forest Cake.avif", price: "₹150", category: "cake" },
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
export default Cake;
