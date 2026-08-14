import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer-main">
          <div className="footer-main-right">
            <div className="footer-main-right-text">
              <Link to="/about">{t('footer.about')}</Link>
              <Link to="/education">{t('footer.education')}</Link>
              <Link to="/application">{t('footer.admission')}</Link>
              <Link to="/teachers">{t('footer.pride')}</Link>
            </div>
            <div className="footer-main-right-line"></div>
            <div className="footer-main-right-link">
              <a target="_blank" rel="noreferrer" href="tel:+998722215919"><i className="i-phone"></i><span>(+998) 72-221-59-19</span></a>
              <a target="_blank" rel="noreferrer" href="mailto:info@jizzakhps.uz"><i className="i-mail"></i><span>info@jizzakhps.uz</span></a>
            </div>
          </div>
          <Link className="footer-logo" to="/"><img src="/storage/contents/a1741a2e-3230-4480-bdcd-d85f699fc7e9312.svg" alt="Logo" /></Link>
          <div className="footer-main-left">
            <div className="footer-main-left-text">
              <Link to="/academic-calendar">{t('footer.calendar')}</Link>
              <Link to="/gallery">{t('footer.media')}</Link>
              <Link to="/contacts">{t('footer.contacts')}</Link>
            </div>
            <div className="footer-main-right-line"></div>
            <div className="footer-main-left-link">
              <a href="https://yandex.com/maps/?text=Jizzax" target="_blank" rel="noreferrer">
                <i className="i-location"></i><span>{t('footer.address')}</span>
              </a>
              <div className="footer-main-left-link-icon">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tashkentps_maktabi"><i className="i-instagram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://web.telegram.org/"><i className="i-telegram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="i-facebook"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><i className="i-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-line"></div>
          <div className="footer-bottom-link">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.developer')} <a href="https://dotsoft.uz/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 'bold', textDecoration: 'none' }}>DotSoft</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
