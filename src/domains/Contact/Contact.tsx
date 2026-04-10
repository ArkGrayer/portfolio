import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaFilePdf,
  FaLinkedin,
} from "react-icons/fa";
import { useI18n } from "../../i18n/I18nContext";
import "./Contact.scss";
import resumePdfEn from "../../assets/docs/igor-feitosa-en.pdf";
import resumePdfPtBR from "../../assets/docs/igor-feitosa-ptBR.pdf";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const container = useRef<HTMLElement>(null);
  const { locale, t } = useI18n();
  const resumePdf = locale === "ptBR" ? resumePdfPtBR : resumePdfEn;

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // ScrollTriggers Responsivos
      mm.add("(min-width: 960px)", () => {
        gsap.from(".sect.hidden > div", {
          duration: 1,
          y: 300,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: container.current },
        });
        gsap.from("#section-05 .row > div", {
          duration: 1,
          y: 200,
          opacity: 0,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#section-05",
            start: "top 80%",
            end: "bottom 0%",
          },
        });
      });

      mm.add("(max-width: 959px)", () => {
        gsap.from(".sect.hidden > div", {
          duration: 1,
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
        gsap.from("#section-05 .row > div", {
          duration: 1,
          y: 200,
          opacity: 0,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#section-05",
            start: "top 80%",
            end: "bottom 0%",
          },
        });
      });

      // Efeito Typewriter (Substituindo o antigo TextPlugin/SteppedEase)
      const tl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 3.5,
        yoyo: true,
      });

      tl2.fromTo(
        ".sect-anim",
        {
          borderRightColor: "rgba(45, 199, 237, 1)",
          width: "0",
        },
        {
          duration: 4,
          borderRightColor: "rgba(255,255,255,0)",
          width: "18.4em",
          ease: "steps(37)", // Nova sintaxe de passos contínuos do GSAP 3
        },
        0,
      );
    },
    { scope: container },
  );

  return (
    <section id="section-04" className="contact-section" ref={container}>
      <div className="sect hidden">
        <div className="grid-2 my-8 relative">
          <div>
            <h5>{t.contact_subtitle}</h5>
          </div>
          <div>
            <h2 className="mt-1 pl-3">{t.contact_title}</h2>
          </div>
          <div
            id="contact-anim"
            className="mt-8 text-center color-blue sect-anim"
          >
            igorfeitosa.contact@gmail.com
          </div>
        </div>
      </div>

      <div className="bb-gray"></div>

      <div className="sect" id="section-05">
        <div className="row">
          <div className="grid-3 flex-start-row">
            <a
              href="https://www.instagram.com/ark.grayer/"
              className="link social-link"
              target="_blank"
            >
              <FaInstagram className="icon" />
              Instagram
            </a>
          </div>
          <div className="grid-3 flex-start-row">
            <a
              href="https://github.com/ArkGrayer"
              className="link social-link"
              target="_blank"
            >
              <FaGithub className="icon" />
              GitHub
            </a>
          </div>
          <div className="grid-3 flex-start-row">
            <a
              href="https://discord.gg/DjDzSGzXXF"
              className="link social-link"
              target="_blank"
            >
              <FaDiscord className="icon" />
              Discord
            </a>
          </div>
          <div className="grid-3 flex-start-row">
            <a
              href="mailto:igorfeitosa.contact@gmail.com"
              className="link social-link"
            >
              <FaEnvelope className="icon" />
              Email
            </a>
          </div>
          <div className="grid-3 flex-start-row">
            <a href={resumePdf} className="link social-link" target="_blank">
              <FaFilePdf className="icon" />
              {t.contact_resume}
            </a>
          </div>
          <div className="grid-3 flex-start-row">
            <a
              href="https://www.linkedin.com/in/igor-feitosa/?locale=en_US"
              className="link social-link"
              target="_blank"
            >
              <FaLinkedin className="icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="bb-gray"></div>
    </section>
  );
};
