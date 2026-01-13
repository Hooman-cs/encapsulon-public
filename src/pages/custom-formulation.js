"use client";
import { useState ,useEffect} from "react";
import { useRouter } from "next/router";// Import useRouter
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "../components/Aboutnav/drop.css";
import { ArrowUp } from "lucide-react"; // Arrow Ico
import Footer from "../components/Footer/bottom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
 

 


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
    <div className="background-container4">
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
           Custom Supplement Formulation
          
        </motion.h1>

      
      </div>
    </div>
   
        
    <div className="content-box">
  <h2 className="title12">Custom Made Supplements Exclusively for You</h2>
  <p className="description12">
  We can take a customer’s concept and deliver a product ready for sale. We are always 
  willing to establish a confidentiality/non-disclosure agreement with our customers. 
  If a customer comes to us with a custom softgel formula, we create a turnkey product 
  for them that is manufactured
   exclusively for them. 
  </p>
  <br/>
  <h2 className="title12">How to Get Started With Your Custom Made Supplements</h2>
  <p className="description12">
  With our team of experts, we can easily walk you through the process of your custom formulation supplement, and creating the perfect product. We can discuss the different variables that people often overlook when venturing to
   manufacture a custom formula, including color, dosage, serving size, and desired packaging, to name a few.
  </p>
  <p className="small-heading">
    <span className="number">1.</span>  What is Minimum Order Quantity
  </p>
  <p className="description15">Each product has its own certain requirement and Minimum order Quantity depends on that. Please feel free to talk to us and we will accommodate the success of your innovation
  </p>
     <br/>
     <p className="description15">
     For stock items, products can be ordered by the case. Our case counts 
     are shown in our product list, and range anywhere from 3,000/case to 20,000/case.
      </p>
      <br/>
      <p className="small-heading">
    <span className="number">2.</span>  What are your lead times?
  </p>
  <p className="description15">Custom turnkey products may require up to a 4-6 week lead time. This can vary depending on raw material procurement and testing. We not only perform standard analysis on finished softgels such as micro- and active- ingredient testing, but we also do extensive testing on raw materials for identity, potency, and contaminants where applicable,
     to assure ourselves and our customers that the ingredients we use are viable.</p>
     <br/>
     <p className="description15">
     For in-stock items, we can ship immediately as long as it’s in stock and payment terms are situated.
      </p>
      <br/>
      <p className="small-heading">
    <span className="number">3.</span>  Are you able to help with a custom formula?
  </p>
  <p className="description15">Yes, if a customer reviews our product catalog and doesn’t see exactly what they are hoping to launch, we have a great product 
    development group who can assist with something special and unique to that customer.</p>
     <br/>
     <p className="small-heading">
    <span className="number">4.</span>What is the shelf life of your softgels?
  </p>
  <p className="description15">It varies by product to product between 1-2 years
  </p>
     <br/>
     <p className="small-heading">
    <span className="number">5.</span>Do you make Vegetarian Soft gels
  </p>
  <p className="description15">We offer fish gelatin as an alternative to bovine or porcine gelatin.</p>
     <br/>
     <p className="small-heading">
    <span className="number">6.</span>Do you do bottling?
  </p>
  <p className="description15">We can have bottling handled for customers unable to do so themselves.
     Customers need to provide the labels. Minimum orders for bottling generally starts at around 500 bottles 
     (at any softgel count) when referring to in-stock items,
     and depends on bulk case count (we only have full cases bottled).</p>
     <br/>
     <p className="small-heading">
    <span className="number">7.</span> Are you GMP certified
  </p>
  <p className="description15">We maintain Good Manufacturing Practices (GMP)
     certification through NSF’s Dietary Supplement Certification program and 
     the Natural Products Association (NPA)/UL, and have held these certifications
      for many years prior to the emergence of the FDA GMPs. We have also gone an extra 
      step and are certified through NSF’s Athletic Banned Substances program, also known as 
      GMP for Sport™. We feel that maintaining these certifications ensures that all of our
       processes continue to be current with, and exceed,
     standard regulations in the industry.</p>
     <br/>
     <p className="small-heading">
    <span className="number">8.</span>Do you make CBD softgels
  </p>
  <p className="description15">Yes, and there are considerations we need to make when reviewing hemp raw materials, 
    so we request that customers provide the following documentation:</p>
     <br/>
     <p className="description16">
    – Original dried crop testing &lt; 0.3% THC per 2014/2018 Farm Bill
  </p>
  <br/>
  <p className="description16">
  – Product specification
  </p>
  <br/>
  <p className="description16">
  – Certificate of analysis for each batch
    </p>
    <br/>
  <p className="description16">
  – Country of origin/extraction statement
    </p>
    <br/>
  <p className="description16">
  – Allergen statement
    </p>
    <br/>
  <p className="description16">
  – Pesticide statement
    </p>
    <br/>
  <p className="description16">
  – Residual solvents statement
    </p>
    <br/>
  <p className="description16">
  – Proposition 65 statement
    </p>
    <br/>
  <p className="description16">
  – Raw material manufacturing flow chart
    </p>
    <br/>
  <p className="description16">
  – Safety Data Sheet
    </p>
    <br/>
  <p className="description16">
  – Material is not CBD Isolate or distillate of an isolate
    </p>
    <br/>
  <p className="description16">
  – Example of the retail label you plan to use for this product
    </p>
    <br/>
    <p className="small-heading">
    <span className="number">9.</span>Do you do tolling (customer provides the material to be encapsulated)?
  </p>
  <p className="description15">Several of our customers use our product catalog as a starting point for creating unique formulas that differentiate them from their competitors. We have a strong network of ingredient suppliers, which enables us to offer faster turnaround times for formulation quotes and finished goods, and can often help us to obtain better pricing for our customers. By having 
    us do the work, the customer can focus on branding and marketing the new product.</p>
     <br/>
     <p className="description15">When you partner with us, you’ll find that effective communication is a big factor in developing a successful working relationship with our customers. A great deal of time is spent understanding what key factors are most important to a prospective customer. We have a skilled and experienced staff, 
      which promotes a better understanding of a customer’s expectations.</p>
     <br/>
     
   
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
