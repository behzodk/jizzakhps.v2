import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [prideOpen, setPrideOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'uz';
  const changeLanguage = (lang: string) => { i18n.changeLanguage(lang); setLangOpen(false); };

  const langFlags: Record<string, string> = {
    uz: '/storage/langs/a18066dc-cc8d-4637-ae0a-2dbf3b01972d430.png',
    en: '/storage/langs/a1806e78-8d10-465f-8cb6-983dc9ae2d61149.png',
  };

  const close = () => setOffcanvasOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWhiteNavbar = !isHome || isScrolled;

  return (
    <>
      <header className={`header ${isWhiteNavbar ? 'header--white' : 'header--transparent'}`} role="banner">
        <div className="header-top">
          <div className="container">
            <div className="header-top-right">
              <a href="tel:+998722215919" target="_blank" rel="noreferrer"><i className="i-phone"></i><span>(+998) 72-221-59-19</span></a>
              <a href="mailto:info@jizzakhps.uz" target="_blank" rel="noreferrer"><i className="i-mail"></i><span>info@jizzakhps.uz</span></a>
            </div>
            <div className="header-top-left">
              <div className="header-top-left-line">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tashkentps_maktabi"><i className="i-instagram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://web.telegram.org/"><i className="i-telegram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="i-facebook"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><i className="i-youtube"></i></a>
              </div>
              <div className="header-top-lang">
                <button className="header-top-lang-toggle" type="button" onClick={() => setLangOpen(!langOpen)}>
                  <img src={langFlags[currentLang]} alt={currentLang} />
                  <span className="header-top-lang-label">{t(`lang.${currentLang}`)}</span>
                  <i className="i-dropdawun"></i>
                </button>
                {langOpen && (
                  <ul className="header-top-lang-menu" role="listbox">
                    <li role="option" onClick={() => changeLanguage('uz')}><img src={langFlags['uz']} alt="uz" /><span>{t('lang.uz')}</span></li>
                    <li role="option" onClick={() => changeLanguage('en')}><img src={langFlags['en']} alt="en" /><span>{t('lang.en')}</span></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <Link className="header-logo" to="/"><img src="/storage/contents/a1741a2e-3230-4480-bdcd-d85f699fc7e9312.svg" alt="Logo" /></Link>

        <div className="header-text">
          <div className="container">
            <button className="header-text-btn" type="button" onClick={() => setOffcanvasOpen(true)}><i className="i-menu"></i></button>
            <div className="header-text-right">
              <div className="header-text-item has-dropdown">
                <span className="header-text-link">{t('nav.about')} <i className="i-dropdawun"></i></span>
                <div className="header-text-dropdown">
                  <div className="header-text-dropdown-item"><Link to="/about" className="header-text-dropdown-link">{t('nav.school')}</Link></div>
                  <div className="header-text-dropdown-item"><Link to="/leadership" className="header-text-dropdown-link">{t('nav.leadership')}</Link></div>
                  <div className="header-text-dropdown-item"><Link to="/staff" className="header-text-dropdown-link">{t('nav.staff')}</Link></div>
                </div>
              </div>
              <div className="header-text-item"><Link to="/education" className="header-text-link">{t('nav.education')}</Link></div>
              <div className="header-text-item"><a href="https://ariza.piima.uz/application/cabinet" target="_blank" rel="noreferrer" className="header-text-link">{t('nav.admission')}</a></div>
              <div className="header-text-item has-dropdown">
                <span className="header-text-link">{t('nav.pride')} <i className="i-dropdawun"></i></span>
                <div className="header-text-dropdown">
                  <div className="header-text-dropdown-item"><Link to="/teachers" className="header-text-dropdown-link">{t('nav.teachers')}</Link></div>
                  <div className="header-text-dropdown-item"><Link to="/pupils" className="header-text-dropdown-link">{t('nav.students')}</Link></div>
                </div>
              </div>
            </div>
            <div className="header-text-left">
              <div className="header-text-item"><Link to="/academic-calendar" className="header-text-link">{t('nav.calendar')}</Link></div>
              <div className="header-text-item has-dropdown">
                <span className="header-text-link">{t('nav.media')} <i className="i-dropdawun"></i></span>
                <div className="header-text-dropdown">
                  <div className="header-text-dropdown-item"><Link to="/gallery" className="header-text-dropdown-link">{t('nav.gallery')}</Link></div>
                  <div className="header-text-dropdown-item"><Link to="/news" className="header-text-dropdown-link">{t('nav.news')}</Link></div>
                </div>
              </div>
              <div className="header-text-item"><Link to="/contacts" className="header-text-link">{t('nav.contacts')}</Link></div>
            </div>
          </div>
        </div>
      </header>

      {langOpen && <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setLangOpen(false)} />}

      {offcanvasOpen && <div className="offcanvas-backdrop" onClick={close} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }} />}
      <div className={`offcanvas offcanvas-start${offcanvasOpen ? ' show' : ''}`} tabIndex={-1} style={{ visibility: offcanvasOpen ? 'visible' : 'hidden', transform: offcanvasOpen ? 'none' : 'translateX(-100%)' }}>
        <div className="offcanvas-header">
          <Link className="offcanvas-header-logo" to="/" onClick={close}>
            <img src="/storage/contents/a1741a2e-3230-4480-bdcd-d85f699fc7e9312.svg" alt="Logo" />
            <span>{t('offcanvas.title')}</span>
          </Link>
          <button type="button" className="btn-close" onClick={close}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="menu">
            <li className="menu-item menu-item--dropdown">
              <span className="menu-link" onClick={() => setAboutOpen(!aboutOpen)} style={{ cursor: 'pointer' }}>{t('nav.about')} <i className="i-dropdown"></i></span>
              {aboutOpen && <ul className="submenu">
                <li className="submenu-item"><Link to="/about" className="submenu-link" onClick={close}>{t('nav.school')}</Link></li>
                <li className="submenu-item"><Link to="/leadership" className="submenu-link" onClick={close}>{t('nav.leadership')}</Link></li>
                <li className="submenu-item"><Link to="/staff" className="submenu-link" onClick={close}>{t('nav.staff')}</Link></li>
              </ul>}
            </li>
            <li className="menu-item"><Link to="/education" className="menu-link" onClick={close}>{t('nav.education')}</Link></li>
            <li className="menu-item"><a href="https://ariza.piima.uz/application/cabinet" target="_blank" rel="noreferrer" className="menu-link">{t('nav.admission')}</a></li>
            <li className="menu-item menu-item--dropdown">
              <span className="menu-link" onClick={() => setPrideOpen(!prideOpen)} style={{ cursor: 'pointer' }}>{t('nav.pride')} <i className="i-dropdown"></i></span>
              {prideOpen && <ul className="submenu">
                <li className="submenu-item"><Link to="/teachers" className="submenu-link" onClick={close}>{t('nav.teachers')}</Link></li>
                <li className="submenu-item"><Link to="/pupils" className="submenu-link" onClick={close}>{t('nav.students')}</Link></li>
              </ul>}
            </li>
            <li className="menu-item"><Link to="/academic-calendar" className="menu-link" onClick={close}>{t('nav.calendar')}</Link></li>
            <li className="menu-item menu-item--dropdown">
              <span className="menu-link" onClick={() => setMediaOpen(!mediaOpen)} style={{ cursor: 'pointer' }}>{t('nav.media')} <i className="i-dropdown"></i></span>
              {mediaOpen && <ul className="submenu">
                <li className="submenu-item"><Link to="/gallery" className="submenu-link" onClick={close}>{t('nav.gallery')}</Link></li>
                <li className="submenu-item"><Link to="/news" className="submenu-link" onClick={close}>{t('nav.news')}</Link></li>
              </ul>}
            </li>
            <li className="menu-item"><Link to="/contacts" className="menu-link" onClick={close}>{t('nav.contacts')}</Link></li>
          </ul>
          <div className="offcanvas-footer">
            <div className="offcanvas-body-icon">
              <a href="https://www.instagram.com/tashkentps_maktabi" target="_blank" rel="noreferrer"><i className="i-instagram"></i></a>
              <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><i className="i-telegram"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="i-facebook"></i></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="i-youtube"></i></a>
            </div>
            <div className="offcanvas-body-link">
              <a href="tel:+998722215919"><i className="i-phone"></i><span>(+998) 72-221-59-19</span></a>
              <a href="mailto:info@jizzakhps.uz"><i className="i-mail"></i><span>info@jizzakhps.uz</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
