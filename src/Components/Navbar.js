import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={process.env.PUBLIC_URL + "/images/airbnb-logo.png"}
        className="nav--logo"
        alt="AirBnb Logo"
      />
      <a href="#">Login</a>
      <a href="#">Contact Us</a>
    </nav>
  );
}
