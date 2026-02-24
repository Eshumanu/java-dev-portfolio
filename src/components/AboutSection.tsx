import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg font-normal mr-2">01.</span>
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a motivated <span className="text-foreground font-medium">Full Stack Java Developer</span> with 
              strong fundamentals in Java and Spring Boot. I have hands-on experience building REST APIs 
              and microservices-based applications, alongside a good understanding of frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am eager to learn, grow, and contribute to real-world software projects. 
              My goal is to write clean, maintainable code and build applications that 
              make a difference. I thrive in collaborative environments and enjoy solving 
              complex problems with elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {["Java", "Spring Boot", "React", "MySQL", "Docker", "Git"].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span> {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="w-56 h-56 rounded-lg bg-secondary overflow-hidden relative z-10 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute top-4 left-4 w-56 h-56 rounded-lg border-2 border-primary -z-0 group-hover:top-3 group-hover:left-3 transition-all" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
