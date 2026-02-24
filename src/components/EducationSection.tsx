import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "2020 — 2024",
    title: "Bachelor of Technology — Computer Science",
    subtitle: "Your University Name",
    description: "Data Structures, Algorithms, OOP, Database Management, Software Engineering, Web Technologies.",
  },
  {
    period: "2023 — Present",
    title: "Certifications & Training",
    subtitle: "Online Platforms",
    description: "Java Full Stack Development, Spring Boot Microservices, and React fundamentals via Udemy and Coursera.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">04</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </motion.div>

          <div className="md:col-span-8 space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <p className="text-xs font-mono text-muted-foreground mb-2">{item.period}</p>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
