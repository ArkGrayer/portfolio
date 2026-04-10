import { useRef } from "react";
import img01 from "../../assets/img/01.jpg";
import "./Hero.scss";

export const Hero = () => {
  const container = useRef<HTMLElement>(null);

  return (
    <section id="section-01" className="hero-section relative" ref={container}>
      <div className="bg-hero">
        <svg
          className="svg-hero"
          viewBox="0 0 2560 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="bg-hero" clipPath="url(#clip0)">
            <g id="Vector 1115" className="blur-blob-1">
              <path
                d="M2057.98 976.855C1146.98 951.753 866.415 503.508 549.588 516.267C151.315 532.306 225.523 952.751 549.588 1112.95C931.572 1301.78 2675.34 993.867 2057.98 976.855Z"
                fill="url(#paint0_linear)"
                fillOpacity="0.3"
              />
            </g>
            <g id="Vector 1114" className="blur-blob-2">
              <path
                d="M1476.29 573.407C1751.06 662.18 2052.39 873.257 2155.63 865.308C2340.45 851.076 2216.87 362.765 1991.12 224.015C1779.29 93.8176 501.679 169.375 872.949 444.168C1070.47 590.363 1242.46 497.856 1476.29 573.407Z"
                fill="url(#paint1_linear)"
                fillOpacity="0.2"
              />
            </g>
            <path
              className="bg-heroline3"
              id="bg-heroline3"
              d="M1271.41 691.294L1271.13 691.71L1271.41 691.294ZM-197.828 429.949C141.424 349.792 383.448 331.724 603.248 375.432C823.05 419.14 1020.68 524.635 1271.13 691.71L1271.68 690.879C1021.2 523.784 823.442 418.199 603.443 374.451C383.442 330.703 141.257 348.804 -198.058 428.976L-197.828 429.949ZM1271.13 691.71C1692.74 972.966 2151.67 1044.85 2664.28 939.971L2664.08 938.991C2151.69 1043.83 1693.05 971.969 1271.68 690.879L1271.13 691.71Z"
              fill="url(#paint2_linear)"
            />
            <path
              className="bg-heroline2"
              id="bg-heroline2"
              d="M1280.46 674.69L1280.38 675.183L1280.38 675.183L1280.46 674.69ZM-167.013 1037.71C109.696 825.695 323.115 710.133 541.546 660.032C759.979 609.929 983.476 625.276 1280.38 675.183L1280.54 674.197C983.607 624.284 759.952 608.91 541.322 659.057C322.691 709.204 109.139 824.862 -167.622 1036.91L-167.013 1037.71ZM1280.38 675.183C1780.18 759.197 2228.31 636.915 2653.07 331.374L2652.49 330.562C2227.92 635.966 1780.05 758.161 1280.54 674.197L1280.38 675.183Z"
              fill="url(#paint3_linear)"
            />
            <path
              className="bg-heroline1"
              id="bg-heroline1"
              d="M1302.55 760.741L1302.57 761.241L1302.57 761.241L1302.55 760.741ZM-45.1696 1401.53C184.403 1139.2 370.905 983.901 575.204 891.791C779.504 799.68 1001.65 770.741 1302.57 761.241L1302.53 760.241C1001.58 769.743 779.277 798.685 574.793 890.879C370.307 983.074 183.693 1138.5 -45.9221 1400.87L-45.1696 1401.53ZM1302.57 761.241C1809.13 745.248 2224.43 537.162 2580.75 154.002L2580.02 153.321C2223.86 536.31 1808.8 744.258 1302.53 760.241L1302.57 761.241Z"
              fill="url(#paint4_linear)"
            />
            <g id="square1">
              <rect
                x="531.061"
                y="910"
                width="16"
                height="16"
                rx="2"
                transform="rotate(22.2604 531.061 910)"
                fill="url(#paint5_linear)"
              />
            </g>
            <g id="square2">
              <rect
                x="2143.06"
                y="590"
                width="16"
                height="16"
                rx="2"
                transform="rotate(22.2604 2143.06 590)"
                fill="url(#paint6_linear)"
              />
            </g>
            <g id="square3">
              <rect
                x="471.061"
                y="346"
                width="16"
                height="16"
                rx="2"
                transform="rotate(22.2604 471.061 346)"
                fill="url(#paint7_linear)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="2189"
              y1="516"
              x2="1783.9"
              y2="1692.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="952.771"
              y1="1102.83"
              x2="1478.86"
              y2="-246.785"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="2667.88"
              y1="918.717"
              x2="-194.243"
              y2="408.698"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="2647.66"
              y1="310.509"
              x2="-172.442"
              y2="1016.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="2571.34"
              y1="134.612"
              x2="-54.5966"
              y2="1382.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="547.061"
              y1="910"
              x2="531.061"
              y2="926"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="2159.06"
              y1="590"
              x2="2143.06"
              y2="606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="487.061"
              y1="346"
              x2="471.061"
              y2="362"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DC7ED" />
              <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="2560" height="1440" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container hero">
        <div className="container-item border grid-6">
          <div>
            <h5>Hi, i'm</h5>
          </div>
          <div>
            <h1>Igor Feitosa</h1>
          </div>
          <div>
            <h2 className="mask text-right mt-7 animate-hud1">
              Back-End Programmer
            </h2>
          </div>
          <div>
            <h3 className="mask animate-hud2">Game Developer</h3>
          </div>
          <div className="flex-end pr-10">
            <a href="#section-02" className="square">
              WORKS
            </a>
          </div>
        </div>

        <div className="container-item border">
          <img src={img01} className="photo" alt="Igor Feitosa" />
        </div>
      </div>
    </section>
  );
};
