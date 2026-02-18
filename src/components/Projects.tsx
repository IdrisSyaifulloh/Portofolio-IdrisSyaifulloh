import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Github, Folder } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
     {
      title: 'MY BINI 1',
      category: 'Full Stack',
      year: '2024',
      description: 'lorem Ipsum.',
      fullDescription: 'Complete e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and seamless user experience. Built with React, Node.js, and PostgreSQL.',
      image: 'https://www.pantau.com/_next/image?url=https%3A%2F%2Fpantau.sgp1.cdn.digitaloceanspaces.com%2Fimages%2F20240804-3954-446123229_1788594541633306_394263367615011274.jpg&w=2048&q=75',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: { users: '1JTK+', uptime: '99.9%', performance: 'SSSSSSSSS+' },
    },
     {
      title: 'MY BINI 1',
      category: 'Full Stack',
      year: '2024',
      description: 'lorem Ipsum.',
      fullDescription: 'Complete e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and seamless user experience. Built with React, Node.js, and PostgreSQL.',
      image: 'https://www.pantau.com/_next/image?url=https%3A%2F%2Fpantau.sgp1.cdn.digitaloceanspaces.com%2Fimages%2F20240804-3954-446123229_1788594541633306_394263367615011274.jpg&w=2048&q=75',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: { users: '1JTK+', uptime: '99.9%', performance: 'SSSSSSSSS+' },
    },
    {
      title: 'Semester 3 Final Project ',
      category: 'Full Stack',
      year: '2024',
      description: 'lorem Ipsum.',
      fullDescription: 'Complete e-commerce platform featuring real-time inventory management, secure payment processing with Stripe, advanced analytics dashboard, and seamless user experience. Built with React, Node.js, and PostgreSQL.',
      image: 'https://www.pantau.com/_next/image?url=https%3A%2F%2Fpantau.sgp1.cdn.digitaloceanspaces.com%2Fimages%2F20240804-3954-446123229_1788594541633306_394263367615011274.jpg&w=2048&q=75',
      tags: ['PHP Native','MySQL','Bootstrap','CSS','JS'],
      metrics: { users: 'Fotocopy', member: '2' },
      github: 'https://github.com/IdrisSyaifulloh/ManajemenFotocopyan-TugasBesar-Semester2',
      demo: 'https://project-demo.com'
    },
    {
      title: 'MY BINI 2',
      category: 'Mobile',
      year: '2024',
      description: 'CANTIKNYA OI.',
      fullDescription: 'Feature-rich mobile application for fitness enthusiasts. Includes workout tracking, nutrition planning, social community features, and AI-powered recommendations. Built with React Native and Firebase.',
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/1200x600/webp/photo/p1/916/2024/11/11/go-yoon-jung-802564551.jpg',
      tags: ['React Native', 'Firebase', 'Redux', 'ML'],
      metrics: { downloads: '50K+', rating: '4.8/5', active: '15K' },
    },
    {
      title: 'MY BINI 3',
      category: 'Web App',
      year: '2023',
      description: 'imut nya oi',
      fullDescription: 'Enterprise-grade project management platform with real-time collaboration, advanced reporting, Gantt charts, time tracking, and seamless third-party integrations. Built with Next.js and GraphQL.',
      image: 'https://images.t2online.in/cdn-cgi/image/width=640,quality=70/https://apis.t2online.in/getImageStream/1058/1756644711962.jpg',
      tags: ['Next.js', 'GraphQL', 'AWS', 'WebSocket'],
      metrics: { companies: '200+', projects: '5K+', satisfaction: '95%' },
    },
  ];

  return (
    <section id="projects" className="py-32 lg:py-40 bg-white dark:bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.01),transparent)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.01),transparent)]" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-7xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Folder size={14} className="text-black dark:text-white" />
            <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
              Portfolio
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black dark:text-white tracking-tight leading-tight mb-4">
                Project
                <br />
                <span className="font-normal">KEREN</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
                A selection of my recent work across various domains and technologies
              </p>
            </div>
            
            <motion.a
              href="#"
              className="inline-flex items-center space-x-2 text-black dark:text-white group"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm font-medium border-b border-black dark:border-white pb-0.5">
                View All Projects
              </span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </motion.a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(index)}
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

// Enhanced Project Card
function ProjectCard({ project, index, isInView, isHovered, onHover, onLeave, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 10);
    mouseY.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-12">
          {/* Left: Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Meta */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.span 
                  className="text-sm font-mono text-gray-400 dark:text-gray-600"
                  animate={{ opacity: isHovered ? 1 : 0.5 }}
                >
                  0{index + 1}
                </motion.span>
                <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <motion.h3 
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white mb-4 leading-tight"
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string, i: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-lg"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value]: any, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="text-2xl font-light text-black dark:text-white">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {key}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
              />
              {/* View Project Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              >
                <div className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-full font-medium flex items-center space-x-2">
                  <span>View Project</span>
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-black dark:border-white rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Project Modal
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
        {/* Close Button */}
        <motion.button
          className="fixed top-8 right-8 w-12 h-12 border border-black dark:border-white rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X size={20} strokeWidth={1.5} />
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
            className="aspect-video rounded-3xl overflow-hidden mb-12"
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
              <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full mb-6">
                {project.category} · {project.year}
              </span>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black dark:text-white mb-6">
                {project.title}
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl mb-8">
                {Object.entries(project.metrics).map(([key, value]: any) => (
                  <div key={key}>
                    <div className="text-3xl font-light text-black dark:text-white mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

{/* Actions */}
<div className="flex gap-4">
  {project.demo && (
    <motion.a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ExternalLink size={18} />
      <span>Live Demo</span>
    </motion.a>
  )}

  {project.github && (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Github size={18} />
      <span>Source Code</span>
    </motion.a>
  )}
</div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                  Project Type
                </h3>
                <p className="text-lg text-black dark:text-white font-light">
                  {project.category}
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                  Year
                </h3>
                <p className="text-lg text-black dark:text-white font-light">
                  {project.year}
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                  Role
                </h3>
                <p className="text-lg text-black dark:text-white font-light">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
