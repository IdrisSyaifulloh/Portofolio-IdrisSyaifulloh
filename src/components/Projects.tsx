import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Semester 3 Final Project',
      category: 'Full Stack',
      year: '2024',
      description: 'A comprehensive management system developed as a final project. It handles data operations and features a user-friendly interface built with modern web technologies.',
      fullDescription: 'Complete platform featuring real-time inventory management, advanced analytics dashboard, and seamless user experience. Built with PHP, MySQL, and Bootstrap.',
      image: 'https://images.t2online.in/cdn-cgi/image/width=640,quality=70/https://apis.t2online.in/getImageStream/1058/1756644711962.jpg',
      tags: ['PHP Native', 'MySQL', 'Bootstrap', 'CSS', 'JS'],
      metrics: { users: 'Fotocopy', member: '2' },
      github: 'https://github.com/IdrisSyaifulloh/ManajemenFotocopyan-TugasBesar-Semester2',
      demo: 'https://project-demo.com'
    },
    {
      title: 'MY BINI 1',
      category: 'Full Stack',
      year: '2024',
      description: 'An advanced full-stack application demonstrating complex data flows and interactive UI elements. Developed to showcase backend integration capabilities.',
      fullDescription: 'Complete e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and seamless user experience. Built with React, Node.js, and PostgreSQL.',
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/1200x600/webp/photo/p1/916/2024/11/11/go-yoon-jung-802564551.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: { users: '1JTK+', uptime: '99.9%', performance: 'A+' },
    },
    {
      title: 'MY BINI 2',
      category: 'Mobile',
      year: '2024',
      description: 'Feature-rich mobile application for fitness enthusiasts. Includes workout tracking, nutrition planning, and social community features.',
      fullDescription: 'Feature-rich mobile application for fitness enthusiasts. Includes workout tracking, nutrition planning, social community features, and AI-powered recommendations. Built with React Native and Firebase.',
      image: 'https://www.pantau.com/_next/image?url=https%3A%2F%2Fpantau.sgp1.cdn.digitaloceanspaces.com%2Fimages%2F20240804-3954-446123229_1788594541633306_394263367615011274.jpg&w=2048&q=75',
      tags: ['React Native', 'Firebase', 'Redux', 'ML'],
      metrics: { downloads: '50K+', rating: '4.8/5', active: '15K' },
    },
    {
      title: 'UI/UX Exploration',
      category: 'Design',
      year: '2023',
      description: 'Creative exploration of modern user interfaces.',
      fullDescription: 'A collection of UI/UX designs focusing on minimalism and user engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
      tags: ['Figma', 'UI/UX', 'Design System'],
      metrics: { views: '10K+', likes: '1.2K' },
    },
    {
      title: 'Web Analytics Dashboard',
      category: 'Frontend',
      year: '2023',
      description: 'Data visualization dashboard for marketing teams.',
      fullDescription: 'Interactive dashboard built with React and D3.js to visualize complex datasets in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      tags: ['React', 'D3.js', 'Tailwind'],
      metrics: { users: '5K+', retention: '85%' },
    }
  ];

  const rotations = [-12, 8, -5, 10, -8];
  const translationsY = [20, -15, 10, -25, 15];

  return (
    <section id="projects" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300" style={{ backgroundColor: '#f5f5f5' }}>
      
      {/* Top Header Labels */}
      <div className="absolute top-8 sm:top-12 left-6 right-6 sm:left-12 sm:right-12 flex justify-between text-xs sm:text-sm font-bold tracking-widest text-black dark:text-gray-300 uppercase z-20">
        <span>Idris Syaifulloh</span>
        <span>Software Engineer Portfolio</span>
      </div>

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <div className="flex items-center text-[15vw] md:text-[18vw] font-black text-black dark:text-white leading-none uppercase tracking-tighter mix-blend-overlay opacity-90 dark:opacity-20" style={{ fontFamily: 'Impact, sans-serif' }}>
          <span style={{ transform: 'rotate(-5deg) translateY(5px)', display: 'inline-block' }}>P</span>
          <span style={{ transform: 'rotate(8deg)', display: 'inline-block' }}>O</span>
          <span style={{ transform: 'rotate(-10deg) translateY(-10px)', display: 'inline-block' }}>R</span>
          <span style={{ transform: 'rotate(5deg) scaleX(-1)', display: 'inline-block' }}>T</span>
          <span style={{ transform: 'rotate(-15deg)', display: 'inline-block' }}>F</span>
          <span style={{ transform: 'rotate(10deg) translateY(10px)', display: 'inline-block' }}>O</span>
          <span style={{ transform: 'rotate(-5deg)', display: 'inline-block' }}>L</span>
          <span style={{ transform: 'rotate(12deg)', display: 'inline-block' }}>I</span>
          <span style={{ transform: 'rotate(-8deg)', display: 'inline-block' }}>O</span>
        </div>
      </div>

      {/* Scattered Cards Container */}
      <div className="container mx-auto px-2 relative z-10 mt-12 md:mt-20 overflow-visible">
        <div className="flex justify-center items-center">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.15, 
                rotate: 0, 
                y: -20, 
                zIndex: 50,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                type: 'spring', 
                stiffness: 200, 
                damping: 20,
                delay: idx * 0.1 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative cursor-pointer -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 group"
              style={{ 
                rotate: `${rotations[idx % rotations.length]}deg`, 
                transform: `translateY(${translationsY[idx % translationsY.length]}px)`,
                zIndex: 10 + idx
              }}
              onClick={() => setSelectedProject(idx)}
            >
              {/* Card Style */}
              <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 aspect-[3/4] bg-white p-1 sm:p-2 shadow-2xl overflow-hidden border border-gray-200">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Hover Overlay Text */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-bold text-sm sm:text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <span className="text-white/80 text-xs sm:text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Click to View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Project Modal (Kept from original with styling updates)
function ProjectModal({ project, onClose }: any) {
  return (
    <motion.div
      className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.button
          className="fixed top-8 right-8 w-12 h-12 border-2 border-black dark:border-white rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors z-50"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X size={20} strokeWidth={2} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-video rounded-3xl overflow-hidden mb-12 border-4 border-black dark:border-gray-800"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span 
                className="inline-block px-4 py-1 text-sm font-bold border-2 border-black rounded-full mb-6"
                style={{ backgroundColor: '#065f46', color: '#ffffff' }}
              >
                {project.category} - {project.year}
              </span>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
                {project.title}
              </h2>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Metrics */}
              {project.metrics && Object.keys(project.metrics).length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 border-2 border-black dark:border-gray-800 rounded-2xl mb-8 bg-white dark:bg-gray-900">
                  {Object.entries(project.metrics).map(([key, value]: any) => (
                    <div key={key}>
                      <div className="text-3xl font-bold text-black dark:text-white mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-wider text-black dark:text-gray-400 uppercase mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white dark:bg-black border-2 border-black dark:border-gray-700 text-black dark:text-white text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-md border-2 border-black hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#065f46', color: '#ffffff', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-black border-2 border-black text-black dark:text-white font-bold rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
