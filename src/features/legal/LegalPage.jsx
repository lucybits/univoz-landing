import { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FiSearch } from 'react-icons/fi';
import legalDocument from './legalDocument.md?raw';
import Footer from '../../shared/layout/Footer/Footer';
import Navbar from '../../shared/layout/Navbar/Navbar';
import SocialRail from '../../shared/layout/SocialRail/SocialRail';
import './LegalPage.css';

const slugify = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const outline = legalDocument
  .split('\n')
  .flatMap((line) => {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) return [];
    const title = match[2].trim();
    return [{
      level: match[1].length,
      title,
      id: `legal-${slugify(title)}`,
    }];
  });

export default function LegalPage() {
  const [query, setQuery] = useState('');

  // El documento se pinta después de que el navegador intenta ir al #ancla de la URL, así que lo hacemos aquí.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  const filteredOutline = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es');
    if (!normalizedQuery) return outline;
    return outline.filter(({ title }) => title.toLocaleLowerCase('es').includes(normalizedQuery));
  }, [query]);

  const markdownComponents = {
    h1: ({ children }) => <h1 id={`legal-${slugify(String(children))}`}>{children}</h1>,
    h2: ({ children }) => <h2 id={`legal-${slugify(String(children))}`}>{children}</h2>,
    h3: ({ children }) => <h3 id={`legal-${slugify(String(children))}`}>{children}</h3>,
  };

  return (
    <>
      <Navbar homeHref="/" />
      <SocialRail />
      <main className="legal-page">
        <div className="legal-layout container">
          <aside className="legal-sidebar" aria-label="Índice del documento">
            <h2 className="legal-sidebar__title">Índice</h2>
            <label className="legal-sidebar__search">
              <FiSearch aria-hidden="true" />
              <span className="sr-only">Buscar en el índice</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar apartado..."
              />
            </label>
            <nav className="legal-sidebar__nav" aria-label="Apartados del documento">
              {filteredOutline.length ? (
                filteredOutline.map(({ id, level, title }) => (
                  <a
                    className={`legal-sidebar__link legal-sidebar__link--level-${level}`}
                    href={`#${id}`}
                    key={id}
                  >
                    {title}
                  </a>
                ))
              ) : (
                <p className="legal-sidebar__empty">No hay apartados que coincidan.</p>
              )}
            </nav>
          </aside>
          <article className="legal-document">
            <div className="legal-document__content">
              <ReactMarkdown components={markdownComponents}>{legalDocument}</ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
      <Footer homeHref="/" />
    </>
  );
}
