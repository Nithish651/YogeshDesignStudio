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
    let tl3 = gsap.timeline();
    let tl4 = gsap.timeline();
    let _duration = 5;
    let master = gsap.timeline();

    function intro() {
      let tl = gsap.timeline();
      tl.from("#demo span", {
        autoAlpha: 0,
        y: 150,
        duration: 1,
        stagger: 0.25,
      });

      return tl;
    }

    function slideLeft() {
      let tl1 = gsap.timeline();
      tl1.to(".first", {
        autoAlpha: 1,
        x: -140,
        y: 0,
      });
      return tl1;
    }

    function slideLeft2() {
      let tl1 = gsap.timeline();
      tl1.to(".second", {
        autoAlpha: 1,
        x: -40,
        y: 0,
      });
      return tl1;
    }

    function slideLeft3() {
      let tl1 = gsap.timeline();
      tl1.to(".third", {
        autoAlpha: 1,
        x: 50,
        y: 0,
      });
      return tl1;
    }

    function slideRight() {
      let tl2 = gsap.timeline();
      tl2.fromTo(
        ".subtext",
        {
          autoAlpha: 0,
          x: -150,
        },
        {
          autoAlpha: 1,
          x: -25,
        }
      );
      return tl2;
    }

    function slideRight2() {
      let tl2 = gsap.timeline();
      tl2.fromTo(
        ".subtext1",
        {
          autoAlpha: 0,
          x: -150,
        },
        {
          autoAlpha: 1,
          x: 6,
        }
      );
      return tl2;
    }

    function slideRight3() {
      let tl2 = gsap.timeline();
      tl2.fromTo(
        ".subtext2",
        {
          autoAlpha: 0,
          x: -150,
        },
        {
          autoAlpha: 1,
          x: 30,
        }
      );
      return tl2;
    }

    // .call(removeElement(banner, duration * 1000))

    master
      .add("start")
      .add(intro(), "start")
      .add(slideLeft(), 2)
      .add(slideLeft2(), 2)
      .add(slideLeft3(), 2)
      .add(slideRight(), 3)
      .add(slideRight2(), 3)
      .add(slideRight3(), 3)
      .call(removeElement(banner, _duration * 1000))
      .call(() => {
        console.log("method 2");
        document.getElementById("root").style.overflow = "initial";
        setTimeout(() => setShowhome(true), 2 * 1000);
      });
  }, []);

  let banner = useRef(null);

  const removeElement = (element, time) => {
    console.log("method 1");
    setTimeout(() => element.remove(), time);
  };

  return (
    <>
      {
        <div
          ref={(el) => {
            banner = el;
          }}
          id="animation"
        >
          <div id="demo">
            <span className="color-1 first">Y</span>
            <span className="color-2 second">D</span>
            <span className="color-3 third">S</span>
          </div>
          <span className="subtext">OGESH</span>
          <span className="subtext1">ESIGN</span>
          <span className="subtext2">TUDIO</span>
        </div>
      }

      {showHome ? <Navbar /> : null}
      <Outlet />
    </>
  );
}

export default App;
