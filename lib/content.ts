export type Locale = 'en' | 'fr';

export const LOCALES: Locale[] = ['en', 'fr'];

export const LOCALE_PATH: Record<Locale, string> = { en: '/', fr: '/fr' };

export const links = {
  email: 'mehdimoungids@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moungid-mehdi/',
  github: 'https://github.com/Mehdionmars',
  leetcode: 'https://leetcode.com/Mehdionmars',
  // Latest resume, served from /public.
  cv: '/mehdi-moungid-resume.pdf',
};

type L = Record<Locale, string>;

export interface Experience {
  company: string;
  role: L;
  location: L;
  start: string; // YYYY-MM, or YYYY when the month is not known
  end: string | null; // null = ongoing
  achievements: Record<Locale, string[]>;
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  kind: L;
  date: string; // YYYY-MM, or range "YYYY-MM/YYYY-MM"
  summary: L;
  outcome: L;
  stack: string[];
  image: string;
  demoUrl: string | null;
  githubUrl: string | null;
}

export const experiences: Experience[] = [
  {
    company: 'KOOG',
    role: { en: 'Software Engineer & Lead Developer', fr: 'Software Engineer & Lead Developer' },
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    start: '2025',
    end: null,
    achievements: {
      en: [
        'Designed and evolved a web booking platform for the Moroccan market.',
        'Front-end development with Next.js, React and TypeScript, and back-end services with Spring Boot.',
        'Designed and integrated REST APIs with Spring Boot, PostgreSQL and Keycloak.',
        'Contributed to the application architecture, debugging and the platform’s maintainability.',
        'Git / GitHub, code reviews and technical problem solving.',
      ],
      fr: [
        'Conception et évolution d’une plateforme web de réservation pour le marché marocain.',
        'Développement frontend avec Next.js, React et TypeScript et services backend avec Spring Boot.',
        'Conception et intégration d’APIs REST avec Spring Boot, PostgreSQL et Keycloak.',
        'Participation à l’architecture applicative, au débogage et à l’amélioration de la maintenabilité de la plateforme.',
        'Utilisation de Git / GitHub, revues de code et résolution de problèmes techniques.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Keycloak', 'Docker', 'Git', 'GitHub'],
  },
  {
    company: 'Solupharm',
    role: { en: 'Cloud / Full-Stack Engineer', fr: 'Cloud / Full-Stack Engineer' },
    location: { en: 'Montreal, QC', fr: 'Montréal, QC' },
    start: '2024-10',
    end: '2024-12',
    achievements: {
      en: [
        'Built and deployed a web platform for task management and schedule planning.',
        'Front end with Next.js / React, integrating Node.js back-end services.',
        'Worked with PostgreSQL and integrated the application’s components into a modular architecture.',
        'Deployed the components on AWS EC2, RDS and S3.',
      ],
      fr: [
        'Développement et déploiement d’une plateforme web de gestion des tâches et de planification des horaires.',
        'Développement frontend avec Next.js / React et intégration de services backend avec Node.js.',
        'Travail avec PostgreSQL et intégration des composants applicatifs dans une architecture modulaire.',
        'Déploiement des composants avec AWS EC2, RDS et S3.',
      ],
    },
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel'],
  },
  {
    company: 'Loginfo',
    role: { en: 'Software / Cloud Engineer', fr: 'Software / Cloud Engineer' },
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    start: '2024-03',
    end: '2024-09',
    achievements: {
      en: [
        'Developed and maintained a web application with Next.js and React.',
        'Built and integrated front-end and back-end features with Node.js and PostgreSQL.',
        'Code reviews, testing, debugging and improving the application’s stability.',
        'Diagnosed and resolved application and technical issues.',
      ],
      fr: [
        'Développement et maintenance d’une application web avec Next.js et React.',
        'Développement et intégration de fonctionnalités frontend et backend avec Node.js et PostgreSQL.',
        'Participation aux revues de code, tests, débogage et amélioration de la stabilité de l’application.',
        'Diagnostic et résolution de problèmes applicatifs et techniques.',
      ],
    },
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Git', 'Vercel'],
  },
  {
    company: 'HPSearch',
    role: { en: 'Web Developer', fr: 'Développeur Web' },
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    start: '2023-06',
    end: '2023-08',
    achievements: {
      en: [
        'Built and maintained websites with HTML, CSS, JavaScript, PHP and WordPress.',
        'Developed a plugin integrating third-party APIs to store and retrieve data.',
      ],
      fr: [
        'Développement et maintenance de sites web avec HTML, CSS, JavaScript, PHP et WordPress.',
        'Développement d’un plugin permettant l’intégration d’APIs tierces pour le stockage et la récupération de données.',
      ],
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'REST APIs'],
  },
  {
    company: 'SDAIM',
    role: { en: 'Mobile / Full-Stack Developer', fr: 'Développeur Mobile / Full-Stack' },
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    start: '2021-06',
    end: '2021-09',
    achievements: {
      en: [
        'Developed and maintained a mobile app and contributed to the software development process.',
        'Worked on a CMS + mobile app + Node.js back-end architecture.',
      ],
      fr: [
        'Développement et maintenance d’une application mobile et contribution aux processus de développement logiciel.',
        'Travail sur une architecture CMS + application mobile + backend Node.js.',
      ],
    },
    stack: ['Node.js', 'MongoDB', 'React Native', 'Payload CMS', 'AWS S3', 'Git'],
  },
];

export const projects: Project[] = [
  {
    slug: 'afriexport',
    title: 'AfriExport Consulting',
    kind: { en: 'Company website · Import-export consulting', fr: 'Site d’entreprise · Conseil import-export' },
    date: '2026-10',
    summary: {
      en: 'Bilingual website for an import-export consulting firm in Morocco, built with Astro and Tailwind CSS.',
      fr: 'Site bilingue d’un cabinet de conseil en import-export au Maroc, en Astro et Tailwind CSS.',
    },
    outcome: {
      en: 'Live in French and English: services, method, container guide and contact, with a sitemap for search.',
      fr: 'En ligne en français et en anglais : services, méthode, guide des conteneurs et contact, avec sitemap pour le référencement.',
    },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/afriexport.webp',
    demoUrl: 'https://afriexport.vercel.app/',
    githubUrl: 'https://github.com/Mehdionmars/afri',
  },
  {
    slug: 'atlanticsoud',
    title: 'AtlanticSoud',
    kind: { en: 'Client website · Construction', fr: 'Site client · Construction' },
    date: '2025-02',
    summary: {
      en: 'Website for a metal-construction company in Morocco, built with Next.js and Supabase.',
      fr: 'Site d’une entreprise de construction métallique au Maroc, en Next.js et Supabase.',
    },
    outcome: {
      en: 'In production: gallery, contact form, editable content and SEO.',
      fr: 'En production : galerie, formulaire de contact, contenu modifiable et SEO.',
    },
    stack: ['Next.js', 'React', 'Supabase', 'TypeScript'],
    image: '/projects/soud.webp',
    demoUrl: 'https://www.atlanticsoud.ma/',
    githubUrl: 'https://github.com/Mehdionmars/Constead',
  },
  {
    slug: 'boost-gaming',
    title: 'Boost Gaming',
    kind: { en: 'Client e-commerce · Gaming PCs', fr: 'E-commerce client · PC gaming' },
    date: '2025-02',
    summary: {
      en: 'Web platform for a store selling gaming PCs and accessories.',
      fr: 'Plateforme web d’une boutique de PC gaming et d’accessoires.',
    },
    outcome: {
      en: 'PC builder, plus a Payload CMS back end for real-time catalog updates and auth.',
      fr: 'Configurateur de PC, et back-office Payload CMS pour un catalogue à jour en temps réel et l’authentification.',
    },
    stack: ['Payload CMS', 'React', 'Node.js', 'Express', 'TypeScript', 'Vite'],
    image: '/projects/boost.webp',
    demoUrl: 'https://beta.boostgaming.ma/',
    githubUrl: 'https://github.com/xenedium/boostgaming-frontend',
  },
  {
    slug: 'weather-forecast',
    title: 'Weather Forecast Detection',
    kind: { en: 'Machine learning · Forecasting', fr: 'Machine learning · Prévision' },
    date: '2025-06',
    summary: {
      en: 'CNN weather-classification pipeline in PyTorch, with a Next.js app for real-time data.',
      fr: 'Pipeline de classification météo par CNN en PyTorch, avec une app Next.js pour les données en temps réel.',
    },
    outcome: {
      en: '97.35% accuracy, and 3× faster training with batch normalization.',
      fr: '97,35 % de précision, et un entraînement 3× plus rapide grâce à la batch normalization.',
    },
    stack: ['Python', 'PyTorch', 'Seaborn', 'Jupyter', 'Next.js'],
    image: '/projects/forecast.webp',
    demoUrl: 'https://weatherca.vercel.app/',
    githubUrl: 'https://github.com/Mehdionmars/weatherca/',
  },
  {
    slug: 'beachfront',
    title: 'Beachfront Luxury Accommodation',
    kind: { en: 'Hospitality website', fr: 'Site hôtelier' },
    date: '2025-01/2025-05',
    summary: {
      en: 'Website for a luxury beachfront accommodation in the Maldives.',
      fr: 'Site d’un hébergement de luxe en bord de mer aux Maldives.',
    },
    outcome: {
      en: 'Designed in Figma, built in React: gallery, booking and contact form.',
      fr: 'Conçu dans Figma, développé en React : galerie, réservation et formulaire de contact.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Figma'],
    image: '/projects/resort.webp',
    demoUrl: 'https://resortseaside.vercel.app/',
    // TODO(Mehdi): this repository belongs to another GitHub user — replace or remove.
    githubUrl: 'https://github.com/AkshatJha0411/teleop-with-ros',
  },
  {
    slug: 'cyberpunk-dashboard',
    title: 'Cyberpunk Dashboard',
    kind: { en: 'Dashboard UI', fr: 'Interface de tableau de bord' },
    date: '2024-08/2024-12',
    summary: {
      en: 'Dashboard mixing retro-pixel aesthetics with a modern interface.',
      fr: 'Tableau de bord mêlant esthétique rétro-pixel et interface moderne.',
    },
    outcome: {
      en: 'A fully custom dashboard UI on Next.js and Supabase.',
      fr: 'Une interface de tableau de bord entièrement sur mesure, sur Next.js et Supabase.',
    },
    stack: ['TypeScript', 'Next.js', 'Supabase', 'React'],
    image: '/projects/ops.webp',
    demoUrl: 'https://v0-cyberpunk-dashboard-design-gold-eta-63.vercel.app/',
    // TODO(Mehdi): this repository belongs to another GitHub user — replace or remove.
    githubUrl: 'https://github.com/AkshatJha0411/SustainX/',
  },
  {
    slug: 'vcard-qr',
    title: 'VCard QR Generator',
    kind: { en: 'Open-source tool', fr: 'Outil open source' },
    date: '2025-03',
    summary: {
      en: 'Web tool that generates vCard QR codes from contact details.',
      fr: 'Outil web qui génère un QR code vCard à partir de coordonnées.',
    },
    outcome: {
      en: 'Fill in the form, download a scannable contact card.',
      fr: 'On remplit le formulaire, on télécharge une carte de contact scannable.',
    },
    stack: ['React', 'Node.js', 'Python'],
    image: '/projects/vrcode.webp',
    demoUrl: 'https://gentle-lamington-556b02.netlify.app/',
    // TODO(Mehdi): this pointed at https://github.com/ — add the real repository.
    githubUrl: null,
  },
];

export const skillGroups: { key: L; items: Record<Locale, string[]> }[] = [
  {
    key: { en: 'Frontend', fr: 'Frontend' },
    items: { en: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native'], fr: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native'] },
  },
  {
    key: { en: 'Backend', fr: 'Backend' },
    items: {
      en: ['Node.js', 'Java', 'Spring Boot', 'REST APIs', 'PHP', 'Service integration'],
      fr: ['Node.js', 'Java', 'Spring Boot', 'REST APIs', 'PHP', 'Intégration de services'],
    },
  },
  {
    key: { en: 'Databases', fr: 'Bases de données' },
    items: {
      en: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Data modelling'],
      fr: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Modélisation des données'],
    },
  },
  {
    key: { en: 'Quality', fr: 'Qualité' },
    items: {
      en: ['Git', 'GitHub', 'Code reviews', 'Testing', 'Debugging', 'Maintainability'],
      fr: ['Git', 'GitHub', 'Revues de code', 'Tests', 'Débogage', 'Maintenabilité'],
    },
  },
  {
    key: { en: 'DevOps / Cloud', fr: 'DevOps / Cloud' },
    items: { en: ['Docker', 'AWS EC2', 'AWS RDS', 'AWS S3', 'Vercel', 'Linux', 'CI/CD'], fr: ['Docker', 'AWS EC2', 'AWS RDS', 'AWS S3', 'Vercel', 'Linux', 'CI/CD'] },
  },
  {
    key: { en: 'Languages', fr: 'Langues' },
    items: { en: ['French (native)', 'English (professional)'], fr: ['Français (natif)', 'Anglais (professionnel)'] },
  },
];

