import React from 'react';

const Projects = () => {
  
  const projectsData = [
    {
      title: "Tech Consulting Start-up",
      description: "An upcoming online consulting platform for web development services in Madurai. Focusing on helping local businesses go digital.",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-purple-500 to-blue-500"
    },
    {
      
      title: "Task Manager API (MERN)",
      description: "A robust RESTful API for a task management app. Features user auth (JWT), CRUD operations for tasks, and advanced data filtering. Built for scalability.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      
      color: "from-green-400 to-blue-500" 
      // ----------------------------------
    },
    {
      title: "Personal Portfolio",
      description: "A modern, dark-themed portfolio website to showcase my skills and projects to recruiters. Built with MERN stack and Tailwind CSS.",
      tags: ["React", "Tailwind v3", "Framer Motion"],
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Works</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-purple-500/20 relative overflow-hidden group">
          
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color}`}></div>
            
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;