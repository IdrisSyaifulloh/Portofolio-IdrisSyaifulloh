import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
export function Experience() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
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
          <div className="mb-20">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={14} className="text-black dark:text-white" />
              <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
                Journey
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black dark:text-white tracking-tight leading-tight mb-6">
              Experience &
              <br />
              <span className="font-normal">Education</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
              My professional journey and educational background
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-gray-700 dark:via-gray-800 dark:to-transparent" />

            {/* Experiences */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative pl-12 md:pl-24"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 md:left-8 top-8 -translate-x-1/2"
                    animate={{
                      scale: activeIndex === index ? 1.5 : 1,
                    }}
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

                  {/* Card */}
                  <motion.div
                    className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
                    whileHover={{ y: -5, borderColor: activeIndex === index ? '#000' : undefined }}
                  >
                    <div className="p-8 lg:p-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                             {typeof exp.icon === 'string' ? (
                            <img
                              src={exp.icon}
                              alt={exp.company}
                              className="h-6 w-6 object-contain"
                            />
                          ) : (
                            <exp.icon size={24} strokeWidth={1.5} />
                          )}
                          </div>
                          <div>
                            <h3 className="text-2xl font-light text-black dark:text-white mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-gray-900 dark:text-gray-100 font-medium mb-2">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center space-x-1.5">
                                <Calendar size={14} />
                                <span>{exp.period}</span>
                              </span>
                              <span className="flex items-center space-x-1.5">
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          exp.type === 'work'
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                        }`}>
                          {exp.type === 'work' ? 'Work' : exp.type === 'education' ? 'Education' : 'Internship'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 bg-black dark:bg-white rounded-full flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-black dark:border-white opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
