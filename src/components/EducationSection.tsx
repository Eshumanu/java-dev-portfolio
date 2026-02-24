import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology — Computer Science",
    subtitle: "Your University Name",
    period: "2020 — 2024",
    description: "Relevant coursework: Data Structures, Algorithms, OOP, Database Management, Software Engineering, Web Technologies.",
  },
  {
    icon: Award,
    title: "Certifications & Training",
    subtitle: "Online Platforms",
    period: "2023 — Present",
    description: "Completed courses in Java Full Stack Development, Spring Boot Microservices, and React fundamentals from platforms like Udemy and Coursera.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding section-spacing bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg font-normal mr-2">04.</span>
            Education
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              <div className="pb-8">
                <p className="text-xs font-mono text-primary mb-1">{item.period}</p>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
