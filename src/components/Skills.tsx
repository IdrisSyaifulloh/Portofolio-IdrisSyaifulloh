import { motion } from 'motion/react';
import { useState } from 'react';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Exactly 10 skills for a perfect 2 rows of 5 layout
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
  ];

  return (
    <section 
      id="skills" 
      className="relative transition-colors duration-300 flex flex-col items-center justify-center" 
      style={{ 
        backgroundColor: '#ffffff', 
        minHeight: '80vh', 
        padding: '120px 0', 
        overflow: 'hidden' 
      }}
    >
      
      {/* Massive Title Text (Above the Grid) */}
      <div 
        className="flex flex-row items-center justify-center font-black leading-none uppercase tracking-tighter whitespace-nowrap" 
        style={{ fontFamily: 'Impact, sans-serif', fontSize: '12vw', color: '#111827', marginBottom: '80px' }}
      >
        <span style={{ transform: 'rotate(-2deg) translateY(5px)', display: 'inline-block' }}>S</span>
        <span style={{ transform: 'rotate(4deg)', display: 'inline-block' }}>K</span>
        <span style={{ transform: 'rotate(-3deg) translateY(-10px)', display: 'inline-block' }}>I</span>
        <span style={{ transform: 'rotate(2deg)', display: 'inline-block' }}>L</span>
        <span style={{ transform: 'rotate(-5deg)', display: 'inline-block' }}>L</span>
        <span style={{ transform: 'rotate(6deg) translateY(10px)', display: 'inline-block' }}>S</span>
      </div>

      {/* Neat Horizontal 5x2 Grid Container (Using inline CSS grid to bypass Tailwind limitations) */}
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: 'clamp(20px, 4vw, 50px)', 
            maxWidth: '900px', 
            margin: '0 auto',
            justifyItems: 'center'
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              whileHover={{ 
                scale: 1.25, 
                y: -10,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                type: 'spring', 
                stiffness: 300,
                delay: idx * 0.05 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative cursor-pointer group flex flex-col items-center justify-center w-full"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Clean Icon Floating Directly on Background */}
              <div 
                className="relative flex items-center justify-center transition-transform duration-300"
                style={{ 
                  width: 'clamp(50px, 10vw, 90px)', 
                  height: 'clamp(50px, 10vw, 90px)'
                }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}
                  loading="lazy"
                />
              </div>
              
              {/* Name appears smoothly below */}
              <div 
                className="absolute -bottom-8 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 font-extrabold tracking-wide"
                style={{ fontSize: '14px' }}
              >
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
