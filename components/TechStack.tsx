import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Magnet from './Magnet';

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: '/images/techstack/react.png' },
    { name: 'React Native', icon: '/images/techstack/figma.png' },
    { name: 'Next.js', icon: '/images/techstack/figma.png' },
    { name: 'TypeScript', icon: '/images/techstack/typescript.png' },
    { name: 'Laravel', icon: '/images/techstack/laravel.png' },
    { name: 'PHP', icon: '/images/techstack/php.png' },
    { name: 'Express', icon: '/images/techstack/ex.png' },
    { name: 'Node.js', icon: '/images/techstack/node-js.png' },
    { name: 'PostgreSQL', icon: '/images/techstack/figma.png' },
    { name: 'MongoDB', icon: '/images/techstack/mongodb.png' },
    { name: 'Tailwind CSS', icon: '/images/techstack/tailwind.png' },
    { name: 'Figma', icon: '/images/techstack/figma.png' },
    { name: 'Git', icon: '/images/techstack/git.png' },
    { name: 'VS Code', icon: '/images/techstack/vscode.png' },
    { name: 'Vercel', icon: '/images/techstack/figma.png' },
  ];

  return (
    <motion.div 
      className="w-full items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <span className='text-cpurple text-sm sm:text-md'>- technologies I work with</span>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-2">
        {technologies.map((tech, index) => {

          return(
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/30 transition-all scale-90 hover:scale-110"
            >
              <Image src={tech.icon} alt={''} width={24} height={24}/>
              <span className="text-xs text-center text-muted-foreground font-mono">
                {tech.name}
              </span>
            </motion.div>
          )
      })}
        </div>
    </motion.div>
 
  )
}
