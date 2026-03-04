import {
  FC, useEffect, useCallback, useState, useRef,
} from 'react';
import { createPortal } from 'react-dom';

const Lightbox: FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  const [visible, setVisible] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    closeRef.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'Tab') {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
      style={{
        padding: 'max(16px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left))',
        backgroundColor: visible ? 'rgba(25, 25, 24, 0.92)' : 'rgba(25, 25, 24, 0)',
        transition: 'background-color 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt ? `Full size image: ${alt}` : 'Full size image'}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 text-white/70 hover:text-white active:text-white transition-colors duration-200 p-3"
        aria-label="Close image viewer"
        style={{ marginTop: 'env(safe-area-inset-top)', marginRight: 'env(safe-area-inset-right)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain cursor-default select-none rounded"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
        draggable={false}
      />
      {alt && (
        <div
          className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm text-center max-w-lg px-4"
          aria-hidden="true"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 100ms',
            marginBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {alt}
        </div>
      )}
    </div>,
    document.body,
  );
};

export default Lightbox;
