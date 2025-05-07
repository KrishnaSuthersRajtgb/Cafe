import React, { useContext, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";

const Cafespecial = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const products = [
    { id: 43, name: "Choco Hazelnut Sandwich", image: "public/Choco Hazelnut Croissant Sandwich.avif", price: "₹500", category: "cafe's special" },
    { id: 44, name: "Mocha Delight Pancakes", image: "public/Mocha Delight Pancakes.avif", price: "₹600", category: "cafe's special" },
    { id: 45, name: "Honey Latte French Toast", image: "public/Honey Latte French Toast.avif", price: "₹500", category: "cafe's special" },
    { id: 46, name: "Blueberry Cheesecake", image: "public/Blueberry Cheesecake Smoothie.avif", price: "₹500", category: "cafe's special" },
    { id: 47, name: "Almond Butter Espresso Toast", image: "public/Almond Butter Espresso Toast.avif", price: "₹650", category: "cafe's special" },
    { id: 48, name: "Vanilla Bean Affogato Sundae", image: "public/Vanilla Bean Affogato Sundae.avif", price: "₹550", category: "cafe's special" },
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

export default Cafespecial;
