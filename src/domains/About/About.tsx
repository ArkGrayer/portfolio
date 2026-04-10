import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img01 from "../../assets/img/01.jpg";
import img02 from "../../assets/img/02.jpg";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 960px)", () => {
        gsap.from(".grid-5", {
          duration: 2,
          y: 300,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: container.current },
        });
      });

      mm.add("(max-width: 959px)", () => {
        gsap.from(".grid-5", {
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
    <section id="section-03" className="aboutme about-section" ref={container}>
      <div className="grid-5 pr-3">
        <div>
          <h5>About Me</h5>
        </div>
        <div>
          <h2 className="mt-1 pl-2">Igor Feitosa</h2>
        </div>
        <div>
          <p className="mt-3 pl-4 p-1 pp">
            Software Engineer with a focus on game development in Unity. I spend
            my time working in C#, specializing in multiplayer architecture and
            exploring real-time VFX.
            <br />
            <br />
            Programmer with a background in technical support, a past life that
            taught me how to diagnose and solve complex, user-facing issues. I
            still enjoy the objective pleasures of building clean, scalable code
            and seeing systems come to life.
          </p>
        </div>
      </div>

      <div className="grid-5 flex-center">
        <div className="row hidden relative grid-photos">
          <div className="blur1"></div>
          <div className="grid-nobreak-6 grid-photo-1">
            <img src={img01} className="photo my-1 px-1" alt="" />
            <img src={img02} className="photo my-1 px-1" alt="" />
          </div>
          <div className="blur2"></div>
        </div>
      </div>
    </section>
  );
};