export type CertificationVariant = 'green' | 'cyan' | 'amber' | 'white';

export const certifications: {
  id: 'meta-react' | 'google-spring' | 'ibm-devops' | 'ibm-cloud' | 'mastercard';
  title: string;
  issuer: string;
  detail: string;
  /** Verification link, when one exists. */
  link: string | null;
  tags: Record<Locale, string[]>;
  variant: CertificationVariant;
}[] = [
  {
    id: 'meta-react',
    title: 'Advanced React',
    issuer: 'Meta',
    detail: 'Meta Front-End Developer program',
    // TODO(Mehdi): add the verification link.
    link: null,
    tags: { en: ['React', 'Front-end'], fr: ['React', 'Frontend'] },
    variant: 'green',
  },
  {
    id: 'google-spring',
    title: 'Building Scalable Java Microservices with Spring Boot',
    issuer: 'Google Cloud',
    detail: 'Spring Boot and Spring Cloud',
    link: 'https://www.coursera.org/account/accomplishments/verify/Y4T5LX8KK4BP',
    tags: { en: ['Java', 'Spring Boot', 'Microservices'], fr: ['Java', 'Spring Boot', 'Microservices'] },
    variant: 'cyan',
  },
  {
    id: 'ibm-devops',
    title: 'DevOps, Cloud & Agile Foundations',
    issuer: 'IBM',
    detail: 'Specialization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ENYAQSEYBT8C',
    tags: { en: ['DevOps', 'Cloud', 'Agile'], fr: ['DevOps', 'Cloud', 'Agile'] },
    variant: 'white',
  },
  {
    id: 'ibm-cloud',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    detail: 'Cloud fundamentals',
    // TODO(Mehdi): add the verification link.
    link: null,
    tags: { en: ['Cloud'], fr: ['Cloud'] },
    variant: 'amber',
  },
  {
    id: 'mastercard',
    title: 'Cybersecurity Virtual Experience Program',
    issuer: 'Mastercard',
    detail: 'Virtual experience program on Forage',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Mastercard/vcKAB5yYAgvemepGQ_Mastercard_QmQfj7678xgft6TRX_1684872202730_completion_certificate.pdf',
    tags: { en: ['Cybersecurity'], fr: ['Cybersécurité'] },
    variant: 'green',
  },
];

