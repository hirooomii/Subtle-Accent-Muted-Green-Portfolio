import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Zap, User, GraduationCap, Mail, MapPin } from "lucide-react";
import Profile from "@/assets/profile.jpg";

export const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and industry standards",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail and user experience",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver the best possible user experience",
    },
  ];

  const personalInfo = [
    {
      icon: User,
      label: "Name",
      value: "Kenneth L. Cobarrubias", // Replace with your actual name
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Bachelor of Technical Vocational Teacher Education", // Replace with your education
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Antipolo City, Rizal Philippines",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kennethcobarubias12@gmail.com", // Replace with your email
    },
  ];

  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about creating exceptional digital experiences
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border-border bg-card shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Profile Image Section */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-8xl mb-4"
                  >
                   <img
                    src={Profile}
                    alt="Profile"
                    className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              {/* About Text Section */}
              <CardContent className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a full-stack developer with a passion for creating beautiful, functional, and
                    user-friendly web applications. With expertise in modern web technologies, I bring ideas to
                    life through clean code and thoughtful design.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently working at Ropali Corporation, I specialize in building scalable web applications
                    using frameworks like Laravel, CodeIgniter, and modern JavaScript libraries. I'm dedicated to
                    continuous learning and staying updated with the latest industry trends.
                  </p>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 gap-3 pt-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{info.label}:</span>{" "}
                        <span className="text-muted-foreground">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* What I Do Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h3 className="text-3xl font-bold mb-2">What I Do</h3>
            <p className="text-muted-foreground">Core principles that guide my work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <feature.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;