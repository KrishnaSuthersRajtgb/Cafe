import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="total-background">
    <div className="location-container">
      <h2 className="location-name">Our Coffee Shop Location</h2>
      <div className="map-container">
        <iframe
          title="Namma Cafe"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3213039657265!2d77.8307967!3d11.3633299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96762877e8977%3A0x5fd9ee0bf9a82c1c!2sGaruda%20Bakery!5e0!3m2!1sen!2sus!4v1647136840951!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Location;
