'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Navbar from "../components/Navbar/HomeHeroNavbar";
import Headfirst from "../components/Header/QualityExpertiseSection";
import Middle from "../components/Middleheader/ServiceHighlights";
import Firstlast from "../components/Firstlast/ManufacturingProcess";
import Backbody from "../components/Body/ParallaxSoftgelBanner";
import Secondbody from "../components/Secondbody/TestimonialsSlider";
import Footer from "../components/Footer/MainFooter";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const firstlastRef = useRef<HTMLDivElement | null>(null); // ✅ fix

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFirstlast = () => {
    if (firstlastRef.current) {
      firstlastRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onDiscoverMoreClick={scrollToFirstlast} />
      <Headfirst />
      <Middle />

      <div ref={firstlastRef}>
        <Firstlast />
      </div>

      <Backbody />
      <Secondbody />
      <Footer />

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
