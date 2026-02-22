import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/spongebob-squarepants--patrick-vector.jpg';
import Gua from '../assets/Gua.jpeg';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const [text, setText] = useState('');
  const fullText = 'Software Engineer';
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black"
      style={{ opacity, scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Premium Grid Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"
          style={{ x, y }}
        />
      </div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-gray-200 dark:border-gray-800 rounded-full opacity-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity }
        }}
        style={{ x: useTransform(x, [0, 100], [0, 30]), y: useTransform(y, [0, 100], [0, 30]) }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-black dark:bg-white opacity-[0.02] rounded-lg"
        animate={{ 
          rotate: -360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ x: useTransform(x, [0, 100], [0, -20]), y: useTransform(y, [0, 100], [0, -20]) }}
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
                </span>
                <span className="text-xs tracking-wider text-gray-600 dark:text-gray-400 uppercase font-medium">
                  Available for Work
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div 
                style={{ x: useTransform(x, [-50, 50], [-5, 5]) }}
                className="mb-8"
              >
                <motion.h1
                  className="font-light text-black dark:text-white tracking-tight leading-[0.9]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span 
                    className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white"
                    whileHover={{ x: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {text}<motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-black dark:text-white"
                    >|</motion.span>
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed font-light"
                style={{ x: useTransform(x, [-50, 50], [3, -3]) }}
              >
                Iam Ultraman.
                <br />
                <span className="text-gray-400 dark:text-gray-500">I am Ultraman Ready For Fight.</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <MagneticButton href="#contact" primary>
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                
                <MagneticButton href="#projects" secondary>
                  <span>View Portfolio</span>
                </MagneticButton>

                <MagneticButton href="#" outline>
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </MagneticButton>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-6"
              >
                <span className="text-xs tracking-[0.2em] text-gray-400 dark:text-gray-500 font-medium">CONNECT</span>
                <motion.div 
                  className="h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 dark:to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                {[
                  { Icon: Github, href: 'https://github.com/IdrisSyaifulloh', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/idris-syaifulloh-b36478263/', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:saefullahiddris@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    aria-label={label}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right: Profile Photo */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Main Photo Container */}
                <motion.div
                  className="relative aspect-square max-w-lg mx-auto"
                  style={{ 
                    x: useTransform(x, [-50, 50], [10, -10]),
                    y: useTransform(y, [-50, 50], [10, -10]),
                  }}
                >
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl -z-10"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="absolute -inset-2 border-2 border-black dark:border-white rounded-3xl -z-10 opacity-10"
                    animate={{ rotate: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Photo */}
                  <motion.div
                    className="relative aspect-square rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ImageWithFallback
                      src={Gua}
                      alt="Profile Photo"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>

                  {/* Floating Badge - Clients */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 px-6 py-4 bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl shadow-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}  
                    transition={{ delay: 1, type: 'spring' }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-white dark:border-black"
                          />
                        ))}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-black dark:text-white">Hebat</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Kuat</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stats Badge - Years */}
                  <motion.div
                    className="absolute -top-6 -left-6 px-4 py-3 bg-black dark:bg-white rounded-xl shadow-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05, rotate: -3 }}
                  >
                    <div className="text-2xl font-light text-white dark:text-black">Fresh Graduate</div>
                    <div className="text-xs text-gray-300 dark:text-gray-700"></div>
                  </motion.div>
                </motion.div>

                {/* Decorative Dots */}
                <div className="absolute -z-20 inset-0 flex items-center justify-center opacity-20">
                  <div className="grid grid-cols-8 gap-3">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-black dark:bg-white rounded-full"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-600 to-transparent"
          />
          <span className="text-xs tracking-wider text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}

// Enhanced Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  primary = false,
  secondary = false,
  outline = false,
}: { 
  children: React.ReactNode; 
  href: string; 
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  let classes = 'group relative px-8 py-4 font-light tracking-wide overflow-hidden inline-flex items-center space-x-2 transition-all duration-300 ';
  
  if (primary) {
    classes += 'bg-black dark:bg-white text-white dark:text-black shadow-lg hover:shadow-xl';
  } else if (secondary) {
    classes += 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white';
  } else if (outline) {
    classes += 'border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black';
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      {!primary && !outline && (
        <motion.span
          className="absolute inset-0 bg-black dark:bg-white"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className={`relative z-10 flex items-center space-x-2 ${!primary && !outline && 'group-hover:text-white dark:group-hover:text-black'}`}>
        {children}
      </span>
    </motion.a>
  );
}