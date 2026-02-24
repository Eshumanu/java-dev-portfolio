import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Hibernate", "JPA"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React (Basic–Intermediate)"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Maven", "Postman", "Docker (Basic)"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-spacing bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg font-normal mr-2">02.</span>
            Skills
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
