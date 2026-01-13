"use client";
import { useState ,useEffect} from "react";
import { useRouter } from "next/router";// Import useRouter
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "../components/Aboutnav/bproducts.css";
import { ArrowUp } from "lucide-react"; // Arrow Icon
import Footer from "../components/Footer/bottom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
 

 


  const features = [
    {
      image: "/assest/bp-ez-mega-3.png.webp",
      title: "EZ Mega 3",
      description: "Omega-3 fish oil concentrate. No fishy smell or taste.",
    },
   
    {
      image: "/assest/CoQsolCF.png.webp",
      title: "CoQsol-CF",
      description: "A 100% crystal-free formulation clinically proven to provide superior bioavailability of CoQ10.",
    },
    {
      image: "/assest/CoQHcf.png.webp",
      title: "CoQH-CF",
      description: "A completely solubilized reduced CoQ10 (ubiquinol) formula.",
    },
    {
      image: "/assest/thumb-coq10.png.webp",
      title: "CoQsol",
      description: "Superior absorption CoQ10.",
    },
   
    {
      image: "/assest/thumb-smart-ps.png.webp",
      title: "Smart PS",
      description: "Stable form of phosphatidylserine for maximum brain benefits.",
    },
   
    {
      image: "/assest/thumb-other-porducts.png.webp",
      title: "Femalgen",
      description: "Proprietary blend of pumpkin seed extract and soy germ isoflavones.",
    },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
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

  return (
    <>
    <div className="background-container67">
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
          className="natural-heading1"
        >
           Branded Soft-Gelatin Capsules
          
        </motion.h1>

    
      </div>
    </div>
   
        
    <div className="featureContainer">
      {features.map((feature, index) => (
        <div key={index} className="featureBox">
          <div className="featureImage">
          <Image
  src={feature.image}
  alt={feature.title}
  width={60}
  height={60}
  priority
  unoptimized
/>
          </div>
          <h3 className="featureTitle">{feature.title}</h3>
          <p className="featureDescription">{feature.description}</p>
        </div>
      ))}
    </div>
     <div className="card">
      {/* Title (Top Center) */}
      <h3 className="title66">Providing High Value-Added Products</h3>

     

      {/* Description (Bottom) */}
      <p className="description66">Since our company’s inception, we have built
         a collection of branded products, and we continue to add new types of soft gelatin capsules. 
         The decision to brand a formula is a calculated one. We consider a supplement’s safety and efficacy,
          supporting clinical studies, and points of differentiation before adding it to our portfolio of brands. 
          In addition, we align ourselves with respected raw material suppliers,
         who also invest in their brands and the science supporting their products.</p>
         <br/>
         <p className="description66">
         Our customers can be guaranteed that we promote each of our branded supplements with extensive advertising campaigns, 
         clinical research, educational outreach, and our company’s dedication to its success.
         </p>
         <br/>
        
         
         <p className="description66">
         We are unique in that we have several exclusive branded products that can be used in formulas and customers add synergistic ingredients to make it a custom formula. These branded products usually have scientifically-researched ingredients or intellectual property
          (patent and/or trademark protection) surrounding the ingredients found in the formulas.
         </p>
         <br/>
         <p className="description66">
         Unlike other contract manufacturers who sell their own branded product lines directly to consumers, we only sell B-to-B to further protect our customers.
         </p>
         
         <br/>
        
    </div>

      <div className="footer-main">
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
