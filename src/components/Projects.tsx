import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AriseImg from '../assets/Arise.png';
import aquaimg from '../assets/Aquaculture.png';
import ms from '../assets/MS.png';
import smartmanekin from '../assets/SmartManekin.png';
import uiios from '../assets/UIIOS.png';
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Arise Games',
      category: 'Full Stack',
      year: '2026',
      description: 'A comprehensive management system developed as a final project. It handles data operations and features a user-friendly interface built with modern web technologies.',
      fullDescription: 'Terlibat dalam pengembangan website pengelolaan kegiatan olahraga bekerja sama dengan National Olympic Academy, mencakup fitur peserta, volunteer, lowongan pekerjaan, Landing Page, Page Per User.',
      image: AriseImg,
      tags: ['Laravel','React JS', 'MySQL', 'Bootstrap', 'CSS', 'JS'],
      metrics: { users: 'Fotocopy', member: '2' },
      demo: 'https://arise.games/'
    },
    {
      title: 'Aquaculture Monitoring System',
      category: 'Full Stack',
      year: '2026',
      description: 'An advanced full-stack application demonstrating complex data flows and interactive UI elements. Developed to showcase backend integration capabilities.',
      fullDescription: 'Complete e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and seamless user experience. Built with React, Node.js, and PostgreSQL.',
      image: aquaimg,
      tags: ['Laravel','MySQL', 'CSS', 'JS'],
      metrics: { users: '1JTK+', uptime: '99.9%', performance: 'A+' },
      demo: 'https://dev-aquaculture.stas-rg.com/login'
    },
    {
      title: 'Management STAS-RG',
      category: 'Full Stack',
      year: '2026',
      description: 'Feature-rich mobile application for fitness enthusiasts. Includes workout tracking, nutrition planning, and social community features.',
      fullDescription: 'Feature-rich mobile application for fitness enthusiasts. Includes workout tracking, nutrition planning, social community features, and AI-powered recommendations. Built with React Native and Firebase.',
      image: ms,
      tags: ['React Native', 'Firebase', 'Redux', 'ML'],
      metrics: { downloads: '50K+', rating: '4.8/5', active: '15K' },
      demo: 'https://ms-stas-rg.com'
    },
    {
      title: 'Smart Manekin Monitoring System',
      category: 'Full Stack Development',
      year: '2023',
      description: 'Creative exploration of modern user interfaces.',
      fullDescription: 'A collection of UI/UX designs focusing on minimalism and user engagement.',
      image: smartmanekin,
      tags: ['Figma', 'UI/UX', 'Design System'],
      metrics: { views: '10K+', likes: '1.2K' },
      demo: 'https://smart-manekin.stas-rg.com'
    },
    {
      title: 'UI/UX IOS Design',
      category: 'Frontend IOS',
      year: '2026',
      description: 'Data visualization dashboard for marketing teams.',
      fullDescription: 'Terlibat dalam pengembangan website pengelolaan kegiatan olahraga bekerja sama dengan National Olympic Academy, mencakup fitur peserta, volunteer, lowongan pekerjaan, Landing Page, Page Per User.',
      image: uiios,
      tags: ['React', 'D3.js', 'Tailwind'],
      metrics: { users: '5K+', retention: '85%' },
      demo: 'https://ff56cp.csb.app'
    }
  ];

  const rotations = [-12, 8, -5, 10, -8];
  const translationsY = [20, -15, 10, -25, 15];

  return (
    <section id="projects" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300" style={{ backgroundColor: '#f5f5f5' }}>
      
      {/* Top Header Labels */}
      <div className="absolute top-8 w-full px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-sm font-bold tracking-widest text-black dark:text-gray-300 uppercase z-20 text-center">
        <span>Idris Syaifulloh</span>
        <span>Software Engineer Portfolio</span>
      </div>

      {/* Main Content Container */}
      <div className="w-full pb-12 relative z-10" style={{ paddingTop: '120px' }}>
        <div className="flex flex-col items-center justify-center w-full mx-auto px-4 relative">
          
          {/* Massive Text */}
          <div 
            className="flex items-center justify-center font-black text-black dark:text-white leading-none uppercase tracking-tighter w-full relative z-20 flex-wrap" 
            style={{ fontFamily: 'Impact, sans-serif', fontSize: 'clamp(60px, 15vw, 130px)', marginBottom: '0' }}
          >
            <span style={{ transform: 'rotate(-5deg) translateY(5px)', display: 'inline-block' }}>P</span>
            <span style={{ transform: 'rotate(8deg)', display: 'inline-block' }}>R</span>
            <span style={{ transform: 'rotate(-10deg) translateY(-10px)', display: 'inline-block' }}>O</span>
            <span style={{ transform: 'rotate(5deg)', display: 'inline-block' }}>J</span>
            <span style={{ transform: 'rotate(-15deg)', display: 'inline-block' }}>E</span>
            <span style={{ transform: 'rotate(10deg) translateY(10px)', display: 'inline-block' }}>C</span>
            <span style={{ transform: 'rotate(-5deg)', display: 'inline-block' }}>T</span>
            <span style={{ transform: 'rotate(12deg)', display: 'inline-block' }}>S</span>
          </div>

          {/* Scattered Cards Container (Responsive Wrap) */}
          <div 
            className="w-full flex flex-wrap justify-center items-start relative z-10" 
            style={{ marginTop: '50px', rowGap: '150px', columnGap: '24px' }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 0, 
                  y: -30, 
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
                className="relative cursor-pointer group flex-shrink-0"
                style={{ 
                  rotate: `${rotations[idx % rotations.length]}deg`, 
                  transform: `translateY(${translationsY[idx % translationsY.length]}px)`,
                  zIndex: 10 + idx,
                }}
                onClick={() => setSelectedProject(idx)}
              >
                {/* Keychain Ring and String */}
                <div 
                  className="pointer-events-none transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
                  style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: -1 }}
                >
                  <div style={{ width: '18px', height: '18px', border: '4px solid #6b7280', borderRadius: '50%' }} />
                  <div style={{ width: '5px', height: '90px', backgroundColor: '#6b7280', marginTop: '-3px' }} />
                  <div style={{ width: '14px', height: '14px', backgroundColor: '#4b5563', borderRadius: '50%', marginTop: '-5px', border: '2px solid white' }} />
                </div>

                {/* Card Style */}
                <div 
                  className="bg-white p-2 shadow-2xl overflow-hidden border border-gray-200 relative z-10"
                  style={{ width: 'clamp(160px, 42vw, 320px)', aspectRatio: '4/3' }}
                >
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'top center',
                      imageRendering: 'high-quality',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                  
                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-white font-bold text-xs sm:text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <span className="text-white/80 text-[10px] sm:text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Click to View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
