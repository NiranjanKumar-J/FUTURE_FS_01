import React from 'react';
import profileImg from '../assets/profile.jpeg'; 

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        
        <div className="w-full md:w-1/3 flex justify-center relative group">
          
          <div className="absolute w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] animate-pulse group-hover:bg-purple-600/50 transition duration-500"></div>
          
          <div className="w-64 h-64 rounded-full shadow-2xl border-[5px] border-purple-500/30 relative overflow-hidden z-10 group-hover:border-purple-500/60 transition duration-500">
             <img 
               src={profileImg} 
               alt="Niranjan Kumar" 
               className="w-full h-full object-cover transform hover:scale-110 transition duration-700 ease-in-out"
             />
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Hi! I'm <span className="text-white font-bold">Niranjan Kumar</span>, I am Niranjan Kumar J, an aspiring software and web developer with a strong interest in building practical, user-focused applications. I am currently developing my skills in <strong>Web Development (HTML, CSS, JavaScript, React.js)</strong> and <strong>Java programming</strong>, with a focus on writing clean, understandable, and maintainable code.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            As someone at the early stage of my development journey, I actively learn by building real projects such as <strong>TypeMaster</strong> and <strong>TaskManager</strong>, which have helped me strengthen my understanding of frontend development, problem-solving, and application structure. I believe consistent practice and hands-on experience are the fastest ways to grow as a developer.
          </p>

          <div className="mb-10">
            <a 
              href="/resume.pdf" 
              download="Niranjan_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/40 hover:scale-105 transition-transform duration-300"
            >
              📄 Download Resume
            </a>
          </div>

          <div className="flex gap-8 justify-center md:justify-start border-t border-gray-800 pt-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">7+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center md:text-left px-6 border-l border-gray-700">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">4</h3>
              <p className="text-sm text-gray-400">Years Coding</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;