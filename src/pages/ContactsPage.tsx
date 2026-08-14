import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Breadcrumb title={t('contacts_page.title')} />
      <div className="layout">
        <div className="container">
          <div className="contacts">
            <div className="contacts-main">
              <div className="contacts-main-card contacts-main-image1">
                <i className="i-phone"></i>
                <div className="contacts-main-card-link">
                  <p>{t('contacts_page.phone_label')}</p>
                  <h5>(+998) 72-221-59-19</h5>
                </div>
              </div>
              <div className="contacts-main-card contacts-main-image2">
                <i className="i-mail"></i>
                <div className="contacts-main-card-link">
                  <p>{t('contacts_page.email_label')}</p>
                  <h5>info@jizzakhps.uz</h5>
                </div>
              </div>
              <a href="https://yandex.com/maps/?text=Istiqlol+ko'chasi+13,+Jizzax" target="_blank" rel="noreferrer" className="contacts-main-card contacts-main-image3">
                <i className="i-location"></i>
                <div className="contacts-main-card-link">
                  <p>{t('contacts_page.address_label')}</p>
                  <h5>{t('footer.address')}</h5>
                </div>
              </a>
              <div className="contacts-main-card contacts-main-image4">
                <div className="contacts-main-card-link">
                  <p>{t('contacts_page.social_label')}</p>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tashkentps_maktabi"><i className="i-instagram"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://web.telegram.org/"><i className="i-telegram"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="i-facebook"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><i className="i-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="contacts-form">
              <h3>{t('contacts_page.form_title')}</h3>
              <div className="contacts-form-line"></div>
              <form className="contacts-form-wrapper" method="post" action="https://tashkentps.uz/support">
                <div className="contacts-form-wrapper-grid">
                  <label><span>{t('contacts_page.name')}</span><input className="form-control" required type="text" name="data[name]" placeholder={t('contacts_page.enter')} /></label>
                  <label><span>{t('contacts_page.surname')}</span><input className="form-control" required type="text" name="data[surname]" placeholder={t('contacts_page.enter')} /></label>
                  <label><span>{t('contacts_page.phone')}</span><input className="form-control" required type="text" name="data[phone]" placeholder="+998 00-000-00-00" /></label>
                  <label><span>{t('contacts_page.email')}</span><input className="form-control" required type="email" name="data[email]" placeholder={t('contacts_page.enter')} /></label>
                </div>
                <label><span>{t('contacts_page.text')}</span><textarea className="form-control" rows={4} name="data[description]" placeholder={t('contacts_page.enter_text')}></textarea></label>
                <button className="contact-form-wrapper-btn" type="submit">{t('contacts_page.send')} <i className="i-send"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactsPage;
