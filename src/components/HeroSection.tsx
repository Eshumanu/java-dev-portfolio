import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          {/* Full Stack Java Developer */}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
        >
          Eshwer
          <br />
          {/* Gujja */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed mb-12"
        >
          Building robust, scalable applications with Spring Boot,
          Microservices, and modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300">
            <Linkedin size={16} />
          </a>
          <a href="mailto:john@example.com"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300">
            <Mail size={16} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
