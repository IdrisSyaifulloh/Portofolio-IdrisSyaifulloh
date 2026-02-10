import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', number: '01' },
    { name: 'About', href: '#about', number: '02' },
    { name: 'Skills', href: '#skills', number: '03' },
    { name: 'Projects', href: '#projects', number: '04' },
    { name: 'Experience', href: '#experience', number: '05' },
    { name: 'Contact', href: '#contact', number: '06' },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              className="text-xl font-light tracking-wider text-black dark:text-white"
              whileHover={{ letterSpacing: '0.3em' }}
              transition={{ duration: 0.3 }}
            >
              DEV
            </motion.a>

            {/* Desktop Navigation - Minimal */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-sm font-light tracking-wide text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <span className="text-xs opacity-40 mr-2">{link.number}</span>
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-black dark:bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === link.href.slice(1) ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
            </div>

            {/* Theme Toggle - Minimal */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? '☀' : '☾'}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Side Navigation Dots */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="group relative"
              whileHover={{ scale: 1.2 }}
            >
              <div className={`w-2 h-2 rounded-full border transition-all ${
                activeSection === link.href.slice(1)
                  ? 'bg-black dark:bg-white border-black dark:border-white'
                  : 'bg-transparent border-gray-400 dark:border-gray-600'
              }`} />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-gray-600 dark:text-gray-400">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-6 right-6 z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
        whileTap={{ scale: 0.95 }}
      >
        <span className="w-6 h-px bg-black dark:bg-white" />
        <span className="w-6 h-px bg-black dark:bg-white" />
      </motion.button>
    </>
  );
}
