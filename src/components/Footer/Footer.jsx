import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <h2>Contact</h2>
      <p>
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind?
      </p>
      <h3>Let's connect. <span>ibrhaimmemon930@gmail.com</span></h3>
      <div className="flex">
        <FaInstagram id="svg_icon"  />
        <CiFacebook id="svg_icon" />
        <FaXTwitter id="svg_icon" />
      </div>
    </div>
  );
}

export default Footer;
