import React from 'react';
import { useTranslation } from 'react-i18next';
import type { CertificateRecord } from '../data/certificates';

interface CertificateModalProps {
  cert: CertificateRecord | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const { t } = useTranslation();

  if (!cert) return null;

  const isSat = cert.testType === 'SAT';

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label={t('results_page.close')}>
          &times;
        </button>

        <div className="cert-modal-header">
          <div className="cert-modal-badge-row">
            <span className="cert-badge-verified">
              <span className="cert-dot"></span> {t('results_page.verified_result')}
            </span>
            <span className={`cert-badge-type ${isSat ? 'cert-badge-type--sat' : 'cert-badge-type--ielts'}`}>
              {cert.testType}
            </span>
          </div>
          <h2 className="cert-modal-student-name">{cert.name}</h2>
          <p className="cert-modal-student-sub">{t('results_page.student_subtitle')}</p>
        </div>

        <div className="cert-modal-score-card">
          <div className="cert-modal-score-main">
            <span className="cert-modal-score-label">{t('results_page.score_label')}</span>
            <span className="cert-modal-score-val">{cert.score}</span>
            {cert.cefr && <span className="cert-modal-cefr-badge">{cert.cefr} Level</span>}
          </div>
        </div>

        <div className="cert-modal-details">
          <h3 className="cert-modal-section-title">{t('results_page.modal_title')}</h3>

          <div className="cert-modal-grid">
            <div className="cert-modal-detail-item">
              <span className="cert-modal-detail-label">{t('results_page.academic_year')}</span>
              <span className="cert-modal-detail-value">{cert.academicYear}</span>
            </div>

            {isSat ? (
              <>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.math')}</span>
                  <span className="cert-modal-detail-value cert-modal-detail-value--highlight">
                    {cert.subscores.math || '—'} / 800
                  </span>
                </div>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.ebrw')}</span>
                  <span className="cert-modal-detail-value cert-modal-detail-value--highlight">
                    {cert.subscores.ebrw || '—'} / 800
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.listening')}</span>
                  <span className="cert-modal-detail-value">{cert.subscores.listening || cert.score}</span>
                </div>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.reading')}</span>
                  <span className="cert-modal-detail-value">{cert.subscores.reading || cert.score}</span>
                </div>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.writing')}</span>
                  <span className="cert-modal-detail-value">{cert.subscores.writing || (cert.score > 6 ? cert.score - 0.5 : cert.score)}</span>
                </div>
                <div className="cert-modal-detail-item">
                  <span className="cert-modal-detail-label">{t('results_page.speaking')}</span>
                  <span className="cert-modal-detail-value">{cert.subscores.speaking || cert.score}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="cert-modal-footer">
          <button className="cert-modal-btn" onClick={onClose}>
            {t('results_page.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
