import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to trigger the animation sooner or later
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="navbar"
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.3 },
        }}
        className="navbar_logo"
      >
        <img src={assets.Logo} alt="Error to load logo" />
      </motion.div>
      <div className="navbar_hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "line1" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "line2" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "line3" : ""}`}></div>
      </div>
      <motion.ul
        className={`navbar_links ${isMenuOpen ? "active" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          Home
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          About
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          Lab
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
