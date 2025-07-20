import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Mock Button component since we don't have access to the original
const Button = ({ children, size, variant, className, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 flex items-center ${className}`}
    {...props}
  >
    {children}
  </button>
);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern design, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "Python", "FastAPI", "Weather API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "Mobile-first social media application with real-time messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

// Stagger offsets for uneven positioning
const staggerOffsets = [
  { top: 0, delay: 0 },
  { top: 60, delay: 0.1 },
  { top: 20, delay: 0.2 },
  { top: 80, delay: 0.3 },
  { top: 40, delay: 0.4 },
  { top: 100, delay: 0.5 }
];

export const ProjectsSection = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-400 text-left"
          >
            A showcase of my recent work, demonstrating various skills and technologies I've mastered.
          </motion.p>
        </div>

        {/* Desktop: Staggered 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 relative">
          {projects.map((project, index) => {
            const offset = staggerOffsets[index] || staggerOffsets[0];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: offset.delay, duration: 0.5 }}
                className="relative"
                style={{ marginTop: `${offset.top}px` }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>

        {/* Tablet: Staggered 2-column layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 relative">
          {projects.map((project, index) => {
            const offset = index % 2 === 0 ? { top: 0, delay: index * 0.1 } : { top: 40, delay: index * 0.1 };
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: offset.delay, duration: 0.5 }}
                className="relative"
                style={{ marginTop: `${offset.top}px` }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Single column, no stagger for better UX */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group border border-white/10 h-96">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button size="sm" variant="outline" className="text-sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button size="sm" variant="outline" className="text-sm">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col h-48">
        <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs border border-orange-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
