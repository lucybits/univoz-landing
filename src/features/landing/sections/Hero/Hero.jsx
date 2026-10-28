import { useState } from 'react';
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa6';
import Button from '../../../../shared/ui/Button';
import HeroVisual from './HeroVisual';
import { appRelease, legalLinks } from '../../data/content';
import { revealVariants, staggerVariants, scrollRevealProps } from '../../../../shared/animations/scrollReveal';
import './Hero.css';

export default function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <motion.section
      className="hero container"
      id="inicio"
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealProps.viewport}
      variants={staggerVariants}
    >
      <motion.div className="hero__copy" variants={revealVariants}>
        <h1>
          UNA VOZ{' '}
          <span className="hero__bubble" aria-hidden="true">
            <img src="/images/voice-icon.svg" alt="" />
          </span>
          <br />PARA TODOS<span className="hero__dot">.</span>
        </h1>
        <p className="hero__lead">Univoz es una plataforma digital inclusiva que facilita la comunicación entre personas sordas, ciegas o con discapacidad del habla y el resto de la población.</p>
        <div className="hero__cta" id="descargar">
          <div
            className={`hero__download${downloadOpen ? ' hero__download--open' : ''}`}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setDownloadOpen(false);
            }}
          >
            <Button
              as="button"
              className="hero__download-trigger"
              type="button"
              aria-expanded={downloadOpen}
              aria-controls="hero-download-options"
              onClick={() => setDownloadOpen((open) => !open)}
            >
              Descargar
              <img className="hero__download-badge" src="/images/download-badge.svg" alt="" aria-hidden="true" />
            </Button>
            <small>Versión beta {appRelease.version} para Android</small>
            <div
              id="hero-download-options"
              className="hero__download-options"
              aria-hidden={!downloadOpen}
            >
              <div className="hero__download-options-inner">
                <p className="hero__download-heading">Descarga Univoz</p>
                <div className="hero__download-platforms">
                  {appRelease.apkUrl ? (
                    <a className="hero__download-option" href={appRelease.apkUrl} download aria-label="APK para Android, instalador directo" tabIndex={downloadOpen ? 0 : -1}>
                      <span className="hero__download-platform-icon">
                        <img src="/images/android-icon.png" alt="" />
                      </span>
                      <span className="hero__download-platform-copy">
                        <strong>App para Android</strong>
                        <small>Instalador directo</small>
                      </span>
                      <FaDownload className="hero__download-file-icon" aria-hidden="true" />
                    </a>
                  ) : (
                    <button className="hero__download-option" type="button" disabled aria-label="APK para Android, disponible próximamente">
                      <span className="hero__download-platform-icon">
                        <img src="/images/android-icon.png" alt="" />
                      </span>
                      <span className="hero__download-platform-copy">
                        <strong>App para Android</strong>
                        <small>Próximamente</small>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" href="#caracteristicas">Explorar ahora</Button>
        </div>
        {appRelease.inStores && (
          <>
            <p className="hero__available">Ahora disponible en:</p>
            <div className="hero__stores" aria-label="Plataformas disponibles">
              <img src="/images/app-store-badge.svg" alt="Disponible en App Store" />
              <img src="/images/play-store-badge.svg" alt="Disponible en Google Play" />
            </div>
          </>
        )}
        <p className="hero__legal">Al descargar o utilizar <b>Univoz</b>, aceptas nuestros <a href={legalLinks.terms}><b><i>términos y condiciones</i></b></a> y nuestro <a href={legalLinks.privacy}><b><i>aviso de privacidad</i></b></a>.</p>
      </motion.div>

      <HeroVisual />
    </motion.section>
  );
}