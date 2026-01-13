"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Use next/navigation
import Link from "next/link";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "./novot.css";

import { ArrowRight } from "lucide-react";

const Navbar = ({ onDiscoverMoreClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="background-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Image src="/assest/logo12.png" alt="Your Alt Text" width={220} height={180} />
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
        <li className={pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/about-us" ? "active" : ""}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={pathname === "/contact" ? "active" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
          
          <li className={pathname === "/blog" ? "active" : ""}>
            <Link href="/blog">Blog</Link>
          </li>

          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            Services ▼
            </button>
            <ul className="dropdown-menu">
              <li className={pathname === "/custom-formulation" ? "active" : ""}>
                <Link href="/custom-formulation">Custom-Formulation</Link>
              </li>
              <li className={pathname === "/branded-products" ? "active" : ""}>
                <Link href="/branded-products">Branded-Products</Link>
              </li>
              <li className={pathname === "/product-catalog" ? "active" : ""}>
      <Link href="/product-catalog">Product-Catalog</Link>
    </li>
            </ul>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="navbar-icons">
          <FaSearch className="icon14" />
          <div className="vertical-line"></div>
          <div className="cart-section">
            <FaShoppingCart className="icon1" />
            <span>Cart</span>
            <div className="cart-badge">0</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
     <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
  <ul>
  <li className={pathname === "/" ? "active" : ""} onClick={toggleMenu}>
      <Link href="/">Home</Link>
    </li>
    <li className={pathname === "/about-us" ? "active" : ""} onClick={toggleMenu}>
      <Link href="/about-us">About Us</Link>
    </li>
    <li className={pathname === "/contact" ? "active" : ""} onClick={toggleMenu}>
      <Link href="/contact">Contact</Link>
    </li>
    <li className={pathname === "/blog" ? "active" : ""} onClick={toggleMenu}>
      <Link href="/blog">Blog</Link>
    </li>
    <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
      <button
        className={`dropdown-toggle ${
          ["/custom-formulation", "/branded-products","/product-catalog"].includes(pathname) ? "active-dropdown" : ""
        }`}
        onClick={toggleDropdown}
      >
        Services ▼
      </button>
      <ul className="dropdown-menu">
        <li className={pathname === "/custom-formulation" ? "active" : ""}>
          <Link href="/custom-formulation">Custom-Formulation</Link>
        </li>
        <li className={pathname === "/branded-products" ? "active" : ""}>
          <Link href="/branded-products">Branded-Products</Link>
        </li>
        <li className={pathname === "/product-catalog" ? "active" : ""}>
      <Link href="/product-catalog">Product-Catalog</Link>
    </li>
      </ul>
    </li>
  </ul>
</div>

      {/* Animated Heading and Button */}
      <div className="hero-content">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="organic-text"
        >
          Your Trusted Partner in Softgel Contract Manufacturing
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="natural-heading"
        >
          Softgel Manufacturing <br />
          <span>Capabilities</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="shop-btn"
          onClick={onDiscoverMoreClick} // 👈 Call the scroll function
        >
          DISCOVER MORE <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;