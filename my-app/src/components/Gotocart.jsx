import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./gotocart.css";

const Gotocard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateLocalStorage(updatedCart);
  };

  const handleIncrement = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateLocalStorage(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateLocalStorage(updatedCart);
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
    return total + cleanPrice * item.quantity;
  }, 0);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleConfirmPurchase = () => {
    Swal.fire({
      title: "Thank You!",
      text: `Your order for ₹${totalAmount.toFixed(2)} has been placed successfully!`,
      icon: "success",
      confirmButtonText: "OK",
      didClose: () => {
        localStorage.removeItem("cart");
        setCartItems([]);
        navigate("/product");
      },
    });
  };

  return (
    <div className="gotocard-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="gotocard-item">
              <img src={item.image} alt={item.name} className="gotocard-image" />
              <div className="gotocard-info">
                <h4>{item.name}</h4>
                <p className="price-text">{item.price}</p>
                <div className="quantity-controls">
                  <Button variant="secondary" size="sm" onClick={() => handleDecrement(item.id)}>-</Button>
                  <span className="quantity-value">{item.quantity}</span>
                  <Button variant="secondary" size="sm" onClick={() => handleIncrement(item.id)}>+</Button>
                </div>
                <Button variant="danger" className="gotocard-remove" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="gotocard-summary">
            <h4>Total: ₹{totalAmount.toFixed(2)}</h4>
            <Button variant="success" onClick={handleShow}>Buy Now</Button>
          </div>
        </>
      )}
      <Link to="/" className="gotocard-continue">Continue Shopping</Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🍵 Namma Cafe</Modal.Title>
        </Modal.Header>
        <Modal.Body>THANK YOU...💖</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmPurchase}>Place Order</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gotocard;
