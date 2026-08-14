import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  title: string;
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs-wrapper">
          <div className="breadcrumbs-wrapper-list">
            <Link to="/" className="breadcrumbs-wrapper-list-link">
              <i className="i-home"></i>
            </Link>
            {items && items.length > 0 ? (
              items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="breadcrumbs-wrapper-list-link">
                    <i className="i-arrow-left"></i>
                  </span>
                  {item.link ? (
                    <Link to={item.link} className="breadcrumbs-wrapper-list-link">
                      {item.label}
                    </Link>
                  ) : (
                    <p className="breadcrumbs-wrapper-list-link">{item.label}</p>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <span className="breadcrumbs-wrapper-list-link">
                  <i className="i-arrow-left"></i>
                </span>
                <p className="breadcrumbs-wrapper-list-link">{title}</p>
              </>
            )}
          </div>
          <h1 className="breadcrumbs-wrapper-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
