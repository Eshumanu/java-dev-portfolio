import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Hibernate", "JPA"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Maven", "Postman", "Docker"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">02</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background p-8 hover:bg-card transition-colors duration-300 group"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
