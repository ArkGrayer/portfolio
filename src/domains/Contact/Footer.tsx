import { FaGlobe } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useI18n } from "../../i18n/I18nContext";
import "./Footer.scss";

export const Footer = () => {
  const { locale, t, toggleLocale } = useI18n();
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 400,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <footer className="foot py-6 footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2021</p>
        </div>
        <div className="footer-center">
          <p>
            <span className="author-name">Igor Feitosa</span>
          </p>
        </div>
        <div className="footer-right">
          <button
            className="footer-lang-toggle"
            onClick={() => {
              toggleLocale();
              scrollToTop();
            }}
            title={t.footer_lang_toggle_title}
            aria-label={ t.footer_lang_toggle_title }
          >
            <FaGlobe className="footer-globe-icon" />
            <span className="footer-lang-label">
              {locale === "en" ? "EN" : "PT-BR"}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
