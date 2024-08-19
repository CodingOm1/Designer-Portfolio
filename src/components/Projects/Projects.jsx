import React from "react";
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import "./Projects.css";
import { assets } from "../../assets/assets";

const Projects = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const glassMorphism = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
  };

  const projectImageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } }
  };

  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
<motion.div
  className="project_section"
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer}
>
  <motion.div
    className="glass_moreph"
    variants={glassMorphism}
    whileInView="visible"
  ></motion.div>
  
  {/* First Project Box */}
  <motion.div
    className="project_box"
    variants={fadeInUp}
    whileInView="visible"
    whileHover="hover"
  >
    <motion.div className="project_info">
      <h4>Featured Project</h4>
      <h2>Example Project</h2>
      <div className="glass_text">
        <p>
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
      </div>
      <motion.div className="flex" variants={hoverEffect}>
        <MdOutlineOpenInNew id="open_site_svg" />
        <RiInformationLine id="info_svg" />
      </motion.div>
    </motion.div>

    <motion.div
      className="project_img"
      variants={projectImageVariants}
      whileInView="visible"
    >
      <motion.img
        src={assets.projectOne}
        alt=""
        width={"300px"}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      />
    </motion.div>
  </motion.div>

  {/* Second Project Box */}
  <motion.div
    className="project_box"
    variants={fadeInUp}
    whileInView="visible"
    whileHover="hover"
  >
    <motion.div
      className="project_img"
      variants={projectImageVariants}
      whileInView="visible"
    >
      <motion.img
        src={assets.projectTwo}
        alt=""
        width={"300px"}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      />
    </motion.div>

    <motion.div className="project_info">
      <h4>Featured Project</h4>
      <h2>Example Project</h2>
      <div className="glass_text">
        <p>
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
      </div>
      <motion.div className="flex" variants={hoverEffect}>
        <MdOutlineOpenInNew id="open_site_svg" />
        <RiInformationLine id="info_svg" />
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>

  );
};

export default Projects;
