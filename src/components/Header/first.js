"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "./mono.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Left Side Content */}
      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="animated-heading"
        >
          Quality Vitamins <br />
          and Supplements
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          className="sub-description1"
        >
        Nutraceutical dosages require proper analytics and our team is equipped to handle these measures.
        </motion.p>
</div>
 {/* center Side Content */}
  <div className="header-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          className="sub-description"
        >
       Encapsulon has built a stellar reputation for solving complex encapsulation
        challenges for the health and nutritional supplement industries.
        

        </motion.p>

        <br/>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          className="sub-description"
        >
       With a dedication to both Quality and Innovation, buyers have more ways to partner with the company.
      we’ve diversified our product line to stay ahead of consumer demand.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="shop-now-btn"
        >
          Get Started Today <ArrowRight size={20} style={{ marginLeft: "8px" }} />
        </motion.button>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="header-image"
      >
       
        <Image src="/assest/head.png" alt="Your Alt Text" width={308} height={100} />
      </motion.div>
    </div>
  );
};

export default Header;
