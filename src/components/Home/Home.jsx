import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="me"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="left-hero"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img 
            src={assets.myEmoj} 
            className="meImg" 
            alt="Error to load my image" 
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="name">
            <motion.img 
              src={assets.arrow} 
              alt="Error to load arrow" 
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello! I Am <span>Om Waghmare</span>
            </motion.h3>
          </div>
        </motion.div>
        <motion.div 
          className="right-hero"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Designer who
          </motion.h4>
          <motion.h2 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Judges a book by its{" "}
            <motion.span 
              className="highlighted-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h3 
                className="cover"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                cover
              </motion.h3>
            </motion.span>
            ...
          </motion.h2>
          <motion.h5 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Because if the cover does not impress you, what else can?
          </motion.h5>
        </motion.div>
      </motion.div>
      <motion.div 
        className="AboutMe"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div 
          className="myJob"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        >
          <h2>I'm a Software Engineer.| </h2>
          <h4>Currently, I'm a Software Engineer at{" "}  
            <motion.img 
              src={assets.facebook} 
              alt="Error to load icon" 
              whileHover={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            Facebook,
          </h4>
        </motion.div>
        <motion.div 
          className="myInfo"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
