import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ropali Corporation",
      position: "Web Developer",
      type: "Full-Time",
      period: "September 2024 - Present",
      location: "Ropali Plaza Escriva Drive, Ortigas Center, Pasig City",
      description: "Designed, developed, and maintained internal web-based software to support various business processes, ensuring reliability, performance, and alignment with operational needs.",
      achievements: [
        "Integrated ERP data from Acumatica using RESTful APIs, automating transactions and syncing records across platforms to improve efficiency and reduce manual workload",
        "Implemented CI/CD pipelines using Git and GitLab for streamlined deployment, while leveraging frameworks like CodeIgniter and Laravel to build scalable, secure, and user-friendly web applications"
      ],
      technologies: ["C#", "Axios", "Acumatica", "SQL Server", "MySQL", "CRONJOB", "Ajax", "Bootstrap", "ERP", "jQuery", "GitLab"],
    },
    {
      company: "Self-Employed",
      position: "Freelancer (Full Stack Web Development)",
      type: "Self-Employed",
      period: "August 2023 - August 2024",
      location: "Antipolo, Rizal",
      description: "Delivered custom web development solutions for various clients, focusing on inventory management, educational systems, and appointment scheduling applications.",
      achievements: [
        "QuickStash – Inventory Management System: Developed a PHP-based inventory system with CRUD functionality, including print features and a borrowing system, utilizing Ajax, DOM, and PHP",
        "PST (Pre-Service Teacher) – Monitoring Management System: Created a monitoring system to track pre-service teachers' deployment, encompassing evaluation, daily time records, and statistical analysis",
        "Appointment System with Gmail Notification: Built a real-time appointment system featuring calendar functions, Gmail notifications via PHP Mailer, and PDF generation for appointment tickets"
      ],
      technologies: ["HTML", "CSS", "Javascript", "PHP", "XML", "Ajax"],
    },
    {
      company: "Rizal High School - Rotonda",
      position: "Java 3 & 4 Instructor",
      type: "Internship",
      period: "October 2023 - May 2024",
      location: "Pasig City",
      description: "Taught Java programming and SQL to students, focusing on practical applications and database integration within Java applications.",
      achievements: [
        "Developed and delivered curriculum and practical exercises to enhance students' understanding of object-oriented programming and SQL database management",
        "Evaluated student performance and provided feedback to support academic growth and technical proficiency"
      ],
      technologies: ["JDBC", "Java", "OOP", "SQL Workbench"],
    },
  ];

  return (
    <section id="experience" className="container mx-auto px-6 py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">Work <span className="text-primary">Experience</span></h2>
        <p className="text-lg text-muted-foreground">
          My professional journey and career milestones
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative mb-16 flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 z-10 h-5 w-5 rounded-full border-4 border-primary bg-background shadow-lg md:left-1/2 md:-translate-x-1/2">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            </div>

            {/* Content */}
            <div className="ml-20 w-full md:ml-0 md:w-5/12">
              <Card className="group overflow-hidden border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/50">
                <CardHeader className="space-y-4 pb-4">
                  {/* Period and Type Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      exp.type === 'Full-Time' 
                        ? 'bg-green-500/10 text-green-500' 
                        : exp.type === 'Self-Employed'
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'bg-purple-500/10 text-purple-500'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Position and Company */}
                  <CardTitle className="flex items-start gap-3">
                    <Briefcase className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div className="flex-1">
                      <div className="text-xl font-bold transition-colors group-hover:text-primary">
                        {exp.position}
                      </div>
                      <div className="mt-1 text-base font-semibold text-muted-foreground">
                        {exp.company}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </CardDescription>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardHeader>

                {/* Technologies */}
                <CardContent className="pt-0 pb-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;