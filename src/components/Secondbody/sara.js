import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "./vonov.css";

const comments = [
  {
    id: 1,
    text: "Supplement Manufacturer",
    user: "John D.",
    description:
      " their commitment to quality and precision is unmatched. Their softgel formulations have significantly improved our product line, and the team is always responsive and professional. ",
  },
  {
    id: 2,
    text: "Supplement Manufacturer",
    user: "Sarah L.",
    description:
      "From formulation to delivery, the entire process was seamless. The team at Encapsulon is knowledgeable and provided excellent guidance. Our products were delivered on time, meeting all compliance standards. Highly recommend!",
  },
  {
    id: 3,
    text: "Pharmaceutical Distributor",
    user: "Mark R.",
    description:
      "We needed a softgel manufacturer who could meet our high standards, and Encapsulon exceeded our expectations. Their attention to detail and quality assurance process gave us full confidence in our products.",
  },
];

const images = [
  "assest/goli2.webp", // Update with actual image paths
  "assest/goli3.webp",
  "assest/goli4.webp",
];

const SecondBody = () => {
  const [activeComment, setActiveComment] = useState(0);

  return (
    <div className="second-body-container">
      <motion.div
        className="second-body-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-column"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="heading13">Success Stories from Clients</h2>
          <p className="description13">
            The most effective weight loss supplement
          </p>

          <div className="comment-section">
            <div className="comment-icon">
              <FaQuoteLeft size={50} />
            </div>
            <motion.div
              key={comments[activeComment].id}
              className="comment-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="comment-description">
                {`"${comments[activeComment].description}"`}
              </p>
              <p className="comment-user">- {comments[activeComment].user}</p>
              <p className="comment-text">{comments[activeComment].text}</p>
            </motion.div>
          </div>

          <div className="dots-container">
            {comments.map((_, index) => (
              <span
                key={index}
                className={`dot ${activeComment === index ? "active" : ""}`}
                onClick={() => setActiveComment(index)}
              ></span>
            ))}
          </div>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div
          className="image-column12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            key={activeComment}
            src={images[activeComment]}
            alt="Client Story"
            className="image-slider"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecondBody;
