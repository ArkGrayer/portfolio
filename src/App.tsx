import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./Header";
import { Hero } from "./domains/Hero/Hero";
import { Works } from "./domains/Works/Works";
import { About } from "./domains/About/About";
import { Contact } from "./domains/Contact/Contact";
import { Footer } from "./domains/Contact/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(".screen-load", {
        duration: 1,
        opacity: 0,
        delay: 2.5,
        filter: "blur(10px)",
        ease: "power4.out",
        onComplete: () => {
          gsap.set(".screen-load", { display: "none" });
        },
      })
        .fromTo(
          ".bg-hero",
          { y: 50, opacity: 0 },
          { duration: 2, y: 0, opacity: 1, ease: "power2.out" },
          "-=1.5",
        )
        .fromTo(
          ".menu-1",
          { y: 200, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.out" },
          "-=0.8",
        )
        .fromTo(
          ".menu-2",
          { y: 200, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".menu-3",
          { y: 200, opacity: 0 },
          { duration: 1.3, y: 0, opacity: 1, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          ".menu-4",
          { y: 200, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.out" },
          "-=1.2",
        )
        .fromTo(
          ".menu-5",
          { y: 200, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.out" },
          "-=1.0",
        )
        .fromTo(
          ".container-item > div",
          { y: 600, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, stagger: 0.2, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          ".container-item img",
          { y: 700, opacity: 0 },
          { duration: 1, y: 0, opacity: 1, ease: "power2.out" },
          "-=1.9",
        );
    },
    { scope: appRef },
  );

  return (
    <div ref={appRef}>
      {/* Tela de Loading */}
      <section className="sec-load screen-load flex-center flex-column">
        <svg
          viewBox="0 -20 728 1292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="letter-IF1"
            d="M651.857 821.25H120.75V702.75H726.64L651.857 821.25Z"
            fill="url(#paint10_linear)"
            stroke="url(#paint11_linear)"
            strokeWidth="1.5"
          />
          <path
            className="letter-IF2"
            d="M651.857 287.25L120.75 287.25V168.75L726.64 168.75L651.857 287.25Z"
            fill="url(#paint12_linear)"
            stroke="url(#paint13_linear)"
            strokeWidth="1.5"
          />
          <path
            className="letter-IF3"
            d="M119.25 308.277V1291.25H0.75V170.027L119.25 308.277Z"
            fill="url(#paint14_linear)"
            stroke="url(#paint15_linear)"
            strokeWidth="1.5"
          />
          <circle
            className="letter-IF4"
            cx="60"
            cy="60"
            r="59.25"
            fill="url(#paint16_linear)"
            stroke="url(#paint17_linear)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint10_linear"
              x1="728"
              y1="762"
              x2="120"
              y2="762"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent" />
              <stop offset="1" stopColor="#00B2FF" />
            </linearGradient>
            <linearGradient
              id="paint11_linear"
              x1="728"
              y1="762"
              x2="120"
              y2="762"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent" />
              <stop offset="1" stopColor="#00B2FF" />
            </linearGradient>
            <linearGradient
              id="paint12_linear"
              x1="728"
              y1="228"
              x2="120"
              y2="228"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent" />
              <stop offset="1" stopColor="#00B2FF" />
            </linearGradient>
            <linearGradient
              id="paint13_linear"
              x1="728"
              y1="228"
              x2="120"
              y2="228"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="transparent" />
              <stop offset="1" stopColor="#00B2FF" />
            </linearGradient>
            <linearGradient
              id="paint14_linear"
              x1="60"
              y1="168"
              x2="60"
              y2="1292"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint15_linear"
              x1="60"
              y1="168"
              x2="60"
              y2="1292"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint16_linear"
              x1="60"
              y1="-3.62436e-06"
              x2="-43.4286"
              y2="236.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint17_linear"
              x1="60"
              y1="-3.62436e-06"
              x2="-43.4286"
              y2="236.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
