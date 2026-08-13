import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs-wrapper">
          <div className="breadcrumbs-wrapper-list">
            <Link to="/" className="breadcrumbs-wrapper-list-link">
              <i className="i-home"></i>
            </Link>
            <span className="breadcrumbs-wrapper-list-link">
              <i className="i-arrow-left"></i>
            </span>
            <p className="breadcrumbs-wrapper-list-link">{title}</p>
          </div>
          <h1 className="breadcrumbs-wrapper-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
