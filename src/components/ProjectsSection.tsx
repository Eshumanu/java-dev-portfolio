import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Java Microservices Application",
    description:
      "A distributed microservices-based application with service discovery, API gateway, and inter-service communication. Built with Spring Cloud and containerized using Docker.",
    tech: ["Java", "Spring Boot", "Spring Cloud", "Docker", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Full Stack Java Web Application",
    description:
      "A complete full-stack web application featuring user authentication, CRUD operations, and a responsive React frontend connected to a Spring Boot backend.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Spring Boot REST API Project",
    description:
      "A RESTful API service with JWT authentication, role-based access control, input validation, and comprehensive API documentation using Swagger/OpenAPI.",
    tech: ["Java", "Spring Boot", "JWT", "Hibernate", "Maven"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg font-normal mr-2">03.</span>
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder size={36} className="text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {t}
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

export default ProjectsSection;
