import {
  FC, useCallback, useState,
} from 'react';
import Lightbox from './Lightbox';

const Image: FC<{
  src: string,
  alt: string,
  className?: string,
  onImageLoad?: () => void;
  disableLightbox?: boolean;
}> = ({
  src,
  alt,
  className = '',
  onImageLoad,
  disableLightbox = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
    onImageLoad?.();
  }, [onImageLoad]);

  return (
    <>
      <img
        src={src}
        onLoad={onLoad}
        alt={alt}
        role={disableLightbox ? undefined : 'button'}
        tabIndex={disableLightbox ? undefined : 0}
        aria-label={disableLightbox ? undefined : `View full size: ${alt || 'image'}`}
        onClick={disableLightbox ? undefined : () => setLightboxOpen(true)}
        onKeyDown={disableLightbox ? undefined : (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLightboxOpen(true);
          }
        }}
        className={`
          transition-opacity duration-500 ease-out
          ${loaded ? 'opacity-100' : 'opacity-0'}
          ${!disableLightbox ? 'cursor-zoom-in' : ''}
          ${className}
        `}
      />
      {lightboxOpen && (
        <Lightbox
          src={src}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default Image;
