import { Milestone } from './types';

export const PROFILE = {
  name: "Efeosa Aizesogie",
  title: "Geospatial Frontend Architect",
  tagline: "Bridging the Gap Between Coordinates and Code",
  about: [
    "I strictly avoid the generic 'Web Developer' lane to claim the niche of Geospatial Frontend Architect.",
    "My unique advantage lies in the synthesis of a rigorous B.Sc. in Geomatics with senior-level Frontend Engineering skills. I don't just render maps; I engineer spatial experiences.",
    "I bridge the critical gap between complex GIS data and intuitive user interfaces. Leveraging React, Three.js, and advanced cartography, I transform static coordinates into dynamic, actionable insights.",
    "In a world awash with location data, I build the tools that make intelligence accessible, responsive, and visually compelling. I am creating a 'Category of One' where cartographic precision meets pixel-perfect UI."
  ]
};

export const MILESTONES: Milestone[] = [
  // --- Work & Education ---
  {
    id: 'foxy-labs',
    lat: 9.0882, // Maitama, Abuja
    lng: 7.4934,
    label: 'Foxy Labs',
    role: 'Frontend Developer',
    company: 'Foxy Labs',
    period: 'Aug 2024 - Present',
    location: 'Maitama, FCT, Nigeria',
    description: [
      'Transforms UI/UX designs into interactive React components, fostering creativity.',
      'Builds reusable, maintainable components adhering to best practices.',
      'Conducts rigorous testing and debugging utilizing React/Redux components.'
    ],
    techStack: ['React', 'Redux', 'Git', 'HTML5/CSS3'],
    type: 'work'
  },
  {
    id: 'ascetic-capital',
    lat: 44.7972, // Sheridan, WY
    lng: -106.9562,
    label: 'Ascetic Capital',
    role: 'Senior Frontend Engineer',
    company: 'Ascetic Capital LLC',
    period: 'Aug 2024 - Oct 2024',
    location: 'Sheridan, WY, USA',
    description: [
      'Implemented Zenpayment gateway integration for secure payout workflows.',
      'Integrated a live chatbot for real-time user assistance.',
      'Optimized front-end performance by refactoring components.'
    ],
    techStack: ['React', 'Performance Optimization', 'Payment Gateway'],
    type: 'work'
  },
  {
    id: 'balancee',
    lat: 6.5244, // Lagos
    lng: 3.3792,
    label: 'Balancee Tech',
    role: 'Frontend Developer',
    company: 'Balancee Tech Solution Ltd',
    period: 'Sept 2024 - Dec 2024',
    location: 'Lagos State, Nigeria',
    description: [
      'Developed dynamic, responsive React components based on UI/UX designs.',
      'Leveraged Redux for robust state management across complex flows.',
      'Integrated GraphQL APIs to optimize data fetching.'
    ],
    techStack: ['React', 'Redux', 'GraphQL'],
    type: 'work'
  },
  {
    id: 'uniben',
    lat: 6.3392, // Benin City
    lng: 5.6176,
    label: 'University of Benin',
    role: 'Bachelor\'s Degree, Geomatics',
    company: 'University of Benin',
    period: 'Graduated Jan 2024',
    location: 'Benin, Nigeria',
    description: [
      '4.35 GPA, Awarded University of Benin Scholar Prize.',
      'Best graduating student in academic performance in 200 level.',
      'President in the Department of Geomatics.'
    ],
    techStack: ['Geomatics', 'GIS', 'Leadership'],
    type: 'education'
  },
  {
    id: 'dgis',
    lat: 6.3350, // Slight offset from Uniben
    lng: 5.6200,
    label: 'DGIS',
    role: 'Geomatics Engineer',
    company: 'DGIS',
    period: 'Jul 2024 - Aug 2024',
    location: 'Benin, Nigeria',
    description: [
      'Expertly utilize ArcGIS for comprehensive map creation and spatial analysis.',
      'Digitize and manage geospatial data, ensuring high-quality datasets.',
      'Utilizes GPS and total station equipment for precise measurements.'
    ],
    techStack: ['ArcGIS', 'AutoCAD', 'Civil 3D', 'GPS'],
    type: 'work'
  },
  {
    id: 'mercator',
    lat: 6.5300, // Slight offset in Lagos
    lng: 3.3850,
    label: 'Mercator Tech',
    role: 'Frontend Web Developer',
    company: 'Mercator Technologies Ltd',
    period: 'Nov 2023 - Jun 2024',
    location: 'Lagos State, Nigeria',
    description: [
      'Lead development of intricate frontend components for fintech applications.',
      'Integrated complex backend functionalities using AngularJS.',
      'Actively engaged in code reviews and performance optimizations.'
    ],
    techStack: ['AngularJS', 'Fintech', 'UI/UX'],
    type: 'work'
  },
  {
    id: 'fiverr',
    lat: 28.0, 
    lng: -2.0,
    label: 'Fiverr (Global)',
    role: 'GIS Surveyor',
    company: 'Fiverr',
    period: 'Jan 2021 - Present',
    location: 'Remote / Global',
    description: [
      'Analyzed spatial data using mapping software for trend discovery.',
      'Designed digital maps integrating MySQL databases.',
      'Created shapefiles to merge topographical data with external data.'
    ],
    techStack: ['GIS', 'MySQL', 'Spatial Analysis'],
    type: 'work'
  },

  // --- Projects (The Digital Ocean) ---
  {
    id: 'simple-payroll',
    lat: 15.0,
    lng: -30.0,
    label: 'Simple Payroll',
    role: 'Creator & Developer',
    company: 'Personal Project',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'Worked as a front-end developer and created a comprehensive payroll service.',
      'Built utilizing ReactJS for structure and TailwindCSS for styling.'
    ],
    techStack: ['React', 'TailwindCSS', 'JavaScript'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/simple-payroll',
    liveUrl: 'https://simple-payroll.vercel.app/'
  },
  {
    id: 'propelll',
    lat: 20.0,
    lng: -35.0,
    label: 'Propelll',
    role: 'Frontend Developer',
    company: 'Project',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'Comprehensive content management and marketing (CMM) platform.',
      'Streamlines creation, management, and distribution of digital content.'
    ],
    techStack: ['Angular', 'Tailwind', 'JavaScript'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/Propell',
    liveUrl: 'https://propell-ten.vercel.app/'
  },
  {
    id: 'chillspot',
    lat: 25.0,
    lng: -30.0,
    label: 'Chillspot',
    role: 'Creator',
    company: 'Project',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'A Landing page for a bar selling cocktails and mocktails.',
      'Designed for visual appeal and smooth user experience.'
    ],
    techStack: ['React', 'Tailwind', 'JavaScript'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/efeosa_cocktails',
    liveUrl: 'https://efeosa-cocktails.vercel.app/'
  },
  {
    id: 'review-nest',
    lat: 30.0,
    lng: -40.0,
    label: 'Review Nest',
    role: 'Angular Developer',
    company: 'Open Source / Team',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'Empowering platform built for small businesses to gather customer insights.',
      'Facilitates collection and management of customer reviews.'
    ],
    techStack: ['Angular', 'Tailwind', 'JavaScript'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/Review-Nest',
    liveUrl: 'https://review-nest-7w4m-git-master-efeaizesogie.vercel.app/'
  },
  {
    id: 'taskflow',
    lat: 35.0,
    lng: -35.0,
    label: 'TaskFlow',
    role: 'Creator',
    company: 'Project',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'Landing page for a task management app helping teams stay productive.',
      'Focuses on clean UI and clear value proposition.'
    ],
    techStack: ['React', 'Tailwind'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/taskflow',
    liveUrl: 'https://taskflow-flax-six.vercel.app/'
  },
  {
    id: 'shipperswise',
    lat: 40.0,
    lng: -30.0,
    label: 'ShippersWise',
    role: 'Developer',
    company: 'Project',
    period: '2024',
    location: 'The Digital Ocean',
    description: [
      'Your one-stop international freight comparison e-market.',
      'Built for complex data handling and comparison logic.'
    ],
    techStack: ['React', 'Bootstrap', 'JavaScript'],
    type: 'project',
    repoUrl: 'https://github.com/efeaizesogie/web',
    liveUrl: 'https://shipperswise.com/'
  }
];

export const SKILLS = [
  "React.js", "Three.js", "GIS (ArcGIS/QGIS)", "TypeScript", 
  "Tailwind CSS", "Redux", "GraphQL", "Angular", 
  "Next.js", "Python (Spatial Analysis)"
];