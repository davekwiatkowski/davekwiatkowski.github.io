import {
  FC, useState, useEffect, useCallback, useRef, useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import useMainLinkListData from '../../util/data/useMainLinkListData';
import LoadingSignal from '../common/LoadingSignal';
import FadeIn from '../common/FadeIn';
import Button from '../common/button/Button';

const MobileMenu: FC<{
  links: { title: string; url: string }[];
  onClose: () => void;
}> = ({ links, onClose }) => {
  const [visible, setVisible] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
      closeRef.current?.focus();
    });
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();

      if (e.key === 'Tab') {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleClose]);

  return createPortal(
    <div
      ref={menuRef}
      className="fixed inset-0 z-40"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div
        className="absolute inset-0 bg-BG/95 backdrop-blur-sm"
        onClick={handleClose}
        role="presentation"
      />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-end px-4 py-4 shrink-0">
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-TEXT_DE_EMP hover:text-TEXT transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6 pb-20" aria-label="External links">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="menu-item-enter w-full text-center py-4 text-lg font-HEADING font-semibold text-TEXT hover:text-PRIMARY transition-colors duration-200 border-b border-BORDER"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {link.title}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline-block ml-2 text-TEXT_DE_EMP"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </div>,
    document.body,
  );
};

const MainLinkList: FC = () => {
  const mainLinkListData = useMainLinkListData();
  const [menuOpen, setMenuOpen] = useState(false);

  const sorted = useMemo(
    () => (mainLinkListData ? [...mainLinkListData].sort((a, b) => a.title.localeCompare(b.title)) : []),
    [mainLinkListData],
  );

  if (!mainLinkListData) {
    return <LoadingSignal />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-TEXT_DE_EMP hover:text-TEXT transition-colors duration-200"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {menuOpen && (
        <MobileMenu
          links={sorted}
          onClose={() => setMenuOpen(false)}
        />
      )}

      <nav
        className="hidden md:flex text-sm gap-5 flex-row items-center whitespace-nowrap"
        aria-label="External links"
      >
        {sorted.map((link, index) => (
          <FadeIn
            key={link.title}
            delay={100 + index * 80}
            direction="down"
            distance={12}
            duration={400}
          >
            <Button className="text-sm" hasLinkIcon href={link.url}>
              {link.title}
            </Button>
          </FadeIn>
        ))}
      </nav>
    </>
  );
};

export default MainLinkList;
