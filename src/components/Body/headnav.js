import React, { useEffect, useState } from "react";
import "./hoko.css";
import { useRouter } from "next/navigation";

const Backbody = () => {
  const [scrollDir, setScrollDir] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push('/branded-products');
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let animationTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDir("scrolling-down");
        setScrolling(true);
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("scrolling-up");
        setScrolling(true);
      }

      lastScrollY = currentScrollY;

      // Stop animation if no scrolling for 1 second
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
        setScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className={`containerback ${scrollDir} ${scrolling ? "animate" : ""}`}>
      <h1 className="heading12">
     
      Our Softgel Manufacturing <br />  Capabilities
      </h1>
      <button className="scroll-button12" onClick={handleClick}>
      Explore More
    </button>
    </div>
  );
};

export default Backbody;
