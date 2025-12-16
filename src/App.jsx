import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, GraduationCap, Briefcase, Terminal } from 'lucide-react';
import profileImg from './assets/profile.jpg';
import receptionRobotImg from './assets/receptionrobot.jpg';
import roboSoccerImg from './assets/robosoccer.jpg';
import Python from './assets/python.jpg';
import Django from './assets/django.jpg';

const App = () => {
  const projects = [
    {
      title: "IoT Reception Robot",
      description: "An autonomous robot designed to navigate office environments, greet visitors, and provide information of colleges.",
      technologies: ["Python", "ESP8266", "Motor Driver", "Raspberry Pi"],
      link: "",
      image: receptionRobotImg
    },
    {
      title: "Task Management App",
      description: "The Task Management Application is a Python-based command-line tool that allows users to manage their tasks. It provides basic functionality for adding, listing, and removing tasks, along with tracking their completion status. Tasks are stored in a JSON file (tasks.json), making it easy to load and save data between sessions. This simple tool aims to help users stay organized by managing tasks efficiently.",
      technologies: ["Python", "Pytest"],
      link: "https://github.com/AmritaPudasaini/CS50-Python/tree/main/124330256/project",
      image: Python
    },
    {
      title: "Robo Soccer",
      description: "Remote controlled bots that plays football",
      technologies: ["ESP 32", "Motor Driver", "C++", "FlySky FS-i6"],
      link: "",
      image: roboSoccerImg
    },
    {
      title: "Clustering Political Campaign Using Python",
      description: "Clustering Political Campaign of the Recent Election of Nepal using k-means and dbscan (unsupervised machine learning algorithms).",
      technologies: ["Python", "K-means", "DBSCAN", "Matplotlib", "Pandas"],
      link: "https://github.com/AmritaPudasaini/Python-Clustering-Political-Campaign",
      image: Python
    },
    {
      title: "Aarogya Health Application (labResult)",
      description: "Built using Python and Django, this module handles the management and retrieval of patients' lab results. It provides a secure and efficient backend API for lab result data.",
      technologies: ["Python", "Django", "REST API"],
      link: "https://github.com/AmritaPudasaini/Arogya_Backend_LabResult",
      image: Django
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Presidential Graduate School (Affiliated with Westcliff University)",
      period: "2022-2026",
      description: "Specialized in Artificial Intelligence and Machine Learning. GPA: 3.8/4.0"
    },
    {
      degree: "High School (+2)",
      institution: "National School of Science (NSS)",
      period: "2019-2021",
      description: "Major in Science Stream with focus on Biology. GPA: 2.97/4.0."
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Rehdon Secondary School",
      period: "20111-2019",
      description: "GPA: 3.35/4.0."
    }
  ];

  const experiences = [
    {
      role: "Research and Development Intern",
      company: "Robotics Association of Nepal",
      period: "2025 - Present",
      description: "Focuses on designing and improving robotic technologies and solutions for local and practical applications."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900"> Amrita Pudasaini</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
            </nav>
            <div className="flex space-x-4">
              <a href="https://github.com/AmritaPudasaini" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amrita-pudasaini-696700259/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pudasaineeamrita7@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Amrita Pudasaini</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                AI/ML & Robotics Enthusiast
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Passionate about building scalable IoT solutions and exploring the intersection of AI and robotics to create innovative applications that can be used in real-life.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#projects" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </a>
                <a 
                  href="mailto:pudasaineeamrita7@gmail.com" 
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full overflow-hidden shadow-2xl">
                  <img src={profileImg} alt="Amrita Pudasaini" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Code className="text-blue-600" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                  Hello! I’m Amrita Pudasaini, a passionate technology enthusiast with a keen interest in Artificial Intelligence, Machine Learning, Robotics, and the Internet of Things (IoT). I enjoy exploring how emerging technologies can be applied to solve real-world problems and improve lives. I have hands-on experience in building smart systems and intelligent solutions, combining software and hardware to create innovative projects.
              </p>
              <p className="text-gray-600 mb-6">
                I am always eager to learn, experiment, and collaborate on projects that push the boundaries of technology. My goal is to leverage my skills to contribute to the tech community and create solutions that have a meaningful impact.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Microcontrollers', 'React', 'Networking', 'SQL', 'HTML', 'CSS', 'GitHub', 'Packet Tracer', 'DBMS'].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <Terminal className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Microcontroller</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Hardware</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>C/C++</span>
                    <span>Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Python</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 ml-6 mt-2"></div>
                </div>
                <div className="ml-8 pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <span className="text-blue-600 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-700 mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-blue-600 font-medium mb-3">{edu.period}</div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenging projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:pudasaineeamrita7@gmail.com" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Send Email
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Amrita Pudasaini</div>
            <p className="text-gray-400 mb-6">AI/ML & Robotics Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/AmritaPudasaini" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/amrita-pudasaini-696700259/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pudasaineeamrita7@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Amrita Pudasaini. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
