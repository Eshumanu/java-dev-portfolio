import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">01</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>

            <div className="w-56 h-72 rounded-2xl overflow-hidden border border-border">
              <img
                src={profileImg}
                alt="Eshwer Gujja"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Heyy Hi! i am Eshwer a <span className="text-foreground">Full Stack Java Developer</span> with
              strong fundamentals in Java and Spring Boot. I have hands-on experience building REST APIs
              and microservices-based applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am eager to learn, grow, and contribute to real-world software projects.
              My goal is to write clean, maintainable code and build applications that
              make a real difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments and enjoy solving
              complex problems with elegant, well-architected solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
