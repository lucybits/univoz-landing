export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Características', href: '#caracteristicas' },
  { label: '¿Cómo funciona?', href: '#como-funciona' },
];

export const features = [
  { icon: '/images/feature-communication.svg', color: '#b57bff', title: 'Comunicación inclusiva', text: 'Facilitamos la comunicación entre personas con discapacidad y el resto de la población' },
  { icon: '/images/feature-accessibility.svg', color: '#ff8fb5', title: 'Accesibilidad para todos', text: 'Herramientas adaptadas a las necesidades locales de lenguaje y accesibilidad en Hermosillo y México' },
  { icon: '/images/feature-cloud.svg', color: '#fae56a', title: 'Siempre contigo', text: 'Funciona en tu teléfono, incluso sin conexión; solo se conecta para actualizar el diccionario de señas' },
  { icon: '/images/feature-connection.svg', color: '#3fe0bd', title: 'Conexión sin barreras', text: 'Rompe las barreras de comunicación y fomenta la inclusión en la vida diaria, en la escuela, el trabajo y más.' },
  { icon: '/images/feature-people.svg', color: '#4a7cf0', title: 'Hecho por y para personas', text: 'Desarrollado por jóvenes estudiantes de ingeniería del Instituto Tecnológico de Hermosillo' },
];

export const steps = [
  { id: 'select', icon: '/images/how-step-select.svg', title: 'Selecciona el tipo de comunicación' },
  { id: 'adapt', icon: '/images/how-step-adapt.svg', title: 'La plataforma adapta la conversación', center: true },
  { id: 'talk', icon: '/images/how-step-talk.svg', title: 'Comunícate accesible y rápidamente' },
];

export const footerColumns = [
  { title: 'Navegación', links: ['Inicio', 'Características', '¿Cómo funciona?', 'Descargar'] },
  { title: 'Recursos', links: ['Accesibilidad', 'Preguntas frecuentes', 'Aviso de Privacidad', 'Términos y Condiciones'] },
];

export const contact = { email: 'Aov2002@outlook.com', location: 'Hermosillo, Sonora, México' };

// Los ids de las anclas salen del slugify de LegalPage: si cambia un título del documento, actualízalos aquí.
export const legalLinks = {
  privacy: '/privacidad-y-terminos#legal-parte-i-aviso-de-privacidad-integral',
  terms: '/privacidad-y-terminos#legal-parte-ii-terminos-y-condiciones-de-uso',
  cookies: '/privacidad-y-terminos#legal-10-cookies-y-tecnologias-similares-sitio-web',
};

// Datos de la app publicada. Mientras apkUrl esté vacío, la descarga se muestra como «Próximamente»;
// las insignias de App Store y Google Play solo se muestran con inStores en true.
export const appRelease = { version: '0.9.0', apkUrl: '', inStores: false };
