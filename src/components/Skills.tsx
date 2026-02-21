import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Code, Database, Cloud, Smartphone, Star, ComputerIcon, } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React & Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Vue.js' },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js' },
        { name: 'Python'},
        { name: 'PostgreSQL' },
        { name: 'GraphQL'},
      ],
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'CI/CD' },
        { name: 'Kubernetes'},
      ],
    },
    {
      title: 'Dekstop',
      icon: ComputerIcon,
      skills: [
        { name: 'Pyside6' },
        { name: 'Python' },
        { name: 'Qt' },
        { name: 'C++' },
      ],
    },
     {
      title: 'Cyber Security',
      icon: ComputerIcon,
      skills: [
        { name: 'Wireshark'},
        { name: 'Kali Linux Tools' },
        { name: 'Remnux' },
        { name: 'Vmware' },
      ],
    },
     {
      title: 'Comper Vision & Machine Learning',
      icon: ComputerIcon,
      skills: [
        { name: 'Python' },
        { name: 'Yolo' },
        { name: 'Pytorch' },
        { name: 'ONNX' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Star size={14} className="text-black dark:text-white" />
              <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
                Expertise
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black dark:text-white mb-6 tracking-tight">
              Skills &
              <br />
              <span className="font-normal">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 lg:p-10 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden"
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Header */}
                <div className="relative flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-black dark:bg-white rounded-xl group-hover:scale-110 transition-transform">
                    <category.icon size={24} className="text-white dark:text-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-black dark:text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="relative space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      isInView={isInView}
                      delay={categoryIndex * 0.15 + skillIndex * 0.1}
                      isHovered={hoveredSkill === skill.name}
                      onHover={() => setHoveredSkill(skill.name)}
                      onLeave={() => setHoveredSkill(null)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid sm:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              { 
                title: 'Fast Learning', 
                content: 'Staying up-to-date with the latest technologies and best practices in the industry.',
              },
              { 
                title: 'Always Learning', 
                content: 'Staying up-to-date with the latest technologies and best practices in the industry.',
              },
              { 
                title: 'Best Practices', 
                content: 'Writing clean, maintainable code following industry standards and design patterns.',
              },
              { 
                title: 'Team Player', 
                content: 'Excellent collaboration and communication skills for successful project delivery.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl"
              >
                <h4 className="text-lg font-normal text-black dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Skill Bar Component
function SkillBar({ skill, isInView, delay, isHovered, onHover, onLeave }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="cursor-pointer"
    >
      <div className="flex justify-between items-center mb-3">
        <motion.span 
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          {skill.name}
        </motion.span>
      </div>
    </motion.div>
  );
}
