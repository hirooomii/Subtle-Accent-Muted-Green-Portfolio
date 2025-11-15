import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import FundSync from "@/assets/FundSync.png";
import Vestia from "@/assets/Vestia.png";
import TechList from "@/assets/TechList.png";
import Medical from "@/assets/Medical.png";
import EduSphere from "@/assets/EduSpher.png";
import Inventory from "@/assets/Inventory.png";
import TechFlow from "@/assets/TechFlow.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();
  const autoplayRef = useRef(null);

  const projects = [
    {
      title: "FundSync",
      description: "FundSync provides a streamlined way to track and manage an organizational cash flow. It helps validate both internal and external bank transactions, ensuring accuracy and transparency.",
      tags: ["Laravel", "Vue", "Inertia", "SQLite"],
      category: "Web Application",
      image: FundSync,
      link: "https://github.com/hirooomii/FundSync.git",
      github: "https://github.com/hirooomii/FundSync.git",
    },
    {
      title: "Vestia",
      description: "Vestia is a Point-of-Sale (POS) web application designed to streamline the selling and management of school uniforms and slacks.",
      tags: ["C#", ".NET", "NET Framework", "Cloudinary", "SQL Server"],
      category: "Web Application",
      image: Vestia,
      link: "https://github.com/hirooomii/Vestia.git",
      github: "https://github.com/hirooomii/Vestia.git",
    },
    {
      title: "TechList",
      description: "TechList is the centralized, automated solution for managing computer tools and equipment inventory and streamline ticketing",
      tags: ["VB.NET", "SQL", "NET Framework"],
      category: "Desktop Application",
      image: TechList,
      link: "https://github.com/hirooomii/Tech-List-Integrated-Inventory-System.git",
      github: "https://github.com/hirooomii/Tech-List-Integrated-Inventory-System.git",
    },
    {
      title: "Medical Axis",
      description: "The essential desktop application for accurate, organized, and seamlessly manage patient data and streamline clinic operations with our comprehensive medical record system.",
      tags: ["VB.NET", "SQL", "NET Framework"],
      category: "Desktop Application",
      image: Medical,
      link: "https://github.com/hirooomii/Medical-Axis-Record-Inventory-System.git",
      github: "https://github.com/hirooomii/Medical-Axis-Record-Inventory-System.git",
    },
    {
      title: "EduSphere",
      description: "Streamline the evaluation, pedagocial skills and record-keeping of pre-service teacher performance with the dedicated EduSphere system",
      tags: ["CodeIgniter4", "JQuery", "SQL"],
      category: "Web Application",
      image: EduSphere,
      link: "https://github.com/hirooomii/EduSphere.git",
      github: "https://github.com/hirooomii/EduSphere.git",
    },
    {
      title: "QuickStash",
      description: "Effortlessly monitor and track the current status of all your critical equipment and gear through one intuitive dashboard, ensuring accurate data and maximizing the efficiency of your inventory management.",
      tags: ["Native PHP", "Javascript", "SQL"],
      category: "Web Application",
      image: Inventory,
      link: "https://github.com/hirooomii/QuickStash-Inventory-Management-Sytem.git",
      github: "https://github.com/hirooomii/QuickStash-Inventory-Management-Sytem.git",
    },
    {
      title: "TechFlow",
      description: "The system facilitates the scheduling of essential transactions with the Registrar's office, such as document requests, enrollment concerns, and record updates, minimizing waiting times and long queue.",
      tags: ["Native PHP", "Javascript", "SQL"],
      category: "Web Application",
      image: TechFlow,
      link: "https://github.com/hirooomii/Flow.git",
      github: "https://github.com/hirooomii/Flow.git",
    },
  ];

  // Sync the carousel API with currentIndex state
  useEffect(() => {
    if (!api) return;

    // Update state when carousel slides
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Custom autoplay implementation
  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 4000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [api]);

  // Handle dot click to navigate
  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-lg text-muted-foreground">
          Showcasing my recent work and creative solutions
        </p>
      </motion.div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="mx-auto w-full max-w-5xl"
        onMouseEnter={() => {
          if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
          }
        }}
        onMouseLeave={() => {
          if (api) {
            autoplayRef.current = setInterval(() => {
              api.scrollNext();
            }, 4000);
          }
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 lg:basis-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card className="group h-full overflow-hidden border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                        {project.category}
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-primary"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.link}
                          className="text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-primary"
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-2xl transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-base text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Projects;