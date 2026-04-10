<div align="center">
  
  # 👨‍💻 Igor Feitosa | Interactive Portfolio
  
  **Software Engineer & Game Developer**

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  </p>

  <p align="center">
    A highly interactive, hardware-accelerated personal portfolio built with modern web technologies. Focuses on fluid 60FPS animations, real-time SVG rendering, and a clean Domain-Driven Design (DDD) architecture.
  </p>
</div>

---

## ✨ Key Features

- 🚀 **High-Performance Animations**: Powered by **GSAP 3** (`@gsap/react` and `ScrollTrigger`). Features smooth reveal timelines, parallax scrolling, and interactive hover effects.
- 🎨 **Hardware-Accelerated SVGs**: Complex background animations engineered with CSS `will-change` and optimized 2D/3D transforms (`translateZ(0)`) to ensure zero dropped frames on mobile GPUs.
- 📱 **Fully Responsive**: Carefully crafted mobile-first and desktop-optimized layouts. Includes a custom animated Hamburger menu with glassmorphism panels.
- 🏗️ **DDD Architecture**: Component and style structure modeled after Domain-Driven Design principles for supreme maintainability and scalability.
- 💅 **Modern Styling**: Styled with **SCSS (Sass)** utilizing automated mixins, smart loops for utility classes, and custom Neon Glow effects.
- ⚡ **Vite Powered**: Lightning-fast Hot Module Replacement (HMR) and optimized production builds.

---

## 📂 Project Structure

The project follows a clean, decoupled architecture:

```text
src/
 ┣ assets/         # Local images, SVGs, and documents (PDFs)
 ┣ core/           # Globally shared components (Header, Footer)
 ┣ domains/        # Feature-based modules (Hero, Works, About, Contact)
 ┃ ┣ About/
 ┃ ┣ Contact/
 ┃ ┣ Hero/
 ┃ ┗ Works/
 ┣ styles/         # Global SCSS variables, resets, and layout grids
 ┣ App.tsx         # Main application orchestrator & Timeline Controller
 ┗ main.tsx        # React root injector
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ArkGrayer/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit: `http://localhost:5173`

---

## 📦 Building for Production

To generate an optimized, production-ready build, run:

```bash
npm run build
```

The output will be generated in the `dist` folder, ready to be deployed to Vercel, Netlify, or GitHub Pages.

---

## 📫 Connect with Me

I spend my time working in C#, specializing in multiplayer architecture, and exploring real-time VFX. Always open to discussing game development, software architecture, or backend programming.

<a href="www.linkedin.com/in/igorfeitosa" target="_blank">
- <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" width="64"/>
</a>
<br>
<a href="https://www.github.com/ArkGrayer" target="_blank">
- <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub" width="64"/>
</a> <br>
<a href="mailto:igorfeitosa.contact@gmail.com" target="_blank">
- <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" width="64"/>
</a> <br>

---

<div align="center">
  <i>Designed & Built with 🩵 by Igor Feitosa.</i>
</div>
