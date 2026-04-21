import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { data } from './data';

export default function App() {
  return (
    <div className="app">
      <main className="container">
        <Hero data={data} />

        <Projects projects={data.projects} />

        <div className="divider" />

        <Skills skills={data.skills} />

        <div className="divider" />

        <Education education={data.education} awards={data.awards} publications={data.publications} />

        <div className="divider" />

        <Contact contact={data.contact} />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Soumitro Sarkar</span>
        <span>Software Engineer · Dhaka, Bangladesh</span>
      </footer>
    </div>
  );
}