export const tiers: {
  id: string;
  name: L;
  price: number;
  audience: L;
  featured?: boolean;
  features: Record<Locale, string[]>;
}[] = [
  {
    id: 'basic',
    name: { en: 'Basic', fr: 'Essentiel' },
    price: 3000,
    audience: { en: 'Portfolio websites & personal projects', fr: 'Sites portfolio et projets personnels' },
    features: {
      en: ['Hosting for 1 year', 'Admin dashboard', 'Responsive design', 'Basic transitions', 'Basic SEO'],
      fr: ['Hébergement 1 an', 'Tableau de bord d’administration', 'Design responsive', 'Transitions simples', 'SEO de base'],
    },
  },
  {
    id: 'standard',
    name: { en: 'Standard', fr: 'Standard' },
    price: 4500,
    audience: { en: 'Small companies & entrepreneurs', fr: 'Petites entreprises et entrepreneurs' },
    featured: true,
    features: {
      en: ['Website with 5 pages', 'Custom domain', 'Advanced SEO', 'Email support'],
      fr: ['Site de 5 pages', 'Nom de domaine personnalisé', 'SEO avancé', 'Support par e-mail'],
    },
  },
  {
    id: 'pro',
    name: { en: 'Pro', fr: 'Pro' },
    price: 7500,
    audience: { en: 'Professional companies & agencies', fr: 'Entreprises et agences' },
    features: {
      en: ['Multi-tenant platform', 'User accounts & roles', 'Custom domain', 'Framer Motion animations', 'SEO and analytics'],
      fr: ['Plateforme multi-tenant', 'Comptes utilisateurs et rôles', 'Nom de domaine personnalisé', 'Animations Framer Motion', 'SEO et statistiques'],
    },
  },
];

export function formatMonth(ym: string, locale: Locale) {
  const [y, m] = ym.split('-').map(Number);
  // Year-only dates stay year-only: no month is invented.
  if (!m) return String(y);
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-GB', { month: 'short', year: 'numeric' })
    .format(new Date(Date.UTC(y, m - 1, 1)));
}

export function formatRange(start: string, end: string | null, locale: Locale) {
  return `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : locale === 'fr' ? 'aujourd’hui' : 'present'}`;
}

export function formatPeriod(range: string, locale: Locale) {
  const [a, b] = range.split('/');
  if (!b) return formatMonth(a, locale);
  return `${formatMonth(a, locale)} – ${formatMonth(b, locale)}`;
}

export function formatPrice(value: number, locale: Locale) {
  // fr-FR groups with a narrow no-break space, which many fonts lack; use a regular no-break space.
  return `${new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US').format(value).replace(/\u202f/g, '\u00a0')}\u00a0MAD`;
}
