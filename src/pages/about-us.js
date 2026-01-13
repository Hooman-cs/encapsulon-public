"use client";
import { useState, useEffect } from "react";
// FIX 1: Removed unused/conflicting 'useRouter' from 'next/router'.
// The 'usePathname' from 'next/navigation' is correctly used below.
import Link from "next/link";

import { ArrowUp } from "lucide-react"; // Arrow Icon
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

import "../components/Aboutnav/soft.css";
import Footer from "../components/Footer/bottom";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // FIX 1: Remove 'router' declaration as it's not needed for active link logic with usePathname.
  // const router = useRouter(); 
  const [showButton, setShowButton] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => pathname === path;
  const isServicesActive = () => ["/custom-formulation", "/branded-products", "/product-catalog"].includes(pathname);
  
  // FIX 4: Add window check for SSR safety, although "use client" helps.
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && typeof window !== 'undefined') { // FIX 4: Add window check
      const offset = 40;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Helper to close mobile menu after clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <div className="background-container2">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link href="/">
              <Image 
                src="/assest/logo12.png" 
                alt="Logo" 
                width={150} 
                height={150} 
                style={{ cursor: "pointer" }} 
                priority={true} // Good practice for LCP element
              />
            </Link>
          </div>
          <ul className="navbar-menu">
            {/* FIX 2: Use 'pathname' / 'isActive' helper instead of 'router.asPath' */}
            <li className={isActive("/") ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={isActive("/about-us") ? "active" : ""}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={isActive("/blog") ? "active" : ""}>
              <Link href="/blog">Blog</Link>
            </li>
            
            <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
              <button
                className={`dropdown-toggle ${isServicesActive() ? "active-dropdown" : ""}`}
                onClick={toggleDropdown}
              >
                Services ▼
              </button>
              <ul className="dropdown-menu">
                <li className={isActive("/custom-formulation") ? "active" : ""}>
                  <Link href="/custom-formulation">Custom-Formulation</Link>
                </li>
                <li className={isActive("/branded-products") ? "active" : ""}>
                  <Link href="/branded-products">Branded-Products</Link>
                </li>
                <li className={isActive("/product-catalog") ? "active" : ""}>
                  <Link href="/product-catalog">Product-Catalog</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-icons">
            <FaSearch className="icon14" />
            <div className="vertical-line"></div>
            <div className="cart-section">
              <FaShoppingCart className="icon1" />
              <span>Cart</span>
              <div className="cart-badge">0</div>
            </div>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <ul>
            {/* FIX 2: Use 'pathname' / 'isActive' helper instead of 'router.pathname' */}
            <li className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>
              <Link href="/">Home</Link>
            </li>
            <li className={isActive("/about-us") ? "active" : ""} onClick={handleLinkClick}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={isActive("/contact") ? "active" : ""} onClick={handleLinkClick}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={isActive("/blog") ? "active" : ""} onClick={handleLinkClick}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
              <button
                className={`dropdown-toggle ${isServicesActive() ? "active-dropdown" : ""}`}
                onClick={toggleDropdown}
              >
                Services ▼
              </button>
              <ul className="dropdown-menu">
                {/* Close menu when clicking sub-link */}
                <li className={isActive("/custom-formulation") ? "active" : ""} onClick={handleLinkClick}>
                  <Link href="/custom-formulation">Custom-Formulation</Link>
                </li>
                <li className={isActive("/branded-products") ? "active" : ""} onClick={handleLinkClick}>
                  <Link href="/branded-products">Branded-Products</Link>
                </li>
                <li className={isActive("/product-catalog") ? "active" : ""} onClick={handleLinkClick}>
                  <Link href="/product-catalog">Product-Catalog</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="hero-content">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="natural-heading">
            About Us & Our Softgel<br /><span>Manufacturing Process</span>
          </motion.h1>
        </div>
      </div>

      {/* Three Column Section */}
      <div className="three-column-section">
        <div className="column">
          <Image src="/assest/WhoWeAre.jpg.webp" alt="Column 1" width={300} height={200} />
          <h3>Who We Are</h3>
          <p>As a USA-based softgel contract manufacturing company, we understand that we provide a service in helping you build long-term success.</p>
          <button onClick={() => scrollToSection("first-description")}>LEARN MORE</button>
        </div>
        <div className="column">
          <Image src="/assest/OurManufacturingPlant.jpg.webp" alt="Column 2" width={300} height={200} />
          <h3>Our Softgel Capsule Manufacturing Plant</h3>
          <p>We offer customers the full-spectrum package of softgel manufacturing—from formulation a GMP-certified facility.</p>
          <button onClick={() => scrollToSection("second-description")}>LEARN MORE</button>
        </div>
        <div className="column">
          <Image src="/assest/CorpConservation.jpg.webp" alt="Column 3" width={300} height={200} />
          <h3>Corporate Conservation</h3>
          <p>Being a conscious business represents one that demonstrates character—it is authentic, transparent, proactive, and has a clear set of values.</p>
          <button onClick={() => scrollToSection("third-description")}>LEARN MORE</button>
        </div>
      </div>

      {/* First Description Section */}
   <div id="first-description" className="first-description">
      {/* Top-Left Title */}
      <h2 className="top-title">Who We Are</h2>

      {/* Content Section: Image Left & Description Right */}
      <div className="main-column">
        <div className="left-column">
          <div className="image-container">
            <Image 
              src="/assest/Manishi-Mehta.jpeg" 
              alt="Manishi Mehta" 
              width={300} 
              height={400}
              className="profile-image"
            />
          </div>
        </div>
        <div className="right-column">
          <div className="content-wrapper">
            <h3 className="section-title">
              About Encapsulon
            </h3>
            <p>
              At Encapsulon, we are passionate about empowering businesses to bring their innovative ideas to life. Founded by <strong>Manishi Mehta</strong> and <strong>Shashi Goyal</strong>, our mission is to deliver high-quality soft gels with speed, flexibility, and smaller minimum order quantities. We understand the challenges of launching new products, and we are here to support startups and growing businesses by providing reliable, efficient, and scalable soft gel solutions.
            </p>
            
            <h3 className="section-title">
              Our Founders Journey
            </h3>
            <p>
              <strong>Manishi Mehta</strong> brings a wealth of experience and a unique perspective to Encapsulon. A mechanical engineering graduate from Thapar Institute of Engineering and Technology in Patiala, India, and an MBA in Information Technology from Schiller International University in Florida, Manishi has built a diverse career spanning over three decades.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bottom-full">
        <p>
          With over 10 years of experience setting up petrochemical plants across India, Thailand, and Indonesia, Manishi developed a strong foundation in operational excellence and project management. He then transitioned to the corporate world, serving as the Global Head of IT Sales for a Fortune 150 company in Melville, USA, for another decade. His expertise in technology and sales strategy has been instrumental in shaping Encapsulons customer-centric approach.
        </p>
      </div>

      <div className="main-column reverse-on-mobile">
        <div className="left-column">
          <div className="content-wrapper">
            <p>
              <strong>Shashi Goyal</strong> brings over 30 years of experience in leadership positions across the Engineering, Information Technology, and Financial Investment Banking industries. In 2002, Shashi founded ITECS, an Information Technology company based in New York, USA, where he currently oversees its operations. Before founding ITECS, he held senior positions with prominent Wall Street investment banking firms in New York, Melbourne, Australia, and India. His business expertise and extensive international exposure has provided him with a deep understanding of international business environments.
            </p>
            <p>
              Shashi possesses a strong business acumen and excels in both leadership and teamwork. His expertise includes excellent management, problem-solving, communication, and interpersonal skills. He also has significant experience in managing a diverse real estate portfolio comprising various asset classes. Shashi holds an MBA from Melbourne, Australia, and a Bachelor of Engineering (B.E.) from India.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="image-container">
            <Image 
              src="/assest/Shashi-Goyal.jpeg" 
              alt="Shashi Goyal" 
              width={300} 
              height={400}
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div className="main-column">
        <div className="left-column">
          <div className="image-container">
            <Image 
              src="/assest/Dr-Sai-Sateesh-Sagiri.jpeg" 
              alt="Dr. Sai Sateesh Sagiri" 
              width={300} 
              height={400}
              className="profile-image"
            />
          </div>
        </div>
        <div className="right-column">
          <div className="content-wrapper">
            <h3 className="section-title">Our Principal Formulation Scientist</h3>
            <p>
              <strong>Dr. Sai Sateesh Sagiri, Ph.D</strong> is a highly driven researcher with proven expertise in designing and developing advanced nanocarrier systems using small molecules, lipids, and biopolymers. Currently serving as a formulator and plant operations manager, he previously held the role of Senior Scientist in India, where he led the development of vegetable oil–encapsulated soft gels, essential oil–based nanoemulsions (NEs), and biopolymer-based powdered nutraceuticals.
            </p>
            <p>
              His industry experience is reinforced by postdoctoral research positions at the Agricultural Research Organization (Israel) and The City College of New York (USA). There, he focused on oleocolloid-based concentrated NEs for nutraceutical delivery and formulated gels and emulsions for controlled release using small molecules.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bottom-full">
        <p>
          Dr. Sagiri earned his Ph.D. from the National Institute of Technology Rourkela, India, where his research centered on developing controlled delivery systems using oleogels, alginate microparticles, and chitosan nanoparticles. A dedicated and results-oriented scientist, he has authored <strong>52 peer-reviewed research articles and 10 book chapters</strong> in reputed international publications.
        </p>
        
        <h3 className="section-title">Our Commitment</h3>
        
        <p>
          At Encapsulon, we believe that every great product starts with a great partnership. Whether your a startup or an established brand, we are here to provide the support, flexibility, and quality you need to succeed. Our streamlined processes, combined with Manishis vision and expertise, ensure that your products are delivered on time, every time.
        </p>
        
        <p>
          Join us on our mission to redefine the soft gel industry—one soft gel at a time.
        </p>
      </div>
    </div>

      {/* Second Description Section */}
      <div id="second-description" className="second-description">
        {/* Top Title and Description */}
        <div className="section">
          <h2 className="title">Our Solvent-Free Manufacturing Plant</h2>
          <p className="description">
            All of the premium supplements manufactured by us are produced on-site in a world-class facility. We have set the “gold standard” when it comes to the manufacturing of soft gelatin capsules. Each batch is manufactured according to **current Good Manufacturing Practices (GMPs)** for dietary supplements. Quality is constantly monitored during every step of the manufacturing process to achieve the highest level of technical excellence in softgel production.
          </p>
          <br/>
          <p className="description">
            We have invested millions of dollars to purchase precision, state-of-the-art blending, and encapsulation equipment, which enable us to consistently manufacture the finest softgels for our customers. The encapsulation and inspection processes occur in temperature-controlled areas. We have automated many of the inspection and packaging processes with precision equipment designed to **FDA 21 CFR (Code of Federal Regulations) Part 111** requirements, which helps increase throughput. We embrace corporate transparency through our meticulous quality assurance procedures and comprehensive QC testing.
          </p>
          <br/>
          <p className="description">
            Softgel production is a very unique and complicated process; not every manufacturer can do it. While softgels can be difficult to manufacture because water-soluble/hydrophilic materials are not easily encapsulated and the operators who run the encapsulation machine have to be well-trained and competent to learn the techniques for smooth and efficient operation, we have innovated ways to overcome these challenges. We specialize and thrive in encapsulating formulas that others thought weren’t possible in softgels. We have a production team who, with high precision and constant oversight, monitors and controls the gelatin temperature, ribbon thickness, seam width, and fill quantity during manufacturing.
          </p>
        </div>

        {/* Bottom Title and Description */}
        <div className="section">
          <h3 className="title">In-House Analytical Laboratory</h3>
          <p className="description">
            One of our strongest company attributes is our well-equipped, state-of-the-art, chemical analytical laboratory and the staff who run it. Highly-trained chemists and technicians create an environment of product integrity with complete confidentiality and full compliance with state and federal regulations. All work performed in our lab facility is in accordance with **current Good Laboratory Practices (cGLPs)**. Our sophisticated laboratory instruments exceed industry standards, are subject to annual Operational Qualification/Performance Verification, and are **21 CFR Part 11 compliant**.
          </p>
          <br/>
          <p className="description">
            **Quality Control (QC)** provides testing through all stages of production, from incoming raw material testing and identification, in-process quality checks, and final product testing for potency and quality of the products we manufacture. QC uses state-of-the-art instruments such as:
          </p>
          <br/>
          <p className="description">
            High-Performance Liquid Chromatography (HPLC)
            Gas Chromatography (GC)
            Atomic Absorption (AA)
          </p>
          <br/>
          <p className="description">
            We use **independent third-party testing laboratories** since they offer unbiased analytical testing to support the quality of our products and meet customer requirements. These labs are an extension of our in-house laboratory. We qualify each of our third-party labs by verifying their data is technically sound, **ISO/IEC 17025 accredited**, and **cGMP and GLP compliant**.
          </p>
          <br/>
          <p className="description">
            When you partner with us, we can assist with real-time stability data. We highly encourage our customers to perform regular audits of our facility, where they can look at batch records, raw material certificates of analysis, and ensure that we are doing all of the testing required for GMP compliance.
          </p>
        </div>
      </div>

      {/* Third Description Section */}
      <div id="third-description" className="third-description">
        {/* Top Title */}
        <h2 className="title">Corporate Conservation</h2>

        {/* Main Description */}
        <p className="description">
          We are committed to **sustainability** and practice corporate conservation. Here’s how we’re reducing our environmental footprint:
        </p>

        {/* Short Notes with Black Dots */}
        <ul className="short-notes">
          <li>We are a **solvent-free** facility</li>
          <li>We strive towards **lean manufacturing—zero waste**</li>
          <li>We sell remnant gelatin to scrap gelatin processors for use in adhesives</li>
          <li>We use **energy-efficient LED lighting** and motion sensors in our facility</li>
          <li>We utilize **earth-friendly cleaning products**</li>
        </ul>

        {/* Bottom Description */}
        <p className="description">
          We have incorporated a **260-kilowatt co-generation machine** that generates electricity using natural gas. When the power is generated, heat is produced and can be harnessed for other elements, such as heating water for our boiler. We also have invested in two additional chiller units (45 and 75 tons, respectively) as part of our manufacturing capabilities. This eco-friendly upgrade to our facility supplies us with an uninterrupted source of power, independent of the California Power Grid. By providing **80% of our own power**, we can be considered a reliable and environmentally-conscious supplier.
        </p>
        <br/>
        <ul className="short-notes">
          <li>We reduce air pollution by **recycling the waste heat**.</li>
          <li>We save other pollutant-spewing fossil fuels from being burned.</li>
          <li>We cut **carbon dioxide emissions**, other greenhouse gases, and nitrogen oxides.</li>
        </ul>
        <br/>
        
        <h2 className="title"></h2>
        <p className="description">
          By adopting a strategy of **lean manufacturing** and **green thinking**, we have streamlined our production process and are utilizing our resources more efficiently. We are committed to saving more than just trees. We have reduced the amount of gelatin left over from each manufacturing run and sell the remnants to other industries, so that there is less waste.
        </p>
      </div>
  
      <br/>

      <Footer />
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