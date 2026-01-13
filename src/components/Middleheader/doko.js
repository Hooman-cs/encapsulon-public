"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaCheckCircle, FaBuilding } from "react-icons/fa";
import { RiFileTextLine } from "react-icons/ri";
import "./kidit.css";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import { ArrowRight } from "lucide-react";

const Middle = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="middle-container">
      {/* First Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="column"
      >
        <div className="icon-section">
          <FaShoppingBag className="icon12" />
          <div>
            <h3>Products</h3>
            <p>
              Our Research & Development and Quality Assurance Teams work closely
              to develop cutting edge formulations and better delivery systems.
            </p>
          </div>
        </div>

        <div className="icon-section">
          <FaCheckCircle className="icon12" />
          <div>
            <h3>Quality</h3>
            <p>
              The products that bear your name are held to the highest standards
              under the careful care of our laboratory experts and multi-point
              Quality Control testing.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Second Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="column"
      >
        <div className="icon-section">
          <FaBuilding className="icon12" />
          <div>
            <h3>Facilities</h3>
            <p>
              Encapsulon has recently put a state of art production facility for
              Softgel manufacturing in Long Island, New York, USA. This comprises
              of end to end solution from Formulation of softgels to bottling.
            </p>
          </div>
        </div>

        <div className="icon-section">
          <RiFileTextLine className="icon12" />
          <div>
            <h3>Request a quote</h3>
            <p>
              Utilizing science-based innovation, we help our partners better
              serve their clientele to champion wellness worldwide.
            </p>
            <br/>
            <motion.button
              onClick={handleClick}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="shop-now-btn"
            >
              Contact Us <ArrowRight size={20} style={{ marginLeft: "8px" }} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Third Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        className="column third-column"
      >
        <motion.img
          src="assest/softgel-capsule-capsule-in-bottle.jpg"
          alt="Softgel Capsules"
          className="column-image"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
};

export default Middle;
