import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certification', 'contact'];
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#00D084' }}>
              S
            </div>
            <span className="text-xl font-semibold text-black dark:text-white tracking-tight">
              Idris
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-1.5 group relative text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#00D084' }}
                    />
                  )}
                  <span className={isActive ? 'text-black dark:text-white font-semibold' : ''}>
                    {link.name}
                  </span>
                </a>
              );
            })}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isDark ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}