import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isMobileMenuOpen ? "header-open" : ""}>
      <div className="bg-header"></div>

      <div className="sticky menu navbar">
        {/* Ícone do menu hambúrguer animado para mobile na ESQUERDA */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="menu-left nav-a">
          <ul className="p-1 menu-hidden">
            <Link
              to="section-01"
              smooth={true}
              duration={800}
              className="link menu-1 nav-a"
            >
              Home
            </Link>
            <Link
              to="section-03"
              smooth={true}
              duration={800}
              className="link menu-2 nav-a"
            >
              About
            </Link>
          </ul>
        </div>

        {/* SVG LOGO - Refatorado para propriedades em camelCase (padrão React) */}
        <section className="screen-adjust menu-logo menu-3">
          <svg
            className="letterIF-logo"
            viewBox="0 -20 728 1292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-logo"
              d="M651.857 821.25H120.75V702.75H726.64L651.857 821.25Z"
              fill="url(#paint20_linear)"
              stroke="url(#paint21_linear)"
              strokeWidth="1.5"
            />
            <path
              className="stroke-logo"
              d="M651.857 287.25L120.75 287.25V168.75L726.64 168.75L651.857 287.25Z"
              fill="url(#paint22_linear)"
              stroke="url(#paint23_linear)"
              strokeWidth="1.5"
            />
            <path
              className="stroke-logo"
              d="M119.25 308.277V1291.25H0.75V170.027L119.25 308.277Z"
              fill="url(#paint24_linear)"
              stroke="url(#paint25_linear)"
              strokeWidth="1.5"
            />
            <circle
              className="stroke-logo"
              cx="60"
              cy="60"
              r="59.25"
              fill="url(#paint26_linear)"
              stroke="url(#paint27_linear)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                id="paint20_linear"
                x1="728"
                y1="762"
                x2="120"
                y2="762"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopColor="#00B2FF" />
              </linearGradient>
              <linearGradient
                id="paint21_linear"
                x1="728"
                y1="762"
                x2="120"
                y2="762"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopColor="#00B2FF" />
              </linearGradient>
              <linearGradient
                id="paint22_linear"
                x1="728"
                y1="228"
                x2="120"
                y2="228"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopColor="#00B2FF" />
              </linearGradient>
              <linearGradient
                id="paint23_linear"
                x1="728"
                y1="228"
                x2="120"
                y2="228"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopColor="#00B2FF" />
              </linearGradient>
              <linearGradient
                id="paint24_linear"
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
                id="paint25_linear"
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
                id="paint26_linear"
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
                id="paint27_linear"
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

        <div className="menu-right">
          <ul className="p-1 menu-hidden">
            <Link
              to="section-02"
              smooth={true}
              duration={800}
              className="link menu-4 nav-a"
            >
              Works
            </Link>
            <Link
              to="section-04"
              smooth={true}
              duration={800}
              className="link menu-5 nav-a"
            >
              Get In Touch
            </Link>
          </ul>
        </div>
      </div>

      {/* Painel lateral esquerdo do menu mobile */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          <Link
            to="section-01"
            smooth={true}
            duration={800}
            className="mobile-link"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="section-03"
            smooth={true}
            duration={800}
            className="mobile-link"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="section-02"
            smooth={true}
            duration={800}
            className="mobile-link"
            onClick={toggleMenu}
          >
            Works
          </Link>
          <Link
            to="section-04"
            smooth={true}
            duration={800}
            className="mobile-link"
            onClick={toggleMenu}
          >
            Get In Touch
          </Link>
        </ul>
      </div>
    </header>
  );
};
