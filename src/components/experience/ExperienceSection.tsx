
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented automated testing reducing bugs by 60%"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
    achievements: [
      "Built 15+ responsive web applications",
      "Improved user engagement by 35%",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Started my career building web applications and learning modern development practices in a fast-paced startup environment.",
    achievements: [
      "Contributed to 10+ projects",
      "Learned modern web technologies",
      "Worked in agile development environment"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left"
        >
          Professional
          <br />
          <span className="text-gradient font-medium">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-400 text-left"
        >
          My journey through various roles and companies, building expertise and contributing to meaningful projects.
        </motion.p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="glass rounded-xl p-8 hover:bg-white/5 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
