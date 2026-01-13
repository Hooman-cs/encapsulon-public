import React from "react";
import "./putra.css";
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-columns">
        <div className="footer-column12">
          <h3>Company</h3>
          <ul>
           
          <li>
    <Link href="/">Home</Link>
  </li>
  <li>
    <Link href="/about-us">About-Us</Link>
  </li>
  <li>
    <Link href="/contact">Contact</Link>
  </li>
  <li>
    <Link href="/blog">Blog</Link>
  </li>
          </ul>
        </div>
        <div className="footer-column12">
          <div className="middle-fot">
          <h3>Get in touch</h3>
          <div className="contact-details12">
  <p><MapPin size={18} /> 25 Melville Park Road, Suite 225,<br /> Melville, NY 11747</p>
  <p><Phone size={18} /> +1 (516) 476-1115</p>
  <p><Mail size={18} /> contact@encapsulon.com</p>
</div>

         
        
</div>
        </div>
        <div className="footer-column12">
          <h3>Products</h3>
          <ul>
          
  <li>
    <Link href="/custom-formulation">Custom-Formulation</Link>
  </li>
  <li>
    <Link href="/branded-products">Branded-Products</Link>
  </li>
  <li>
    <Link href="/">Information</Link>
  </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom12">
        <p>&copy; 2025. All rights reserved.</p>
        <p>Powered by Encapsulon.</p>
      </div>
    </footer>
  );
};

export default Footer;
