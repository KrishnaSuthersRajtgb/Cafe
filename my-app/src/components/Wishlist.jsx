// Wishlist.jsx
import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const goToBuyNow = (product) => {
    localStorage.setItem("buynow", JSON.stringify({ ...product, quantity: 1 }));
    navigate("/buynow");
  };

  return (
    <div className="total-card">
      {wishlist.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Your Wishlist is empty</h2>
      ) : (
        wishlist.map(product => (
          <Card key={product.id} className="card1">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant="danger" onClick={() => toggleWishlist(product)}>
                Remove
              </Button>
              <Button variant="primary" onClick={() => goToBuyNow(product)} style={{ marginLeft: "10px" }}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Wishlist;
