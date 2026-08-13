import React, { useState } from 'react';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackIcon?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  fallbackIcon = '🎓',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="animated-img-container"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: style?.width || '100%',
        height: style?.height || '100%',
        background: loaded ? 'transparent' : '#e2e8f0',
        ...style,
      }}
    >
      {/* Skeleton Shimmer */}
      {!loaded && !error && (
        <div className="skeleton-shimmer" />
      )}

      {/* Image */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${className} ${loaded ? 'img-loaded' : 'img-loading'}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: style?.objectFit || 'cover',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(1.03)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            ...style,
          }}
          {...props}
        />
      ) : (
        /* Fallback placeholder */
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1B3A8C 0%, #13748F 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 28,
          }}
        >
          {fallbackIcon}
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;
