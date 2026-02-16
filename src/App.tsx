import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './components/ThemeContext';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Certificate } from './components/certificate';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedCursor />
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificate />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
