import { useState } from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import './SocialRail.css';

// Pon la URL de cada red cuando exista; las que no tengan href no se muestran (y sin ninguna, el rail se oculta).
const socials = [
  { name: 'Instagram', Icon: FaInstagram, href: '' }, { name: 'TikTok', Icon: FaTiktok, href: '' },
  { name: 'Facebook', Icon: FaFacebook, href: '' }, { name: 'X', Icon: FaXTwitter, href: '' }, { name: 'YouTube', Icon: FaYoutube, href: '' },
].filter(({ href }) => href);

export default function SocialRail() {
  const [isOpen, setIsOpen] = useState(false);

  if (!socials.length) return null;

  return (
    <aside className={`social-rail${isOpen ? ' social-rail--open' : ''}`}>
      <nav className="social-rail__links" aria-label="Redes sociales" aria-hidden={!isOpen}>
        {socials.map(({ name, Icon, href }) => (
          <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} tabIndex={isOpen ? 0 : -1}><Icon /></a>
        ))}
      </nav>
      <button
        className="social-rail__toggle"
        type="button"
        aria-label={isOpen ? 'Ocultar redes sociales' : 'Mostrar redes sociales'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m14.5 5-7 7 7 7" />
        </svg>
      </button>
    </aside>
  );
}
