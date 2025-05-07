import React, { useContext } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./WishlistContext";
import Footer from "./Footer";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const inCart = JSON.parse(localStorage.getItem("cart") || "[]").some(item => item.id === product.id);

  const handleToggleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!inCart) {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      navigate("/gotocard");
    } else {
      navigate("/gotocard");
    }
  };
3
  const handleBuyNow = () => {
    localStorage.setItem("buynow", JSON.stringify({ ...product, quantity: 1 }));
    navigate("/buynow");
  };

  return (
    <Card className="card1">
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
            {isInWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
          </motion.button>
        </Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant={inCart ? "success" : "primary"} onClick={handleToggleCart}>
          {inCart ? "Go to Cart" : "Add to Cart"}
        </Button>
        <Button className="buy-now" variant="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

const Product = () => {
  const products = [
    // Tea
    { id: 1, name: "Black Tea", image: "public/black tea.avif", price: "₹30", category: "tea" },
    { id: 2, name: "Green Tea", image: "public/green tea.avif", price: "₹30", category: "tea" },
    { id: 3, name: "White Tea", image: "public/white tea.avif", price: "₹30", category: "tea" },
    { id: 4, name: "Oolong Tea", image: "public/Oolong Tea.avif", price: "₹30", category: "tea" },
    { id: 5, name: "Herbal Tea", image: "public/Herbal Tea.avif", price: "₹30", category: "tea" },
    { id: 6, name: "Yellow Tea", image: "public/Yellow Tea.avif", price: "₹30", category: "tea" },
    { id: 7, name: "Pu-erh Tea", image: "public/Pu-erh Tea.avif", price: "₹30", category: "tea" },
    // Coffee
    { id: 8, name: "Turkish Coffee", image: "public/Turkish Coffee.avif", price: "₹40", category: "coffee" },
    { id: 9, name: "Espresso", image: "public/Espresso.avif", price: "₹40", category: "coffee" },
    { id: 10, name: "Cappuccino", image: "public/Cappuccino.avif", price: "₹40", category: "coffee" },
    { id: 11, name: "Americano", image: "public/Americano.avif", price: "₹40", category: "coffee" },
    { id: 12, name: "Mocha", image: "public/Mocha.avif", price: "₹40", category: "coffee" },
    // Ice-cream
    { id: 13, name: "Vanilla", image: "public/Vanilla.avif", price: "₹40", category: "ice-cream" },
    { id: 14, name: "Strawberry", image: "public/Strawberry.avif", price: "₹60", category: "ice-cream" },
    { id: 15, name: "Mint Chocolate", image: "public/Mint Chocolate Chip.avif", price: "₹50", category: "ice-cream" },
    { id: 16, name: "Mango", image: "public/Mango.avif", price: "₹50", category: "ice-cream" },
    { id: 17, name: "Chocolate", image: "public/Chocolate.avif", price: "₹50", category: "ice-cream" },
    { id: 18, name: "Pistachio", image: "public/Pistachio.avif", price: "₹50", category: "ice-cream" },
    { id: 19, name: "Butterscotch", image: "public/Butterscotch.avif", price: "₹60", category: "ice-cream" },
    // Cake
    { id: 20, name: "Sponge Cake", image: "public/Sponge Cake.avif", price: "₹250", category: "cake" },
    { id: 21, name: "Red Velvet", image: "public/Red Velvet Cake.avif", price: "₹250", category: "cake" },
    { id: 22, name: "Pound", image: "public/Molten Lava Cake.avif", price: "₹300", category: "cake" },
    { id: 23, name: "Molten Lava", image: "public/Fruit Cake.avif", price: "₹200", category: "cake" },
    { id: 24, name: "Chiffon Cake", image: "public/Chiffon Cake.avif", price: "₹200", category: "cake" },
    { id: 25, name: "Butter Cake", image: "public/Butter Cake.avif", price: "₹200", category: "cake" },
    { id: 26, name: "Black Forest Cake", image: "public/Black Forest Cake.avif", price: "₹150", category: "cake" },
    // Fresh Juice
    { id: 27, name: "Watermelon Juice", image: "public/Watermelon Juice.avif", price: "₹30", category: "juice" },
    { id: 28, name: "Pineapple Juice", image: "public/Pineapple Juice.avif", price: "₹40", category: "juice" },
    { id: 29, name: "Orange Juice", image: "public/Orange Juice.avif", price: "₹20", category: "juice" },
    { id: 30, name: "Lemon Juice", image: "public/Lemon Juice.avif", price: "₹10", category: "juice" },
    { id: 31, name: "Mango Juice", image: "public/juice.avif", price: "₹20", category: "juice" },
    { id: 32, name: "Carrot Juice", image: "public/Carrot Juice.avif", price: "₹30", category: "juice" },
    { id: 33, name: "Beetroot Juice", image: "public/Beetroot Juice.avif", price: "₹40", category: "juice" },
    { id: 34, name: "Apple Juice", image: "public/Apple Juice.avif", price: "₹30", category: "juice" },
    // Dessert
    { id: 35, name: "Tiramisu", image: "public/Tiramisu.avif", price: "₹300", category: "dessert" },
    { id: 36, name: "Panna Cotta", image: "public/Panna Cotta.avif", price: "₹350", category: "dessert" },
    { id: 37, name: "Mousse", image: "public/Mousse.avif", price: "₹300", category: "dessert" },
    { id: 38, name: "Macarons", image: "public/Macarons.avif", price: "₹300", category: "dessert" },
    { id: 39, name: "Gulab Jamun", image: "public/Gulab Jamun.avif", price: "₹200", category: "dessert" },
    { id: 40, name: "Chocolate Brownie", image: "public/Chocolate Brownie.avif", price: "₹300", category: "dessert" },
    { id: 41, name: "Apple Pie", image: "public/Apple Pie.avif", price: "₹350", category: "dessert" },
    { id: 42, name: "Cheesecake", image: "public/Cheesecake.avif", price: "₹400", category: "dessert" },
    // Cafe's Special
    { id: 43, name: "Choco Hazelnut Sandwich", image: "public/Choco Hazelnut Croissant Sandwich.avif", price: "₹500", category: "cafe's special" },
    { id: 44, name: "Mocha Delight Pancakes", image: "public/Mocha Delight Pancakes.avif", price: "₹600", category: "cafe's special" },
    { id: 45, name: "Honey Latte French Toast", image: "public/Honey Latte French Toast.avif", price: "₹500", category: "cafe's special" },
    { id: 46, name: "Blueberry Cheesecake", image: "public/Blueberry Cheesecake Smoothie.avif", price: "₹500", category: "cafe's special" },
    { id: 47, name: "Almond Butter Toast", image: "public/Almond Butter Espresso Toast.avif", price: "₹650", category: "cafe's special" },
    { id: 48, name: "Vanilla Bean Affogato", image: "public/Vanilla Bean Affogato Sundae.avif", price: "₹550", category: "cafe's special" },
  ];

  return (
    <div className="scroll-bar">
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand to="#home">All</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="link2" to="/coffee">Coffee</Link>
          <Link className="link2" to="/icecream">Icecream</Link>
          <Link className="link2" to="/cake">Cake</Link>
          <Link className="link2" to="/freshjuice">Fresh Juice</Link>
          <Link className="link2" to="/dessert">Dessert</Link>
          <Link className="link2" to="/Cafespecial">Cafe's Special</Link>
        </Nav>
      </Navbar>

      <div className="total-card">
        {products.map(product => (
          <motion.div key={product.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;


