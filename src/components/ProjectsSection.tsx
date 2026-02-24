import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Java Microservices Application",
    description:
      "A distributed microservices-based application with service discovery, API gateway, and inter-service communication. Containerized using Docker.",
    tech: ["Java", "Spring Cloud", "Docker", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Full Stack Java Web App",
    description:
      "A complete full-stack web application featuring user authentication, CRUD operations, and a responsive React frontend connected to a Spring Boot backend.",
    tech: ["Spring Boot", "React", "PostgreSQL", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Spring Boot REST API",
    description:
      "A RESTful API service with JWT authentication, role-based access control, input validation, and API documentation using Swagger/OpenAPI.",
    tech: ["Java", "Spring Boot", "JWT", "Hibernate"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">03</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block border-b border-border py-10 first:border-t hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-foreground text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-wider text-muted-foreground/70 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
