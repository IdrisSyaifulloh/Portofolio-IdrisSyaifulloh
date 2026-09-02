import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ArrowUpRight, Download, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Gua from '../assets/Gua.jpeg';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-32 flex items-center bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 pt-12 lg:pt-0">
            {/* Greeting Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 border-2 border-dashed text-black dark:text-white font-medium text-sm sm:text-base mb-6 relative"
              style={{ borderColor: '#00D084' }}
            >
              <div className="absolute -left-1.5 -top-1.5 w-3 h-3" style={{ backgroundColor: '#00D084' }} />
              <div className="absolute -right-1.5 -top-1.5 w-3 h-3" style={{ backgroundColor: '#00D084' }} />
              <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3" style={{ backgroundColor: '#00D084' }} />
              <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3" style={{ backgroundColor: '#00D084' }} />
              Hi everyone 👋, I'am Idris Syaifulloh
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              Software Engineer<br />
              Based in Indonesia
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 max-w-lg mb-10 text-lg sm:text-xl leading-relaxed"
            >
              I'm a software engineer passionate about creating applications that
              not only meet functional requirements but also delight users with
              clean code and great performance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 flex items-center gap-2 font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors relative"
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                Get In Touch <ArrowUpRight className="w-5 h-5" style={{ color: '#00D084' }} />
                <div className="absolute top-1 left-1 w-full h-full -z-10" style={{ backgroundColor: '#00D084' }} />
              </a>
              
              <a
                href="#"
                className="flex items-center gap-2 font-semibold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Download CV <Download className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="font-medium text-black dark:text-white mr-2">Find me on:</span>
              
              <a href="https://github.com/IdrisSyaifulloh" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/idris-syaifulloh-b36478263/" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors border" style={{ backgroundColor: '#00D084', borderColor: '#00D084' }}>
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2 relative mt-8 lg:mt-0">
            {/* Green Abstract Shapes Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-125 -z-20 pointer-events-none hidden md:block">
              <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="none">
                <path d="M50,300 Q150,250 250,350 T450,250" fill="none" stroke="#00D084" strokeWidth="40" strokeLinecap="round" className="opacity-80" />
                <path d="M100,400 Q200,350 350,450 T550,300" fill="none" stroke="#00D084" strokeWidth="40" strokeLinecap="round" className="opacity-80" />
              </svg>
            </div>

            {/* Squiggly line top left */}
            <div className="absolute -top-10 -left-10 z-20 hidden md:block">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20 L15 5 L30 35 L45 10 L58 25" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white"/>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full"
              style={{ maxWidth: '400px' }}
            >
              {/* Black background offset */}
              <div className="absolute top-4 left-4 xl:top-6 xl:left-6 w-full h-full -z-10" style={{ backgroundColor: 'black' }} />
              
              {/* Image */}
              <div className="relative bg-gray-200 border-2 overflow-hidden" style={{ borderColor: 'black', aspectRatio: '4/5' }}>
                <ImageWithFallback
                  src={Gua}
                  alt="Idris Syaifulloh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Circular Text Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -left-12 -bottom-12 w-32 h-32 bg-white dark:bg-black rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg z-20 hidden sm:flex"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 rotate-45 text-black dark:text-white" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="font-medium uppercase tracking-widest fill-black dark:fill-white" style={{ fontSize: '11px' }}>
                      <textPath href="#textPath" startOffset="0%">
                        • Explore more about me • Explore more about me
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div 
        className="absolute bottom-0 left-0 w-full text-white overflow-hidden py-4 border-b-4"
        style={{ backgroundColor: 'black', borderColor: '#00D084' }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 text-xl sm:text-2xl font-medium">
              <span>Web Development</span>
              <span style={{ color: '#00D084' }}>✦</span>
              <span>Backend Engineering</span>
              <span style={{ color: '#00D084' }}>✦</span>
              <span>API Design</span>
              <span style={{ color: '#00D084' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}