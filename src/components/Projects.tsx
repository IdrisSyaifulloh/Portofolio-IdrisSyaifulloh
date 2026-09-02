import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  ];

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: '#ffffff' }}>
      {/* Dark mode override for background */}
      <style dangerouslySetInnerHTML={{__html: `
        .dark #projects { background-color: #111827 !important; }
        .custom-accent-bg { background-color: #065f46; }
        .dark .custom-accent-bg { background-color: #00D084; }
        .custom-dashed-line { border-bottom: 3px dashed #065f46; }
        .dark .custom-dashed-line { border-bottom: 3px dashed #00D084; }
      `}} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white tracking-tight mb-2 inline-block">
            Selected Project
          </h2>
          <div className="w-24 mx-auto custom-dashed-line mt-2" />
        </div>

        {/* Carousel Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
                  {currentProject.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {currentProject.description}
                </p>
                <button
                  onClick={() => setSelectedProject(currentIndex)}
                  className="custom-accent-bg text-white dark:text-black font-semibold px-6 py-3 border-2 border-black rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
                >
                  More Detail <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right: Image */}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video lg:aspect-[4/3] w-full">
                  {/* Black Shadow Offset */}
                  <div className="absolute top-4 left-4 w-full h-full bg-black rounded-lg -z-10" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full border-4 border-black rounded-lg overflow-hidden bg-white">
                    <ImageWithFallback
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-3 mt-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="h-3 rounded-full border-2 border-black transition-all duration-300"
              style={{
                width: currentIndex === idx ? '32px' : '32px',
                backgroundColor: currentIndex === idx ? '#065f46' : 'transparent',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
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
              <span className="inline-block px-4 py-1 bg-[#065f46] dark:bg-[#00D084] text-white dark:text-black text-sm font-bold border-2 border-black rounded-full mb-6">
                {project.category} · {project.year}
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
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-md hover:opacity-90 transition-opacity"
                    style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.5)' }}
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
