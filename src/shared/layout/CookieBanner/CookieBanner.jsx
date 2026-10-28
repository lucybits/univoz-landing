import { useEffect, useRef, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa6';
import { legalLinks } from '../../../features/landing/data/content';
import './CookieBanner.css';

const consentKey = 'univoz-cookie-consent';
const dismissalKey = 'univoz-cookie-dismissed';

function shouldShowBanner() {
  try {
    return localStorage.getItem(consentKey) !== 'accepted'
      && sessionStorage.getItem(dismissalKey) !== 'dismissed';
  } catch (error) {
    console.error('No se pudo leer la preferencia de cookies:', error);
    return true;
  }
}

export default function CookieBanner() {
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    if (!shouldShowBanner()) return undefined;

    let firstFrameId;
    let secondFrameId;
    const showAfterScroll = () => {
      if (window.scrollY < 120) return;

      window.removeEventListener('scroll', showAfterScroll);
      setRendered(true);
      firstFrameId = window.requestAnimationFrame(() => {
        secondFrameId = window.requestAnimationFrame(() => setVisible(true));
      });
    };

    window.addEventListener('scroll', showAfterScroll, { passive: true });
    showAfterScroll();

    return () => {
      window.removeEventListener('scroll', showAfterScroll);
      if (firstFrameId) window.cancelAnimationFrame(firstFrameId);
      if (secondFrameId) window.cancelAnimationFrame(secondFrameId);
      if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    };
  }, []);

  const choose = (accepted) => {
    try {
      if (accepted) localStorage.setItem(consentKey, 'accepted');
      else sessionStorage.setItem(dismissalKey, 'dismissed');
    } catch (error) {
      console.error('No se pudo guardar la preferencia de cookies:', error);
    }
    setVisible(false);
    closeTimeout.current = window.setTimeout(() => setRendered(false), 480);
  };

  if (!rendered) return null;

  return (
    <aside
      className={`cookie-banner${visible ? ' cookie-banner--visible' : ''}`}
      aria-label="Aviso de cookies"
      role="region"
      aria-hidden={!visible}
    >
      <span className="cookie-banner__icon" aria-hidden="true">
        <FaCookieBite />
      </span>
      <p className="cookie-banner__message">
        Univoz no usa cookies de rastreo ni analítica. Solo guardamos en tu navegador que ya viste este aviso.{' '}
        <a href={legalLinks.cookies} tabIndex={visible ? 0 : -1}>Más información</a>
      </p>
      <button className="cookie-banner__accept" type="button" onClick={() => choose(true)} tabIndex={visible ? 0 : -1}>
        Entendido
      </button>
      <button
        className="cookie-banner__close"
        type="button"
        onClick={() => choose(false)}
        aria-label="Cerrar aviso de cookies"
        tabIndex={visible ? 0 : -1}
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}
