import React from 'react';


import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      
      
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          NIRANJAN KUMAR J
        </h1>
        
        
        <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
          <li className="hover:text-purple-400 cursor-pointer transition transform hover:scale-105">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition transform hover:scale-105">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition transform hover:scale-105">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition transform hover:scale-105">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer transition transform hover:scale-105">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="hidden md:block bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/30">
          <a href="#contact">Contact Me</a>
        </button>
      </nav>

      
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10 pt-20">
        <h2 className="text-purple-400 font-mono mb-4 text-lg animate-pulse">
          Aspiring Web Developer
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
          DESIGN  DEVELOP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
            DEPLOY
          </span>
        </h1>
        
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          I build fast, interactive, and responsive websites. A 2nd-year CSE student from <span className="text-white font-semibold">Madurai</span>. 
          , turning complex logic into beautiful <span className="text-white font-semibold">web interfaces</span> using <span className="text-purple-400 font-semibold">React</span> & <span className="text-purple-400 font-semibold">Tailwind.</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
            View My Work
          </a>
        </div>
      </section>

      
      <About />


      <Skills />

      <Projects />

      <Contact />

      <footer className="bg-gray-900 text-gray-500 text-center py-8 border-t border-gray-800">
        <p>© 2025 Niranjan. Built with <span className="text-purple-500">React & Tailwind</span>.</p>
      </footer>

    </div>
  );
}

export default App;