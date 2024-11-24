const baseURL = 'portfolio.spyflow.link'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Spyflow - Portafolio de Desarrollo y Tecnología',
    description: 'Explora el portafolio de Spyflow, desarrollador con experiencia en C, Python, JavaScript, PHP, TypeScript y más. Proyectos innovadores y soluciones tecnológicas personalizadas.'
};

const og = {
    title: 'Portafolio de Spyflow',
    description: 'Descubre los proyectos y habilidades de Spyflow en el mundo del desarrollo, incluyendo C, Python, JavaScript, PHP, TypeScript y tecnologías modernas.',
    type: 'website',
    twitter: 'https://iad.microlink.io/E2nhwsi2Df9BtbjmDOfwaGG9NpvRq4jvSur695zc2WjxXOSOiF5qLboDskofA181t5TuQZ9ZxMhdi_fZP0kWfg.png'
};

const schema = {
    logo: '',
    type: 'Person',
    name: 'Spyflow',
    description: 'Spyflow es un desarrollador con experiencia en C, Python, JavaScript, PHP, TypeScript y más. Apasionado por crear soluciones tecnológicas innovadoras.',
    email: 'contacto@spyflow.com'
};

const social = {
    twitter: 'https://x.com/LBSspyflow',
    linkedin: 'https://cl.linkedin.com/in/javier-ferrada-riquelme',
    github: 'https://github.com/spyflow',
    discord: ''
};
export { baseURL, style, meta, og, schema, social };
