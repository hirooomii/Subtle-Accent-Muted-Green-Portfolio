import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRAMEWORK",
      skills: [
        { 
          name: "CodeIgniter", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
          color: "#EF4223"
        },
        { 
          name: "Laravel", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
          color: "#FF2D20"
        },
        { 
          name: ".NET Core", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
          color: "#512BD4"
        },
      ]
    },
    {
      title: "PROGRAMMING SKILLS",
      skills: [
        { 
          name: "Visual Studio", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
          color: "#5C2D91"
        },
        { 
          name: "Vue.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          color: "#4FC08D"
        },
        { 
          name: "C#", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          color: "#239120"
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        { 
          name: "HTML5", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26"
        },
        { 
          name: "CSS3", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6"
        },
        { 
          name: "PHP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          color: "#777BB4"
        },
        { 
          name: "Tailwind CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          color: "#06B6D4"
        },
        { 
          name: "Bootstrap", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "#7952B3"
        },
      ]
    },
    {
      title: "TOOLS AND MEDIUM",
      skills: [
        { 
          name: "VS Code", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "#007ACC"
        },
        { 
          name: "Visual Studio", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
          color: "#5C2D91"
        },
        { 
          name: "XAMPP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
          color: "#FB7A24"
        },
        { 
          name: "SQL Server", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
          color: "#CC2927"
        },
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1"
        },
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "#181717"
        },
        { 
          name: "Postman", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          color: "#FF6C37"
        },
      ]
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">Skills & <span className="text-primary">Expertise</span></h2>
        <p className="text-lg text-muted-foreground">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          >
            <div className="mb-8 text-center">
              <h3 className="relative inline-block text-2xl font-bold">
                {category.title}
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
              </h3>
            </div>

            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="group cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[140px]">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-muted/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-12"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                        />
                      </div>
                      <h4 className="text-sm font-semibold transition-colors duration-300 group-hover:text-primary">
                        {skill.name}
                      </h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;