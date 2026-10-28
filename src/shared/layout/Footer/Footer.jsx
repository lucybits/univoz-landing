import { motion } from 'motion/react';
import { FiMail } from 'react-icons/fi';
import { footerColumns, contact, legalLinks } from '../../../features/landing/data/content';
import { scrollRevealProps, staggerVariants, revealVariants } from '../../animations/scrollReveal';
import './Footer.css';

const footerAnchors = {
  Inicio: '#inicio',
  Características: '#caracteristicas',
  '¿Cómo funciona?': '#como-funciona',
  Descargar: '#descargar',
};

const accessibilityPageHref = '/accesibilidad';

export default function Footer({ homeHref = '' }) {
  const footerLink = (label) => {
    if (label === 'Preguntas frecuentes') return '/preguntas-frecuentes';
    if (label === 'Aviso de Privacidad') return legalLinks.privacy;
    if (label === 'Términos y Condiciones') return legalLinks.terms;
    if (label === 'Accesibilidad') return accessibilityPageHref;
    return `${homeHref}${footerAnchors[label] || '#'}`;
  };

  return (
    <footer className="footer" id="contacto">
      <motion.div
        className="container footer__grid"
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealProps.viewport}
        variants={staggerVariants}
      >
        <motion.div className="footer__about" variants={revealVariants}>
          <h2>UNIVOZ</h2>
          <p>Una voz para todos.</p>
          <p className="footer__muted">Plataforma digital inclusiva que mejora la comunicación entre personas con discapacidad y el resto de la población.</p>
        </motion.div>
        {footerColumns.map((col) => (
          <motion.div className="footer__column" key={col.title} variants={revealVariants}>
            <h3>{col.title}</h3>
            <ul>{col.links.map((l) => <li key={l}><a href={footerLink(l)}>{l}</a></li>)}</ul>
          </motion.div>
        ))}
        <motion.div className="footer__contact" variants={revealVariants}>
          <h3>Contacto</h3>
          <p className="footer__mail"><FiMail aria-hidden="true" /> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p className="footer__muted footer__loc">{contact.location}</p>
        </motion.div>
      </motion.div>
      <motion.div className="footer__logo-reveal" aria-hidden="true" {...scrollRevealProps}>
        <img className="footer__logo" src="/images/univoz-logo.svg" alt="" />
      </motion.div>
    </footer>
  );
}
