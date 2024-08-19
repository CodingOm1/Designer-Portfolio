import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { assets } from "../../assets/assets";

const Skills = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }
  };

  const logoVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 360, transition: { duration: 2, type: "spring" } }
  };



  return (
    <div className="skills_Section">
      <motion.div
        className="skill-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2>
          I'm currently looking to join a <span>cross-functional</span> team
        </h2>
        <h3>that values improving people's lives through accessible design</h3>
      </motion.div>

      <motion.div
        className="skills_icon"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={iconVariants}
      >
        <img src={assets.sourceIcons} alt="" />

        <div className="vectors">
          <img src={assets.vectorOne} alt="" />
          <img src={assets.vectorTwo} alt="" />
          <img src={assets.vectorThird} alt="" />
          <img src={assets.vectorFourth} alt="" />
          <img src={assets.vectorFifth} alt="" />
          <img src={assets.vectorSixth} alt="" />
        </div>
      </motion.div>

      <motion.div
        className="attr_user"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={logoVariants}
      >
        <div className="logo_ring">
          <div className="logo_glow">
            <img src={assets.BigLogo} alt="Error to load image" />
            <div className="ring"><img src={assets.standRing} alt="" /></div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Skills;
