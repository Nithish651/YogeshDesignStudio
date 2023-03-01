import "./App.css";
import { useRef, useEffect, useState } from "react";
import { Power3, gsap } from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  gsap.registerPlugin(CSSPlugin);

  const [showHome, setShowhome] = useState(false);
  useEffect(() => {
    let tl = gsap.timeline();
    let duration = 3;
    let bannerAnimation = {
      duration: duration,
      transform: "scale(1.5, 1.5)",
      opacity: 0,
      y: -50,
      ease: Power3.easeOut,
    };
    tl.to(banner, bannerAnimation)
      .call(removeElement(banner, duration * 1000))
      .call(() => {
        document.getElementById("root").style.overflow = "initial";
        setShowhome(true);
      });
  }, []);

  let banner = useRef(null);

  const removeElement = (element, time) => {
    console.log(element);
    setTimeout(() => element.remove(), time);
  };

  return (
    <>
      {
        <div
          ref={(el) => {
            banner = el;
          }}
          className="banner"
        ></div>
      }

      {showHome ? <Navbar /> : null}
      <Outlet />
    </>
  );
}

export default App;
