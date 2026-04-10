import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgPortfolio from "../../assets/img/portfolio.png";
import imgAura from "../../assets/img/aura-project.jpg";
import "./Works.scss";

gsap.registerPlugin(ScrollTrigger);

export const Works = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 960px)", () => {
        gsap.from(".list-item, .bb-gray", {
          duration: 2,
          y: 300,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: container.current },
        });
      });

      mm.add("(max-width: 959px)", () => {
        gsap.from(".list-item, .bb-gray", {
          duration: 2,
          y: 300,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "bottom 0%",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section id="section-02" className="list works-section" ref={container}>
      <div className="list-item">
        <h2 className="work-h2">Selected Works</h2>
      </div>

      <div className="bb-gray"></div>

      <div className="list-item py-6">
        <h5 className="color-gray mr-1">01.</h5>
        <a href="" target="_blank">
          <h3>Portfolio</h3>
        </a>
        <img src={imgPortfolio} className="img-project" alt="Portfolio" />
      </div>

      <div className="bb-gray"></div>

      <div className="list-item py-6">
        <h5 className="color-gray mr-1">02.</h5>
        <a href="https://github.com/ArkGrayer/Aura" target="_blank">
          <h3>Aura Project</h3>
        </a>
        <img src={imgAura} className="img-project" alt="Aura Project" />
      </div>

      <div className="bb-gray"></div>
    </section>
  );
};
