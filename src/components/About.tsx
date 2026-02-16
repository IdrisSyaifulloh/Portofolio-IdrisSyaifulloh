import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, Code2, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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

  const stats = [
    { value: '1', label: 'Years Experience', icon: Sparkles },
    { value: '10+', label: 'Projects Completed', icon: Code2 },
  ];

  const highlights = [
    'Full-Stack Development',
    'Devops & Cloud',
    'Cyber Security',
    'Decktop Application',
  ];

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-white dark:bg-black overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent rounded-full blur-3xl opacity-50"
        style={{ y }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Label */}
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={14} className="text-black dark:text-white" />
                <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
                  About Me
                </span>
              </motion.div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black dark:text-white mb-8 tracking-tight leading-tight">
                Passionate About
                <br />
                <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                  Innovation
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-12">
                <p>
                  I'm a software engineer
                </p>
                <p>
                  I Am Junior in IT
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-12">
                {highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full"
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 text-black dark:text-white group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-lg font-light border-b border-black dark:border-white pb-0.5">
                  Let's work together
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Stats & Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Stats Cards */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: -5, scale: 1.02 }}
                    className="group relative p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm"
                  >
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 opacity-0 group-hover:opacity-[0.02] transition-opacity"
                    />

                    <div className="relative flex items-start justify-between">
                      <div>
                        <motion.div
                          className="text-5xl lg:text-6xl font-light text-black dark:text-white mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                      <div className="p-3 bg-black dark:bg-white rounded-xl group-hover:scale-110 transition-transform">
                        <stat.icon size={20} className="text-white dark:text-black" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -z-10 -right-20 -bottom-20 w-64 h-64 border border-gray-200 dark:border-gray-800 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
