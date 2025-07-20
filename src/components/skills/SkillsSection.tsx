
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Palette, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"]
  },
  {
    title: "Design & UI/UX",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Framer"]
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="w-6 h-6" />,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Kubernetes"]
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"]
  }
];

export const SkillsSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
        >
          Technical
          <br />
          <span className="text-gradient font-medium">Skills & Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          A comprehensive overview of my technical skills and the technologies I work with to create amazing digital experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-primary">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
