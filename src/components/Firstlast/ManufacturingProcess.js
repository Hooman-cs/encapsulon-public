"use client";
import React from "react";
import { motion } from "framer-motion";
import "./ManufacturingProcess.css";

export async function getServerSideProps() {
  return { props: { time: new Date().toISOString() } };
}

const Middle = () => {
  // Array of descriptions for each numbered circle
  const descriptions = [
    "Product Development & Formulation : Work with our R&D team to create custom formulations tailored to your brand’s needs.",
    "Ingredient Sourcing : We source high-quality active and inactive ingredients from certified suppliers to ensure purity and potency.",
    "Softgel Encapsulation : Using advanced softgel technology, we encapsulate your formulation with precise dosage and consistency.",
    "Drying & Curing : Softgels go through a controlled drying process to achieve the right texture, shape, and durability.",
    "Quality Control & Testing : Every batch undergoes rigorous quality testing for potency, purity, and safety, ensuring compliance with FDA and cGMP standards.",
    "Packaging & Labeling : Choose from custom bottle packaging with private label branding, ready for retail or distribution."
  ];

  return (
    <div className="middle-container12">
      {/* Left Side: Heading & Description */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-section"
      >
        <h2 className="main-heading">Our Softgel <br />Manufacturing Process</h2>
        <p className="main-description">
        As one of the industry’s top soft gel  manufacturing company.

        </p>
      </motion.div>

      {/* Right Side: Four Columns with Circles */}
      <div className="four-columns">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            className={`column-box column-box-${num}`} 
          >
            <div className="circle">{num}</div>
            <div className={`description-box description-box-${num}`}>
              <p className="column-description">{descriptions[index]}</p>
            </div>
          </motion.div>
        ))}
      </div>
          
    </div>
  );
};

export default Middle;
