import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Vision } from './components/Vision';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-sm">
              .
            </div>
            <span>Portfolio.</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">Tentang</a>
            <a href="#interests" className="hover:text-zinc-100 transition-colors">Ketertarikan</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">Skill</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">Project</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="interests">
          <Interests />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="vision">
          <Vision />
        </section>
      </main>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Na's Portfolio. Crafted with curiosity.</p>
      </footer>
    </div>
  );
}
