import React from "react";

function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé do site">
      <div className="footer__content">
        <h2 className="footer__title">Fiore Dentro di Me</h2>
        <p className="footer__quote">
          “As flores não pensam em competir com a flor ao lado. Elas apenas
          florescem.”
        </p>
        <nav className="footer__nav" aria-label="Links do rodapé">
          <a href="#about" className="footer__link">
            Home
          </a>
          <a href="#gallery" className="footer__link">
            Gallery
          </a>
          <a href="#contact" className="footer__link">
            Purpose
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__credits">
          © {new Date().getFullYear()} Fiore Dentro di Me — Created by Fernando
          Pereira
        </p>
        <ul className="footer__social" role="list">
          <li>
            <a
              href="https://github.com/pereirafernando13"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/github__footer.png"
                alt="GitHub"
                className="footer__icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pereira.fernando13"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/instagram__footer.png"
                alt="Instagram"
                className="footer__icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
