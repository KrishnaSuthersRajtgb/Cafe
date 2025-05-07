import React, { useEffect, useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./buynow.css";

const Buynow = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("buynow"));
    if (storedProduct) {
      setProduct(storedProduct);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleIncrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
    }));
  };

  const handleDecrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity > 1 ? prevProduct.quantity - 1 : 1,
    }));
  };

  const handleConfirmPurchase = () => {
    Swal.fire({
      title: "Thank You",
      text: `Your order for ${product.quantity} item(s) is confirmed.`,
      icon: "success",
      // confirmButtonText: "OK",
      // allowOutsideClick: false,
      // allowEscapeKey: false,
      // allowEnterKey: true,
      // backdrop: true,
      didClose: () => {
        localStorage.removeItem("buynow");
        navigate("/product");
      },
    });
  };

  if (!product) return null;

  const unitPrice = parseFloat(product.price.toString().replace(/[^\d.]/g, ""));
  const totalPrice = (unitPrice * product.quantity).toFixed(2);

  return (
    <div className="buynow-container">
      <h1 className="buynow">Buy Now</h1>
      <Card className="buynow-card">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Unit Price: ₹{unitPrice.toFixed(2)}</Card.Text>
          <Card.Text>
            Quantity:
            <div className="quantity-controls">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleDecrement}
                disabled={product.quantity <= 1}
              >
                -
              </Button>
              <span className="quantity-value">{product.quantity}</span>
              <Button variant="secondary" size="sm" onClick={handleIncrement}>
                +
              </Button>
            </div>
          </Card.Text>
          <Card.Text>Total Price: ₹{totalPrice}</Card.Text>
          <Button variant="success" onClick={handleShow}>Namakkal</Button>
          <Button variant="success" onClick={handleShow}>Salem</Button>
          <Button variant="success" onClick={handleShow}>Erode</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🍵 Namma Cafe</Modal.Title>
        </Modal.Header>
        <Modal.Body>THANK YOU...💖</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmPurchase}>
            Place Order
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Buynow;
