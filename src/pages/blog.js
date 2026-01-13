"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";// Import useRouter
import Link from "next/link";
import { ArrowUp } from "lucide-react"; // Arrow Icon
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "../components/Aboutnav/blogtext.css";
import Footer from "../components/Footer/bottom";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const [showButton, setShowButton] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <>
    <div className="background-container1">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
        <Link href="/">
        <Image src="/assest/logo12.png" alt="Logo" width={150} height={150} style={{ cursor: "pointer" }} />
      </Link>
        </div>
        <ul className="navbar-menu">
        <li className={router.asPath === "/" ? "active" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={router.asPath === "/about-us" ? "active" : ""}>
        <Link href="/about-us">About Us</Link>
      </li>
      <li className={router.asPath === "/contact" ? "active" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
     
      <li className={router.asPath === "/blog" ? "active" : ""}>
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
        <li className={router.pathname === "/" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname === "/about-us" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={router.pathname === "/contact" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/contact">Contact</Link>
          </li>
         
          <li className={router.pathname === "/blog" ? "active" : ""} onClick={toggleMenu}>
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
        

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="natural-heading"
        >
           Blog
          
        </motion.h1>

      
      </div>
    </div>
    <div className="content-container">
  <div className="image-section">
    <Image src="/assest/iStock-1331872350-320x202.jpg" alt="Image" width={150} height={150}/>
  </div>
  <div className="text-section">
    <h2 className="title">the Best Supplement Manufacturer</h2>
    <div className="date-time">March 4, 2025 • 12:00 PM</div>
    <p className="description">
    When you have dedicated yourself to improving your clients’ health and lives through 
    dietary supplements, you want to ensure that you choose the best supplement manufacturers. 
    But what separates one from another as the best in the industry?
     We’ve put together eight key elements to outline how to find a supplement manufacturer.
     <br/>
     Often, a manufacturer’s length of experience goes hand-in-hand with knowledge of the 
     process and regulatory requirements. But don’t confine yourself to using the company 
     that has been in business the longest. New, up-and-coming
      manufacturers have the potential to bring new technology and techniques to the trade.
    </p>
    
  </div>
</div>

<div className="content-container">
  <div className="image-section">
    <Image src="/assest/lutein-brain.jpg" alt="Image" width={150} height={150}/>
  </div>
  <div className="text-section">
    <h2 className="title">Lutein, Astaxanthin, Zeaxanthin: Their Potential for Significant Brain & Eye Health Benefits</h2>
    <div className="date-time">March 15, 2025 • 5:00 PM</div>
    <p className="description">
    Maintaining your brain and eye health is crucial to your quality of life. Even though we think of them independently, the
     brain and eyes share sophisticated connections—both physiologically and in their care. 
     <br/>
     Recent studies reveal an elaborate interplay between these organs, revealing
      that a holistic approach to treating their health may also share unified characteristics.
      <br/>
      In this article, we discuss these brain-eye connections and how supplements for the eyes and brain, such as lutein, 
      astaxanthin, and zeaxanthin, appear to provide profound health benefits for both.
      <br/>
      For example, we find a connection between age-related neurodegenerative diseases like Alzheimer’s 
      and Parkinson’s disease affecting brain function and ocular performance. People with these
       conditions often experience 
      changes to their vision caused by oxidative stress and inflammation affecting both organs.
    </p>
    
  </div>
</div>

<div className="content-container">
  <div className="image-section">
    <Image src="/assest/Office-Shot.jpg" alt="Image" width={150} height={150}/>
  </div>
  <div className="text-section">
    <h2 className="title">Wholefoods Magazine Company Profile</h2>
    <div className="date-time">March 27, 2025 • 8:00 PM</div>
    <p className="description">
    Customer care shapes every department; it is of utmost importance for our customers to receive prompt and courteous service. We take the guesswork and liability out of the GMP responsibility equation by ensuring that our softgels contain the intended ingredients and are absent of contaminants. We embrace corporate transparency through our meticulous quality assurance procedures, comprehensive QC testing, and record keeping/documentation on
     all products for traceability purposes. Delivering custom and branded softgels, naturally.™
     <br/>
     Custom formulation and contract manufacturing • Develop production technologies that maximize a formula’s effectiveness • Accommodate small production runs • Scientific verification, supplier qualification, label claim assurance, and raw material disclosure • Real-time stability testing • Extensive marketing and educational
      support of branded products • Part of a global network of companies with an international sales team
    
    </p>
    
  </div>
</div>

<div className="content-container">
  <div className="image-section">
    <Image src="/assest/Understanding-Soft.jpg" alt="Image" width={150} height={150}/>
  </div>
  <div className="text-section">
    <h2 className="title">Understanding Soft Gel’s Supplement Quality Control Measures</h2>
    <div className="date-time">April 6, 2025 • 3:00 PM</div>
    <p className="description">
    Supplement quality control from white label and private label manufacturers is critical for retailers looking to offer safe and effective supplements for their customers. From the raw materials sourced to final product testing,
     every stage of the manufacturing process impacts the quality of the final product.
     <br/>
     Below, we will examine how supplement quality is determined, what certification processes exist to ensure a high standard in production, and how Soft Gel Technologies 
     exceeds industry expectations to offer the highest quality supplements.
     <br/>
     Regulations generally treat the quality standard as an examination before, during, and after production, ensuring quality products enter production, compliant manufacturing conditions are maintained, and the end result matches the claims made about 
     the product. This is sufficient but doesn’t guarantee excellence.
    
    </p>
    
  </div>
</div>

<div className="">
<Footer />
    </div>
    {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
