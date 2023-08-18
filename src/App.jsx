import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import { Element } from "react-scroll";
import Motion from "./Motion";
import Work from "./Work";
import About from "./About";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
function App() {
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {

    const overlay = overlayRef.current;
    const text = textRef.current;
    const ourText = new splitType(text, { types: "chars" });
    const chars = ourText.chars;

    const anime = gsap.fromTo(
      chars,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: "power2.in",
      }
    );
    gsap.to(overlay, { y: "-100%" }, 2 );
    
  }, []);
  return (
    <>
      <div className="super-container px-4 pt-4">
          <Header />
          <div className="wrap">
            <Motion />
          </div>
        <Element name="work">
          <Work />
        </Element>
        <Element name="about">
          <About />
        </Element>
      </div>
      <div className="overlay" ref={overlayRef}>
          <div className="overlay-inner">
            <div className="text fs-1" ref={textRef}>
              Frontend
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
