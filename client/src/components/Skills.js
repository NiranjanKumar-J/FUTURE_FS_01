import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Java", level: "Advanced", color: "border-orange-500 text-orange-500" },
    { name: "HTML", level: "Advanced", color: "border-green-500 text-green-500" },
    { name: "CSS", level: "Intermediate", color: "border-blue-400 text-blue-400" },
    { name: "Node.js", level: "Intermediate", color: "border-green-400 text-green-400" },
    { name: "React.js", level: "Intermediate", color: "border-green-600 text-green-600" },
    { name: "MongoDB", level: "Intermediate", color: "border-blue-600 text-blue-600" },
    { name: "Python", level: "Advanced", color: "border-cyan-400 text-cyan-400" },
    { name: "C/C++", level: "Intermediate", color: "border-red-500 text-red-500" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900 rounded-full blur-[100px] opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 border-2 ${skill.color} rounded-xl bg-gray-900 hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-lg text-center cursor-default`}>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;