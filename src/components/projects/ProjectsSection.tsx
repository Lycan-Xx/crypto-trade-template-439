
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern design, payment integration, and admin dashboard.",
    image: "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts and interactive maps.",
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    technologies: ["Vue.js", "Python", "FastAPI", "Weather API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "Mobile-first social media application with real-time messaging and content sharing.",
    image: "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design.",
    image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts and real-time analytics.",
    image: "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
        >
          Featured
          <br />
          <span className="text-gradient font-medium">Projects</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button size="sm" variant="outline" className="glass">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline" className="glass">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
