export type Locale = "en" | "ptBR";

export interface Translations {
  // Header / Nav
  nav_home: string;
  nav_about: string;
  nav_works: string;
  nav_contact: string;

  // Hero
  hero_greeting: string;
  hero_role1: string;
  hero_role2: string;
  hero_cta: string;

  // Works
  works_title: string;

  // About
  about_subtitle: string;
  about_bio_p1: string;
  about_bio_p2: string;

  // Contact
  contact_subtitle: string;
  contact_title: string;
  contact_resume: string;

  // Footer
  footer_lang_toggle_title: string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Header / Nav
    nav_home: "Home",
    nav_about: "About",
    nav_works: "Works",
    nav_contact: "Get In Touch",

    // Hero
    hero_greeting: "Hi, i'm",
    hero_role1: "Back-End Programmer",
    hero_role2: "Game Developer",
    hero_cta: "WORKS",

    // Works
    works_title: "Selected Works",

    // About
    about_subtitle: "About Me",
    about_bio_p1:
      "Software Engineer with a focus on game development in Unity. I spend my time working in C#, specializing in multiplayer architecture and exploring real-time VFX.",
    about_bio_p2:
      "Programmer with a background in technical support, a past life that taught me how to diagnose and solve complex, user-facing issues. I still enjoy the objective pleasures of building clean, scalable code and seeing systems come to life.",

    // Contact
    contact_subtitle: "Connect with me!",
    contact_title: "Get in Touch",
    contact_resume: "Resume",

    // Footer
    footer_lang_toggle_title: "Mudar para Português",
  },
  ptBR: {
    // Header / Nav
    nav_home: "Início",
    nav_about: "Sobre",
    nav_works: "Trabalhos",
    nav_contact: "Contato",

    // Hero
    hero_greeting: "Olá, eu sou",
    hero_role1: "Programador Back-End",
    hero_role2: "Desenvolvedor de Jogos",
    hero_cta: "WORKS",

    // Works
    works_title: "Projetos",

    // About
    about_subtitle: "Sobre Mim",
    about_bio_p1:
      "Engenheiro de Software com foco em desenvolvimento de jogos na Unity. Passo meu tempo trabalhando em C#, me especializando em arquitetura multiplayer e explorando VFX em tempo real.",
    about_bio_p2:
      "Programador com experiência em suporte técnico, uma vida passada que me ensinou a diagnosticar e resolver problemas complexos voltados ao usuário. Ainda aprecio o prazer objetivo de construir código limpo e escalável e ver sistemas ganharem vida.",

    // Contact
    contact_subtitle: "Conecte-se comigo!",
    contact_title: "Entre em Contato",
    contact_resume: "Currículo",

    // Footer
    footer_lang_toggle_title: "Switch to English",
  },
};
