"use client";
import { useState,useEffect  } from "react";
import { useRouter } from "next/router";// Import useRouter
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "../components/Aboutnav/Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone} from "react-icons/fa";
import Google from '../components/map/OfficeLocationMap'
import Footer from "../components/Footer/MainFooter";
import { ArrowUp } from "lucide-react"; // Arrow Icon


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdow
  // const pathname = usePathname();
  const pathname = router.pathname;
  const [showButton, setShowButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
  
    // Try ALL possible parameter combinations
    const payload = {
      // Most common parameter names
      key: 'KFOLT64F99KEMFLSL0TMDLVLLN9ENSHD',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
     // Some APIs use 'mobile'
      message: formData.message,
     // Some APIs use 'comment'
     
     
    };
  
    // Try BOTH content types
    try {
      // Attempt 1: x-www-form-urlencoded
      let response = await fetch('https://jdpcglobal.com/api/save_contact_us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload),
      });
  
      let result = await response.json();
  
      // If first attempt fails, try JSON
      if (result.success !== "1") {
        response = await fetch('https://jdpcglobal.com/api/save_contact_us', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        result = await response.json();
      }
  
      // If still failing, try FormData
      if (result.success !== "1") {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
          formData.append(key, value);
        });
  
        response = await fetch('https://jdpcglobal.com/api/save_contact_us', {
          method: 'POST',
          body: formData,
        });
        result = await response.json();
      }
  
      if (result.success === "1") {
        setMessage('Success! We ll contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setMessage(`Server: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
 


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
    <div className="background-container3">
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
           Contact Us
          
        </motion.h1>

      
      </div>
    </div>
    <div className="contact-container">
      {/* First Column (Form Section) */}
      <div className="contact-form">
      <h2 className="form-title">Get in Touch</h2>
      <p className="form-description">Feel free to contact us for any inquiries.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className="input-field"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Comment"
          className="textarea-field"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>

      {/* Second Column (Contact Info) */}
      <div className="contact-info">
        <div className="info-section">
          <div className="info-header">
            <FaMapMarkerAlt className="icon23" />
            </div>
            <div className="info-header1">
            <h3>Location</h3>
          
          <p>25 Melville Park Road,

Suite 225, Melville, NY 11747</p>
          </div>
        </div>
        <hr />
        
        <div className="info-section">
          <div className="info-header">
            <FaEnvelope className="icon23" />
            </div>
            <div className="info-header1">
            <h3>Email Us</h3>
        
          <p>contact@encapsulon.com</p>
          <p>help@encapsulon.com</p>
          <p>hr@encapsulon.com</p>
          <p>info@encapsulon.com</p>
          <p>support@encapsulon.com</p>
          <p>press@encapsulon.com</p>
         
          <p>shashi.goyal@encapsulon.com</p>
          </div>
        </div>
        <hr />
        
        <div className="info-section">
          <div className="info-header">
            <FaPhone className="icon23" />
            
          </div>
          <div className="info-header1">
          <h3>Call Us</h3>
          <p>+1 (516) 476-1115</p>
          </div>
        </div>
        <hr />
        
       
      </div>
    </div>
    
  <Google />
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
