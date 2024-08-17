import React from "react";
import "./Work.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Work() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.4, // Trigger when 10% of the component is visible
  });

  const workBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="work-field">
      <motion.div
        className="moreph__circle"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h2
        className="text-nor"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Work Experience
      </motion.h2>
      <div className="work-content">
        {[1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            className="workBox"
            variants={workBoxVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="img" variants={imageVariants}>
              <img
                src={
                  index === 0
                    ? assets.serviceIconFirst
                    : index === 1
                    ? assets.serviceIconSecond
                    : index === 2
                    ? assets.serviceIconThird
                    : assets.serviceIconFourth
                }
                alt="Error to load service img"
              />
            </motion.div>
            <motion.div className="workInfo" variants={textVariants}>
              <h2>CIB on the Mobile</h2>
              <p>
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
