import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      lastScrollY.current = currentScrollY;
      
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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm'
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
              IS
            </div>
            <span className="text-xl font-semibold text-black dark:text-white tracking-tight">
              Idris Syaifulloh
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
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isDark ? '☀' : '☾'}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) menu.classList.toggle('hidden');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div id="mobile-menu" className="hidden lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 font-medium"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}