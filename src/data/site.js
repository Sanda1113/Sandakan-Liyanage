// ---------------------------------------------------------------------------
// Site-wide content. Edit here; no layout code needs to change.
// ---------------------------------------------------------------------------
export const site = {
  name: 'Sandakan Liyanage',
  initials: 'SL',
  headline:
    'Associate Database Engineer @ Onsys Technologies | Cloud & DevOps | Final-Year Computer Science (Cloud Technologies)',
  tagline:
    'I design, build and keep resilient systems running — from highly available AWS architectures to production SQL Server and Oracle databases.',
  // Small pill above the name.
  badge: 'Colombo, Sri Lanka · Remote with Onsys Technologies, Melbourne',
  location: 'Colombo, Sri Lanka',
  email: 'sandakanliyanage1113@gmail.com',
  github: 'https://github.com/Sanda1113',
  linkedin: 'https://www.linkedin.com/in/sandakan-liyanage-2baa9a207',
  // Optional. When this file exists it is shown as a small avatar in the hero console card.
  profileImage: '/images/profile.jpg',
  cvFile: '/Sandakan_Liyanage_CV.pdf',
  cvDownloadName: 'Sandakan_Liyanage_CV.pdf',
  // Formspree: create a form at https://formspree.io, then paste its ID (e.g. "xpzgkqwe").
  // Leave empty to fall back to a mailto: link.
  formspreeId: '',
  year: new Date().getFullYear(),
}

// Rows shown in the hero "ops console" card. The footer prints `footer.output`
// as the result of a short command.
export const heroConsole = {
  title: 'sandakan@onsys — status',
  rows: [
    { key: 'role', value: 'Associate Database Engineer · Onsys Technologies (Nov 2026 – Present)' },
    {
      key: 'focus',
      value: 'Cloud Engineering · Database Engineering · Site Reliability Engineering · Database Reliability Engineering',
    },
    { key: 'databases', value: 'Microsoft SQL Server · Oracle Database · PostgreSQL · MySQL · Amazon DynamoDB' },
    { key: 'clouds', value: 'Amazon Web Services · Microsoft Azure · Oracle Cloud Infrastructure' },
    { key: 'certified', value: 'AWS Certified Cloud Practitioner · AWS Certified AI Practitioner · PCEP Certified Python Programmer' },
    {
      key: 'education',
      value: 'BSc (Hons) Computer Science (Cloud Technologies), Staffordshire University · predicted First Class Honours',
    },
  ],
  footer: {
    command: 'cat mission.txt',
    output: 'Keep production data available, recoverable and fast.',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    'Final-year Computer Science student specialising in Cloud Technologies at Staffordshire University (via APIIT Sri Lanka), predicted First Class Honours.',
    'Associate Database Engineer at Onsys Technologies (Melbourne, Australia – remote), promoted from intern in November 2026. I monitor and maintain enterprise SQL Server, Oracle and PostgreSQL environments across on-premises, Azure and AWS: daily health checks, incident triage, backup and high-availability support, patching runbooks and automated health-check tooling.',
    'Focused on cloud architecture, infrastructure automation and database reliability, with hands-on AWS projects and full-stack applications, including offline-first systems for areas with poor connectivity.',
  ],
  highlights: [
    {
      label: 'Focus',
      value: 'Cloud Engineering · Database Engineering · Site Reliability Engineering · Database Reliability Engineering',
    },
    {
      label: 'Platforms',
      value: 'Amazon Web Services · Microsoft Azure · Oracle Cloud Infrastructure (OCI) · Microsoft SQL Server · Oracle Database · PostgreSQL · MySQL · Amazon DynamoDB',
    },
    {
      label: 'Degree',
      value: 'BSc (Hons) Computer Science (Cloud Technologies), Staffordshire University — predicted First Class Honours',
    },
    { label: 'Based in', value: 'Colombo, Sri Lanka (remote-ready)' },
  ],
}

export const contactIntro =
  'Working remotely with Onsys Technologies from Colombo. Always happy to talk about cloud architecture, database reliability and SRE work, or to collaborate on open-source and community projects.'
