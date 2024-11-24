const baseURL = 'portfolio.spyflow.link';

// Configuración de estilo
const style = {
    theme:       'dark',
    neutral:     'gray',
    brand:       'cyan',
    accent:      'indigo',
    solid:       'contrast',
    solidStyle:  'flat',
    border:      'playful',
    surface:     'translucent',
    transition:  'all',
    scaling:     '100',
};

// Metadata predeterminada
const meta = {
    title: 'Spyflow - Portafolio de Desarrollo y Tecnología',
    description: 'Explora el portafolio de Spyflow, desarrollador con experiencia en C, Python, JavaScript, PHP, TypeScript y más. Proyectos innovadores y soluciones tecnológicas personalizadas.',
};

const og = {
    title: 'Portafolio de Spyflow',
    description: 'Descubre los proyectos y habilidades de Spyflow en el mundo del desarrollo, incluyendo C, Python, JavaScript, PHP, TypeScript y tecnologías modernas.',
    type: 'website',
};

// Información del esquema
const schema = {
    logo: '',
    type: 'Person',
    name: 'Spyflow',
    description: 'Spyflow es un desarrollador con experiencia en C, Python, JavaScript, PHP, TypeScript y más. Apasionado por crear soluciones tecnológicas innovadoras.',
    email: 'contacto@spyflow.com',
};

// Redes sociales
const social = {
    twitter: 'https://x.com/LBSspyflow',
    linkedin: 'https://cl.linkedin.com/in/javier-ferrada-riquelme',
    github: 'https://github.com/spyflow',
    discord: '',
};

// Función para obtener la previsualización de la página usando Microlink
const getPreview = async () => {
    const currentUrl = window.location.href; // Obtiene la URL actual
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(currentUrl)}&screenshot=true`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'success' && data.screenshot.url) {
            return data.screenshot.url; // Devuelve la URL de la captura de pantalla
        } else {
            console.error('Error al obtener la captura de pantalla:', data);
            return null;
        }
    } catch (error) {
        console.error('Error al conectar con la API de Microlink:', error);
        return null;
    }
};

export { baseURL, style, meta, og, schema, social, getPreview };
