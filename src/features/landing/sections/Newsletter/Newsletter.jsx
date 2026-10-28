import { useState } from 'react';
import { motion } from 'motion/react';
import Button from '../../../../shared/ui/Button';
import { scrollRevealProps } from '../../../../shared/animations/scrollReveal';
import { legalLinks } from '../../data/content';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // TODO backend: el boletín aún no guarda correos; cuando exista el servicio, enviar aquí el correo.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
  };

  return (
    <section className="news container">
      <motion.div className="news__card" {...scrollRevealProps}>
        <img className="news__icon" src="/images/image.png" alt="" aria-hidden="true" />
        <div className="news__body">
          <h2>Mantente al día con Univoz<span>.</span></h2>
          <p>Suscríbete a nuestro boletín y recibe novedades, consejos sobre inclusión y algunas futuras actualizaciones de la plataforma</p>
          <form className="news__form" onSubmit={handleSubmit}>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" aria-label="Correo electrónico" />
            <Button as="button" variant="primary" type="submit">Suscribirme</Button>
          </form>
          <small role="status">{sent ? 'Gracias por tu interés. El boletín abrirá pronto; por ahora no guardamos tu correo.' : <>Usaremos tu correo solo para enviarte el boletín y podrás darte de baja cuando quieras. No lo compartimos con terceros con fines comerciales. Lee nuestro <a href={legalLinks.privacy}><b><i>Aviso de privacidad</i></b></a>.</>}</small>
        </div>
      </motion.div>
    </section>
  );
}
