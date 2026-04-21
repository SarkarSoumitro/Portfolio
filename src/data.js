export const data = {
  name: {
    first: 'Soumitro',
    last: 'Sarkar',
  },
  role: 'Junior Software Engineer · Dhaka, Bangladesh',
  tagline:
    'A computer science graduate passionate about building clean, performant mobile apps — from AI-powered tools to day-to-day productivity solutions. Currently seeking a junior Flutter role where craft and curiosity matter.',
  contact: {
    email: 'soumitrosarkar78@gmail.com',
    phone: '+880 1751 877392',
    github: 'https://github.com/SarkarSoumitro',
    githubLabel: 'github.com/SarkarSoumitro',
    linkedin: 'https://linkedin.com/in/soumitro-sarkar-4a062334a/',
    linkedinLabel: 'linkedin.com/in/soumitro-sarkar',
  },
  projects: [
    {
      num: '01',
      title: 'Recipe Genie',
      subtitle: 'AI Recipe Generator',
      description:
        'An AI-powered app that identifies ingredients from photos using Google Gemini Vision and generates personalised recipes. Built with Clean Architecture, multilanguage support (English & Bengali), and a glassmorphic UI.',
      tags: ['Flutter', 'Gemini AI', 'Riverpod', 'Clean Arch'],
      github: 'https://github.com/SarkarSoumitro',
    },
    {
      num: '02',
      title: 'Task Manager',
      subtitle: 'Productivity App',
      description:
        'Full CRUD task manager with REST API authentication and token storage via SharedPreferences. Supports task prioritisation and due date tracking to improve daily productivity.',
      tags: ['Flutter', 'REST API', 'SharedPrefs', 'Dart'],
      github: 'https://github.com/SarkarSoumitro',
    },
    {
      num: '03',
      title: 'Expense Tracker',
      subtitle: 'Finance App',
      description:
        'Category-based expense tracking with local Hive persistence. Features monthly trend insights, a flexible data model, and basic budget setting — all wrapped in a modern UI.',
      tags: ['Flutter', 'Hive', 'Dart'],
      github: 'https://github.com/SarkarSoumitro',
    },
    {
      num: '04',
      title: 'Sticky Notes',
      subtitle: 'Note-taking App',
      description:
        'A fast note-taking app with GetX state management, 21+ colour themes, full CRUD with search, and local data persistence — designed for speed and simplicity.',
      tags: ['Flutter', 'GetX', 'Local DB'],
      github: 'https://github.com/SarkarSoumitro',
    },
  ],
  skills: [
    { name: 'Flutter & Dart', sub: 'Core framework' },
    { name: 'Programming Languages', sub: 'Dart · Java · C · C++ · Python' },
    { name: 'State Management', sub: 'Riverpod · GetX · Provider' },
    { name: 'Firebase', sub: 'Firestore · Auth · FCM' },
    { name: 'REST APIs', sub: 'Integration & auth flows' },
    { name: 'Local Storage', sub: 'Hive · SharedPreferences' },
  ],
  education: [
    {
      years: '2021 – 2025',
      degree: 'B.Sc. Computer Science & Engineering',
      school: 'United International University, Dhaka',
      grade: 'CGPA 3.37 / 4.00',
    },
    {
      years: '2020',
      degree: 'H.S.C.',
      school: 'Government Rajendra College, Faridpur',
      grade: 'GPA 5.00 / 5.00',
    },
    {
      years: '2018',
      degree: 'S.S.C.',
      school: 'Kanaipur High School, Faridpur',
      grade: 'GPA 5.00 / 5.00',
    },
  ],
  awards: [
    {
      year: 'Fall 2024',
      title: 'Champion — Final Year Design Project',
      desc: 'RiceResQ: AI-based rice disease detection & pesticide recommendation system using Digital Image Processing and ML.',
    },
  ],
  publications: [
    {
      year: '2026',
      title: 'Predictive Assessment and Social-Cost Estimation of Methane Emissions in Bio-Slurry Amended Systems',
      desc: 'IEEE Publication — Research on methane emission prediction and cost analysis in bio-slurry amended agricultural systems.',
      link: 'https://ieeexplore.ieee.org/abstract/document/11367519',
    },
  ],
};
