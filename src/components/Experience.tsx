import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
export function Experience() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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

  const experiences = [
    {
      type: 'education',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCH5oxtpVBPr6mv5jRyyOBfNxdtTQCoT-rA&s',
      title: 'Bachelor of Computer Science',
      company: 'SMK Amaliah 1&2',
      location: 'Bogor, Indonesia',
      period: '2016 - 2020',
      description: 'Graduated with honors. Specialized in Software Engineering and Artificial Intelligence. Active member of the computer science community.',
      achievements: [
         'HEBAT',
        'SEHAT',
        'KUAT',
      ],
    },

    {
      type: 'education',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Telkom_University_potrait.png',
      title: 'Computer Engineering',
      company: 'Telkom University',
      location: 'Bandung, Indonesia',
      period: '2023 - 2026',
      description: 'Graduated with honors. Specialized in Software Engineering and Artificial Intelligence. Active member of the computer science community.',
      achievements: [
        'HEBAT',
        'SEHAT',
        'KUAT',
      ],
    },
    {
      type: 'internship',
      icon: 'https://storage.googleapis.com/storage-ajaib-prd-platform-wp-artifact/2019/10/BNI-Syariah.jpg',
      title: 'Back Office',
      company: 'BNI Syariah',
      location: 'Bogor, Indonesia',
      period: '2022',
      description: 'Leading development of cloud-based applications and mentoring junior developers. Implementing best practices for CI/CD pipelines and microservices architecture.',
      achievements: [
        'Monitoring Website Absensi',
        'Shorting Data',
        'Verivication Data New Nasabah',
      ],
    },
    {
      type: 'internship',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbPZBp7vBSqUHnv1CVFc3lritK0yFdfgfGg&s',
      title: 'Full Stack Developer',
      company: 'CoE STAS-RG.',
      location: 'Bandung, Indonesia',
      period: '2025 - 2026',
      description: 'Developed and maintained multiple web applications using modern technologies.',
      achievements: [
       'APA KEK SUKA SUKA AJA',
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-20 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={14} className="text-black dark:text-white" />
              <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
                Journey
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl font-light text-black dark:text-white tracking-tight leading-tight mb-6">
              Experience & <span className="font-bold">Education</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto lg:mx-0">
              My professional journey and educational background
            </p>
          </div>

          {/* Split Sections */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-16">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-12 pl-0 md:pl-8">
                <Briefcase size={28} className="text-gray-400" />
                <h3 className="text-3xl font-light text-black dark:text-white">Experience</h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-gray-700 dark:via-gray-800 dark:to-transparent" />
                <div className="space-y-12">
                  {experiences.filter(e => e.type !== 'education').map((exp, index) => (
                    <motion.div
                      key={`exp-${index}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      onMouseEnter={() => setActiveIndex(index)}
                      className="relative pl-12 md:pl-24"
                    >
                      <motion.div
                        className="absolute left-0 md:left-8 top-8 -translate-x-1/2"
                        animate={{ scale: activeIndex === index ? 1.5 : 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="relative">
                          <div className="w-4 h-4 bg-black dark:bg-white rounded-full" />
                          {activeIndex === index && (
                            <motion.div
                              className="absolute inset-0 bg-black dark:bg-white rounded-full"
                              initial={{ scale: 1, opacity: 0.5 }}
                              animate={{ scale: 2, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
                        whileHover={{ y: -5, borderColor: activeIndex === index ? '#000' : undefined }}
                      >
                        <div className="p-8">
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                                {typeof exp.icon === 'string' ? (
                                  <img src={exp.icon} alt={exp.company} className="h-6 w-6 object-contain" />
                                ) : null}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                                  {exp.title}
                                </h3>
                                <p className="text-base text-gray-900 dark:text-gray-100 font-medium mb-2">
                                  {exp.company}
                                </p>
                                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                                  <span className="flex items-center space-x-1">
                                    <Calendar size={12} />
                                    <span>{exp.period}</span>
                                  </span>
                                  <span className="flex items-center space-x-1">
                                    <MapPin size={12} />
                                    <span>{exp.location}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                            {exp.description}
                          </p>
                          <div>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li key={i} className="flex items-start space-x-2">
                                  <span className="mt-1.5 w-1 h-1 bg-black dark:bg-white rounded-full flex-shrink-0" />
                                  <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-12 pl-0 md:pl-8">
                <GraduationCap size={28} className="text-gray-400" />
                <h3 className="text-3xl font-light text-black dark:text-white">Education</h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-gray-700 dark:via-gray-800 dark:to-transparent" />
                <div className="space-y-12">
                  {experiences.filter(e => e.type === 'education').map((exp, index) => {
                    const globalIndex = 100 + index;
                    return (
                      <motion.div
                        key={`edu-${index}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onMouseEnter={() => setActiveIndex(globalIndex)}
                        className="relative pl-12 md:pl-24"
                      >
                        <motion.div
                          className="absolute left-0 md:left-8 top-8 -translate-x-1/2"
                          animate={{ scale: activeIndex === globalIndex ? 1.5 : 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <div className="relative">
                            <div className="w-4 h-4 bg-black dark:bg-white rounded-full" />
                            {activeIndex === globalIndex && (
                              <motion.div
                                className="absolute inset-0 bg-black dark:bg-white rounded-full"
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </div>
                        </motion.div>

                        <motion.div
                          className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
                          whileHover={{ y: -5, borderColor: activeIndex === globalIndex ? '#000' : undefined }}
                        >
                          <div className="p-8">
                            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                              <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                                  {typeof exp.icon === 'string' ? (
                                    <img src={exp.icon} alt={exp.company} className="h-6 w-6 object-contain" />
                                  ) : null}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                                    {exp.title}
                                  </h3>
                                  <p className="text-base text-gray-900 dark:text-gray-100 font-medium mb-2">
                                    {exp.company}
                                  </p>
                                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center space-x-1">
                                      <Calendar size={12} />
                                      <span>{exp.period}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <MapPin size={12} />
                                      <span>{exp.location}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                              {exp.description}
                            </p>
                            <div>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li key={i} className="flex items-start space-x-2">
                                    <span className="mt-1.5 w-1 h-1 bg-black dark:bg-white rounded-full flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
